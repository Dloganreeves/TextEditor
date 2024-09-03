import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocComponent } from '../Component/doc/doc.component';


@Directive({
  selector: '[appTextToggle]',
  standalone: true
})
export class TextToggleDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }
  @Input() set appBold(IsBold: boolean) { this.renderer.setStyle(this.el.nativeElement, 'font-weight', IsBold ? 'bold' : 'normal'); }
}
