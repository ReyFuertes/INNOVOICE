import { Component, OnInit, Input } from '@angular/core';
import { FormControlName, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'iv-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  @Input()
  public label: string = 'Label here';
  @Input()
  public placeholder: string = 'Placehold here';
  @Input()
  public controlName: any;
  @Input()
  public form: FormGroup;
  @Input()
  public isLongText: boolean = false;

  constructor() { }

  ngOnInit(): void { }
}
