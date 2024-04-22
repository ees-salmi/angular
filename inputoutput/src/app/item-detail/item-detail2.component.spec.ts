import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemDetail2Component } from './item-detail2.component';

describe('ItemDetail2Component', () => {
  let component: ItemDetail2Component;
  let fixture: ComponentFixture<ItemDetail2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemDetail2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemDetail2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
