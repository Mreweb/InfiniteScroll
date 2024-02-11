/* angular plugin imports */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';    
import { HomeComponent } from './ui/home/home.component';
/* custom module imports */

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule
  ],
  providers: [],
  exports: [RouterModule]
})
export class FeatureModule { }
