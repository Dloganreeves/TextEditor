import { Routes } from '@angular/router';
import { DocComponent } from './Component/doc/doc.component';

export const routes: Routes = [
    {path: "Home",component:DocComponent}, 
    {path: "**", redirectTo: "Home", pathMatch: "full"}

];
