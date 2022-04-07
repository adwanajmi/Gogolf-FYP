import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: TabsPage,
    children: [
      { path: 'home', loadChildren: '../home/home.module#HomePageModule' },
      { path: 'blog', loadChildren: '../blog/blog.module#BlogPageModule' },
      { path: 'profile', loadChildren: '../profile/profile.module#ProfilePageModule' },
      { path: 'news/details', loadChildren: '../news-item/news-item.module#NewsItemPageModule' },
      { path: 'menu', loadChildren: '../menu/menu.module#MenuPageModule' },
      { path: 'scorecard', loadChildren: '../scorecard/scorecard.module#ScorecardPageModule' },
      { path: 'mybookings', loadChildren: '../mybookings/mybookings.module#MybookingsPageModule' }


    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
