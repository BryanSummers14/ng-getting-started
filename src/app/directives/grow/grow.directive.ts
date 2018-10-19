import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appGrow]'
})
export class GrowDirective {

  @Input('appGrow') grow: number;

  constructor(private el: ElementRef) { }

  @HostListener('mouseenter') onMouseEnter() {
    this.sizeElement(this.grow);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.sizeElement(1);
  }

  private sizeElement(_scale: number) {
    this.el.nativeElement.style.transform = `scale(${_scale})`;
  }

}
