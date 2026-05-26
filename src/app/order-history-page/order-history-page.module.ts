import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrderHistoryPagePageRoutingModule } from './order-history-page-routing.module';

import { OrderHistoryPagePage } from './order-history-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrderHistoryPagePageRoutingModule
  ],
  declarations: [OrderHistoryPagePage]
})
export class OrderHistoryPagePageModule {}
