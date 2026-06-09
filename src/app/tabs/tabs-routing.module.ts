import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home-page',
        loadChildren: () => import('../home-page/home-page.module').then(m => m.HomePagePageModule)
      },
      {
        path: 'shop-page',
        loadChildren: () => import('../shop-page/shop-page.module').then(m => m.ShopPagePageModule)
      },
      {
        path: 'cart-page',
        loadChildren: () => import('../cart-page/cart-page.module').then(m => m.CartPagePageModule)
      },
      {
        path: 'profile-page',
        loadChildren: () => import('../profile-page/profile-page.module').then(m => m.ProfilePagePageModule)
      },
      {
        path: 'order-history-page',
        loadChildren: () => import('../order-history-page/order-history-page.module').then(m => m.OrderHistoryPagePageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home-page',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
