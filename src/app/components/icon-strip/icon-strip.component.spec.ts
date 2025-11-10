import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconStripComponent } from './icon-strip.component';

describe('IconStripComponent', () => {
  let component: IconStripComponent;
  let fixture: ComponentFixture<IconStripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconStripComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
