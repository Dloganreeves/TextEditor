import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor() { }

  @HostListener('keyup') onMouseUp() {
    const selection = window.getSelection();
    if (selection) {
      this.toggleHighlight(selection);
    }
  }

  toggleHighlight(selection: Selection) {
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const commonAncestor = range.commonAncestorContainer.parentNode as HTMLElement;

      if (commonAncestor && commonAncestor.classList.contains('highlight')) {
        this.removeHighlight(commonAncestor);
      } else {
        this.applyHighlight(range);
      }
    }
  }

  applyHighlight(range: Range) {
    const span = document.createElement('span');
    span.classList.add('highlight');
    
    const fragment = range.extractContents();  
    span.appendChild(fragment); 
    
    range.insertNode(span);  
  }

  removeHighlight(element: HTMLElement) {
    const parent = element.parentNode;
    
    while (element.firstChild) {
      parent?.insertBefore(element.firstChild, element);
    }
    
    parent?.removeChild(element);
  }

}
