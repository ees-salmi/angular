import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaycollaboratorsComponent } from './displaycollaborators.component';

describe('DisplaycollaboratorsComponent', () => {
  let component: DisplaycollaboratorsComponent;
  let fixture: ComponentFixture<DisplaycollaboratorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaycollaboratorsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaycollaboratorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
