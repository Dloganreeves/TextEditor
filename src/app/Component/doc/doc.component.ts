import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TextToggleDirective } from '../../Directives/text-toggle.directive';import { CommonModule } from '@angular/common';
;

@Component({
  selector: 'app-doc',
  standalone: true,
  imports: [RouterOutlet,TextToggleDirective,CommonModule],
  templateUrl: './doc.component.html',
  styleUrl: './doc.component.css',
})
export class DocComponent {
@ViewChild('TextDoc') TextDoc!: ElementRef
IsBold: boolean = false
ToggleBold() {
  this.IsBold = !this.IsBold
}
}
