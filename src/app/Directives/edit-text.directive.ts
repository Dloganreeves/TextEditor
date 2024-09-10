import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[EditText]',
  standalone: true
})
export class EditTextDirective {
  
  constructor(private el: ElementRef, private renderer: Renderer2) { }
  
  @Input() set EditText(EditFont: string) {
    this.renderer.setStyle(this.el.nativeElement, 'font-family', EditFont);
  }

  @Input() set fontSize(fontSize: string) {
    this.renderer.setStyle(this.el.nativeElement, 'font-size', fontSize);
  }

  @Input() set fontColor(fontColor: string) {
    this.renderer.setStyle(this.el.nativeElement, 'color', fontColor);
  }
}
