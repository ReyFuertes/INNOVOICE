import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ICrumb, TableView } from 'src/app/models/generic.model';
import { PageAction } from 'src/app/models/action';
import { GenericPageComponent } from 'src/app/shared/components/generic-component/generic-page.component';
import { VoiceMailStatus, IVoiceMail } from '../../models/voice-mail.model';
import { Store, select } from '@ngrx/store';
import { filterVoicemailSelector } from '../../store/selectors/voice-mail.selector';
import { Observable } from 'rxjs';
import { getVoiceMailsSelector } from '../../store/selectors/voice-mail.selector';
import { AppState } from 'src/app/store/app.reducer';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'iv-voice-mail-page',
  templateUrl: './voice-mail-page.component.html',
  styleUrls: ['./voice-mail-page.component.scss']
})

export class VoicemailPageComponent extends GenericPageComponent implements OnInit {
  public GetCrumbs(): ICrumb[] {
    return [{ text: 'Voicemail', path: '' }]
  }
  public GetPageAction(): PageAction {
    return {
      addBtnText: 'add voice mail',
      iconName: 'icon-plus-circle',
      addFn: this.addUserAction,
      importFn: this.importAction,
      exportFn: this.exportAction
    };
  }
  public statuses = VoiceMailStatus;
  public tableView = TableView[TableView.card];
  public items$: Observable<IVoiceMail[]>;

  public exportAction = () => {
    console.log('implement export');
  }

  public importAction = () => {
    console.log('implement import');
  }

  public addUserAction = () => {
    console.log('implement add user');
  }

  constructor(
    private store: Store<AppState>
  ) {
    super();
    this.items$ = this.store.pipe(select(getVoiceMailsSelector));
  }

  public onSearch(event: string = ''): void {
    if (event)
      this.items$ = this.store.pipe(debounceTime(500), select(filterVoicemailSelector(event)));
    else
      this.items$ = this.store.pipe(select(getVoiceMailsSelector));
  }

  ngOnInit() { }

  public get getStatus(): number {
    return Math.floor(Math.random() * 3) + 1;
  }

  ngAfterViewInit() { }

  public onToggle(event: string): void {
    this.tableView = event;
  }
}