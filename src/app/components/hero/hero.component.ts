import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  slides: string[] = [
    'assets/contractors.png',
    'assets/HERO1.png',
    'assets/carosel3.png'
  ];

  currentSlide = 0;
  private slideTimer?: ReturnType<typeof setInterval>;

  ngOnInit(): void {
    this.startTimer();
  }

  ngOnDestroy(): void {
    if (this.slideTimer) {
      clearInterval(this.slideTimer);
    }
  }

  goToSlide(index: number): void {
    this.currentSlide = index;
    this.restartTimer();
  }

  private startTimer(): void {
    this.slideTimer = setInterval(() => {
      this.currentSlide = (this.currentSlide + 1) % this.slides.length;
    }, 5000);
  }

  private restartTimer(): void {
    if (this.slideTimer) {
      clearInterval(this.slideTimer);
    }
    this.startTimer();
  }
}
