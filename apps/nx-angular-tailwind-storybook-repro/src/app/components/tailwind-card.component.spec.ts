import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TailwindCardComponent } from './tailwind-card.component';

describe('TailwindCardComponent', () => {
  let component: TailwindCardComponent;
  let fixture: ComponentFixture<TailwindCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TailwindCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TailwindCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
