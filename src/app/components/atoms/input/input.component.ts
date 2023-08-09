import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() label: string = '';

  @Input() placeholder: string = '';

  @Input() inputType: string = '';

  @Input() control!: FormControl<any>;

  @Input() className: InputType = InputType.PRIMARY;
}

export enum InputType {
  PRIMARY = 'primary',
  ERROR = 'error',
  LOADING = 'loading',
}
