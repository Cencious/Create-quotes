import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikeQuote]'
})
export class StrikeQuoteDirective {

  constructor(private elem:ElementRef) 
  { this.elem.nativeElement.style.textDecoration='line-through';}
  @HostListener("click") onClicks() {
    this.textDeco("")
  }
  @HostListener("dblclick") onDoubleClicks(){
    this.textDeco("")
  }
  private textDeco(action:string) {
    this.elem.nativeElement.style.textDecoration=action;
  }


}
