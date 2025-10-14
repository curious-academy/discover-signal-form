import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewOne } from './add-new-one';

describe('AddNewOne', () => {
  let component: AddNewOne;
  let fixture: ComponentFixture<AddNewOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewOne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewOne);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
