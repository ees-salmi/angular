import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaycollaboratordetailsComponent } from './displaycollaboratordetails.component';

describe('DisplaycollaboratordetailsComponent', () => {
  let component: DisplaycollaboratordetailsComponent;
  let fixture: ComponentFixture<DisplaycollaboratordetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaycollaboratordetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaycollaboratordetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
