import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { ScorecardPage } from './scorecard.page';

const routes: Routes = [
  {
    path: '',
    component: ScorecardPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule

  ],
  declarations: [ScorecardPage]
})
export class ScorecardPageModule {}
