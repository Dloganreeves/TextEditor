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

selectedSize: string = "1rem"; //default value

selectedFont: string = this.fonts[0];

selectedColor: string = "#000000"

//Methods

ToggleBold(): void {
  this.isBold = !this.isBold;
  console.log(this.selectedColor);
}

ToggleItalics(): void {
  this.isItalics = !this.isItalics;
}

ToggleUnderline(): void {
  this.isUnderlined = !this.isUnderlined;
}

changeColor(): void {
  this.selectedColor = this.colorInput.nativeElement.value; 
}


}
