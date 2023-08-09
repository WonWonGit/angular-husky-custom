import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input() buttonLabel: string = '';

  @Output() onClick = new EventEmitter();

  @Input() buttonType: ButtonType = ButtonType.PRIMARY;

  @Input() buttonDisable: boolean = true;

  click(event: any) {
    if (this.buttonType === ButtonType.PRIMARY) {
      this.onClick.emit(event);
    }
  }
}

export enum ButtonType {
  PRIMARY = 'primary',
  ERROR = 'error',
  LOADING = 'loading',
}
