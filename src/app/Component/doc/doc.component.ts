import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TextToggleDirective } from '../../Directives/text-toggle.directive';


@Component({
  selector: 'app-doc',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TextToggleDirective],
  templateUrl: './doc.component.html',
  styleUrl: './doc.component.css'
})
export class DocComponent {
@ViewChild('TextDoc') TextDoc!: ElementRef;

isBold: boolean = false;

isItalics: boolean = false;

isUnderlined: boolean = false;

ToggleBold() {
  this.isBold = !this.isBold;
}

ToggleItalics() {
  this.isItalics = !this.isItalics;
}

ToggleUnderline() {
  this.isUnderlined = !this.isUnderlined;
}

}
