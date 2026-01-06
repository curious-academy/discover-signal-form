import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewOne } from './create-new-one';

describe('CreateNewOne', () => {
  let component: CreateNewOne;
  let fixture: ComponentFixture<CreateNewOne>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateNewOne]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateNewOne);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
