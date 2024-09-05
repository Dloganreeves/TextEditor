import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';


@Directive({
  selector: '[TextToggle]',
  standalone: true
})

export class TextToggleDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @Input() set TextToggle(isBold: boolean) { 
    this.renderer.setStyle(this.el.nativeElement, 'font-weight', isBold ? 'bold' : 'normal'); 
  }

  @Input() set ItalicsToggle(isItalics: boolean) { 
    this.renderer.setStyle(this.el.nativeElement, 'font-style', isItalics ? 'italic' : 'normal'); 
  }

  @Input() set UnderlineToggle(isUnderlined: boolean) { 
    this.renderer.setStyle(this.el.nativeElement, 'text-decoration', isUnderlined ? 'underline' : 'none'); 
  }

}
