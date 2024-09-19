import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TextToggleDirective } from '../../Directives/text-toggle.directive';
import { EditTextDirective } from '../../Directives/edit-text.directive';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from '../../Directives/highlight.directive';


@Component({
  selector: 'app-doc',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TextToggleDirective, EditTextDirective, FormsModule, HighlightDirective],
  templateUrl: './doc.component.html',
  styleUrl: './doc.component.css'
})
export class DocComponent {

//Variables

@ViewChild('TextDoc') TextDoc!: ElementRef;

@ViewChild('colorInput') colorInput!: ElementRef;

isBold: boolean = false;

isItalics: boolean = false;

isUnderlined: boolean = false;

fonts: string[] = ['Arial', 'Courier New', 'Georgia', 'Times New Roman', 'Verdana'];

selectedFont: string = this.fonts[0];

selectedColor: string = "#000000";

savedSelection: Range | null = null;

check: string = "";

//Methods

changeColor(event: any) {
  this.restoreSelection();
  document.execCommand('foreColor', false, event.target.value);
}

highlight(event: any) {
  this.restoreSelection();
  document.execCommand('backColor', false, event.target.value);
}

changeSize(event: any) {
  const size = (event.target as HTMLSelectElement).value;
  this.check = size;  
  console.log("check[changeSize]: " + this.check);
  this.restoreSelection();
  document.execCommand('fontSize', false, size);
}

test(event: any) {
  console.log((event.target as HTMLSelectElement).value);
  console.log("check: " + this.check);
  if((event.target as HTMLSelectElement).value == this.check) {
    this.restoreSelection();
  document.execCommand('fontSize', false, this.check);
  this.check = "";
  }
}

boldText() {
  document.execCommand('bold');
}

italicText() {
  document.execCommand('italic');
}

underlineText() {
  document.execCommand('underline');
}

saveSelection() {
  const selection = window.getSelection();
  if (selection && selection.rangeCount > 0) {
    this.savedSelection = selection.getRangeAt(0);  
  }
}

restoreSelection() {
  if (this.savedSelection) {
    const selection = window.getSelection();
    if (selection) {
      selection.removeAllRanges();
      selection.addRange(this.savedSelection); 
    }
  }
}


}
