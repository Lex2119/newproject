import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShopPagePage } from './shop-page.page';

describe('ShopPagePage', () => {
  let component: ShopPagePage;
  let fixture: ComponentFixture<ShopPagePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
