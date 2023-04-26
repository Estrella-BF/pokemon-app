import { Component, Input, OnInit } from '@angular/core';
import { IErrorNumberMessage } from './error-number-message.interface';

@Component({
  selector: 'app-error-number-message',
  templateUrl: './error-number-message.component.html',
  styleUrls: ['./error-number-message.component.scss']
})
export class ErrorNumberMessageComponent implements OnInit {

  @Input()
  errors: IErrorNumberMessage = {} as IErrorNumberMessage;

  constructor() { }

  ngOnInit(): void {
  }

}
