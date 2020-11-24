import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `
   <ng-content select="h5"> 
    </ng-content>
    <p (click)="childClick()">
    Hi, {{user.name}}!
    </p>
    <ng-content select="h3"> 
    </ng-content>
  `,
  styles: [
  ]
})
export class ChildComponent implements OnInit {

  @Input() user;
  @Output() userChanged: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  childClick() {
    this.userChanged.emit(this.user.name + "___kek");
  }

}
