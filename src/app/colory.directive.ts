import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appColory]',
  exportAs: "colory",
})
export class ColoryDirective {

  @HostBinding("style.color") myColor: string;
  @HostBinding("style.background") myBgColor: string;
  @HostListener("click", ["$event"]) myClick(event) {
    this.setBgRandom();
  }

  setBgRandom() {
    this.myBgColor = "#" + Math.floor(Math.random() * 255*255*255).toString(16);
  }

  constructor() {
    this.myColor = "blue";

    setInterval(_ => {
      this.myColor = this.myColor == "blue" ? "red" : "blue";
    }, 1000);
  }

}
