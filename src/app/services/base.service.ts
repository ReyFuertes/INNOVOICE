/**
 * Auth to use some middleware to avoid inject common headersw
 */

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

export abstract class BaseService<T> {
  protected baseUrl: string;

  constructor(
    private http: HttpClient,
    private entity: string) {
      this.baseUrl = environment.apiUrl + entity;
  }

  private getToken(): string {
    return JSON.parse(localStorage.getItem('user') || null) ?
      JSON.parse(localStorage.getItem('user')).token : null;
  }

  protected commonHeaders(isUpdate: boolean = false): HttpHeaders {
    const contentType = isUpdate ? 'application/json-patch+json' : 'application/json';
    return new HttpHeaders({
      'Content-Type': contentType,
      Accept: 'application/json',
      Authorization: `Bearer ${this.getToken()}`,
    });
  }

  public index(): Observable<T[]> {
    return this.http.get<T[]>(this.baseUrl, { headers: this.commonHeaders() });
  }

  public find(id: string | number) {
    return this.http.get<T>(`${this.baseUrl}/${id}`, { headers: this.commonHeaders() });
  }

  public getResourse(imageUrl: string): Observable<T> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.getToken()}`,
      responseType: 'blob'
    });
    const options = { headers };
    return this.http.get<T>(imageUrl, options);
  }

  public create(object?: T): Observable<T> {
    return this.http.post<T>(this.baseUrl, object, { headers: this.commonHeaders() });
  }

  public delete(): Observable<any> {
    return this.http.delete(this.baseUrl, { headers: this.commonHeaders() });
  }

  public upload(route: string, object: T): Observable<T> {
    return this.http.post<T>(`${this.baseUrl}/route`, object, { headers: this.commonHeaders() });
  }

  public update(object: T): Observable<T> {
    return this.http.put<T>(`${this.baseUrl}/${object['id']}`, object, { headers: this.commonHeaders(false) });
  }

  public patch(object: T): Observable<T> {
    return this.http.patch<T>(`${this.baseUrl}/${object['id']}`, object, { headers: this.commonHeaders(true) }
    );
  }
}
