import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrderHistoryPagePage } from './order-history-page.page';

const routes: Routes = [
  {
    path: '',
    component: OrderHistoryPagePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrderHistoryPagePageRoutingModule {}
