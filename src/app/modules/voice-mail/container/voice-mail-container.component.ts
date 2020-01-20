import { Component, OnInit, ChangeDetectorRef, AfterViewInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { VoiceMailState } from '../store/reducers/voice-mail.reducer';
import { ICrumb, TableView } from 'src/app/models/generic.model';
import { PageAction } from 'src/app/models/action';
import { LoadVoiceMail } from '../store/actions/voice-mail.action';
import { GenericPageComponent } from 'src/app/shared/components/generic-component/generic-page.component';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'iv-voice-mail-container',
  templateUrl: './voice-mail-container.component.html',
  styleUrls: ['./voice-mail-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class VoiceMailContainerComponent implements OnInit {
  public tableView = TableView[TableView.card];
  constructor(private store: Store<AppState>) {
    this.store.dispatch(LoadVoiceMail());
  }

  ngOnInit() { }

  ngAfterViewInit() { }
}