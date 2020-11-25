import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appDelay]'
})
export class DelayDirective implements OnInit {

  @Input() appDelay: number;
  constructor(
    private template: TemplateRef<any>,
    private view: ViewContainerRef,
  ) {}

   ngOnInit() {
     setTimeout(_ => {
       this.view.createEmbeddedView(this.template);
     }, this.appDelay);
  }
}
