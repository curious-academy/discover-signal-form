import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOneCard } from './create-one-card';

describe('CreateOneCard', () => {
  let component: CreateOneCard;
  let fixture: ComponentFixture<CreateOneCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateOneCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateOneCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
