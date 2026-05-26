import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderHistoryPagePage } from './order-history-page.page';

describe('OrderHistoryPagePage', () => {
  let component: OrderHistoryPagePage;
  let fixture: ComponentFixture<OrderHistoryPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderHistoryPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
