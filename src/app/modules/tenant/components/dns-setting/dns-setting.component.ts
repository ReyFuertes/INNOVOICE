import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'iv-dns-setting',
  templateUrl: './dns-setting.component.html',
  styleUrls: ['./dns-setting.component.scss']
})

export class DnsSettingComponent implements OnInit {
  @Input()
  public items: Array<{label: string, value: string, icon: string}> = [
    {
      label: 'name of label',
      value: 'Answer here',
      icon: 'icon-copy'
    },
    {
      label: 'name of label',
      value: 'Answer here',
      icon: 'icon-copy'
    },
    {
      label: 'name of label',
      value: 'Answer here',
      icon: 'icon-copy'
    }
  ];
  constructor(private router: Router) { }

  ngOnInit() { }

  public redirectTo(): void {
    this.router.navigateByUrl('/dashboard/reseller/add');
  }
}