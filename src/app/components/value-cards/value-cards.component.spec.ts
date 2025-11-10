import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueCardsComponent } from './value-cards.component';

describe('ValueCardsComponent', () => {
  let component: ValueCardsComponent;
  let fixture: ComponentFixture<ValueCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValueCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValueCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
