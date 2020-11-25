import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
    <button (click)="myclick()"> click </button>

      <h1 *ngIf="isVisible"  [style.fontSize.em]="fontSize" [style.color]="mycolor">
        Welcome to {{title}}!
      </h1>
     <br>
      <input (input)="myinput($event.target.value)"/>
      <br>
      <button class="{{myclass}}" (click)="isVisible = !isVisible">toggle </button>
      <br>
      <span> selectedUser {{selectedUser}} </span><br>
      <p *ngFor="let user of users">
         <app-child  [user]="user" (userChanged)="outputHzndler($event)" > 

         <h3 appColory >*</h3>
         <h5 appColory>-----/-----</h5>
         </app-child >
        
        </p>
        <hr>
        <div appColory  #colory="colory"> ColoryDirective </div>

        <div (click)="colory.setBgRandom()"> change color </div>

        <hr>
        <div *appDelay="1000"> DelayDirective  </div>
        <div *appDelay="2000"> DelayDirective2  </div>
  `,
  styles: [`
  .red {
    color: red;
  }
  `]
})

export class AppComponent {
  isVisible = false;
  title = 'my-app';
  users = [{
    name: "Meow",
  },
  {
    name: "Meow2",
  },
  {
    name: "Meow3",
  }
  ];

  outputHzndler(test) {
    console.log(test);
    this.selectedUser = test;
  }
  selectedUser = null;
  myclass = "red";
  fontSize = 3;
  mycolor = "black";
  myclick() {
    this.fontSize++;
  };
  myinput(color) {
    this.mycolor = color;
  };
}
