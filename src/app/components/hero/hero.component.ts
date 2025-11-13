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
    'https://s3.us-east-2.amazonaws.com/assets.citiqprepaid.co.za/citiq_advance_banner.png',
    'https://s3.us-east-2.amazonaws.com/assets.citiqprepaid.co.za/Citiq_advance_dark.png',
    'https://s3.us-east-2.amazonaws.com/assets.citiqprepaid.co.za/dialog_ad_selected.svg'
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
