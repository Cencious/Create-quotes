import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) { this.elem.nativeElement.style.textDecoration='line';}
  @HostListener("click") onClicks() {
    this.textDeco("")
  }
  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("")
  }
  private textDeco(action:string) {
    this.elem.nativeElement.style.color=action;
  }


}
