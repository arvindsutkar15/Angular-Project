import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appDirectiveDemo]'
})
export class DirectiveDemoDirective {

  constructor(private el:ElementRef) { 
    this.el.nativeElement.style.color = "red";
    this.el.nativeElement.style.border = "1px solid red";
    this.el.nativeElement.innerText = "Welcome to Custom Directive";
  }
  
}

