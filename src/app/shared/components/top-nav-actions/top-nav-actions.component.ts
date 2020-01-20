import { Component, OnInit, Input } from '@angular/core';
import { PageAction } from 'src/app/models/action';
import { Router } from '@angular/router';

@Component({
  selector: 'iv-top-nav-actions',
  templateUrl: './top-nav-actions.component.html',
  styleUrls: ['./top-nav-actions.component.scss']
})

export class TopNavActions implements OnInit {
  @Input() public crumbs: any[] = [];
  @Input() public action: PageAction;

  constructor(private router: Router) { }

  ngOnInit(): void { }

  public goTo(path: string): void {
    this.router.navigateByUrl(path);
  }
}

