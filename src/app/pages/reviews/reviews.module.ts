
import { ReviewsPage } from './reviews.page';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { IonicRatingModule } from 'ionic4-rating';//this is import package.


const routes: Routes = [
  {
    path: '',
    component: ReviewsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IonicRatingModule , 
    RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  declarations: [ReviewsPage]
})
export class ReviewsPageModule {}
