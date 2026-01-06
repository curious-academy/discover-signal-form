import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOnePlayer } from './create-one-player';

describe('CreateOnePlayer', () => {
  let component: CreateOnePlayer;
  let fixture: ComponentFixture<CreateOnePlayer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateOnePlayer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateOnePlayer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
