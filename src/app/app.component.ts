import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HubspotService } from './services/hubspot.service';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { ValueCardsComponent } from './components/value-cards/value-cards.component';
import { SolutionsComponent } from './components/solutions/solutions.component';
import { StatsBannerComponent } from './components/stats-banner/stats-banner.component';
import { FinalCtaComponent } from './components/final-cta/final-cta.component';
import { IconStripComponent } from './components/icon-strip/icon-strip.component';
import { CookieBannerComponent } from './components/cookie-banner/cookie-banner.component';
import { FooterComponent } from './components/footer/footer.component';

type StatProperty = 'meterCount' | 'registeredUsers' | 'transactions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    ValueCardsComponent,
    SolutionsComponent,
    StatsBannerComponent,
    FinalCtaComponent,
    IconStripComponent,
    CookieBannerComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'Integration POC';
  pingMessage = 'Loading...';
  showCookieBanner = false;
  meterCount = 0;
  registeredUsers = 0;
  transactions = 0;
  heroImageUrl = 'assets/heroimage.png';
  logoUrl = 'assets/citiq-logo.png';
  private readonly statTargets: Record<StatProperty, number> = {
    meterCount: 1_000_000,
    registeredUsers: 450_000,
    transactions: 1_200_000
  };
  private statAnimationTimeout: ReturnType<typeof setTimeout> | null = null;
  private statDriftInitTimeout: ReturnType<typeof setTimeout> | null = null;
  private statDriftIntervals: ReturnType<typeof setInterval>[] = [];
  private statDriftStarted = false;

  constructor(private hubspotService: HubspotService) {}

  ngOnInit(): void {
    this.showCookieBanner = true;
    this.loadPingStatus();
    this.scheduleStatAnimations();
  }

  ngOnDestroy(): void {
    this.teardownStatTimers();
  }

  loadPingStatus(): void {
    this.hubspotService.ping().subscribe({
      next: (res) => {
        this.pingMessage = res?.message || 'Ping success!';
      },
      error: (err) => {
        console.error('Ping failed:', err);
        this.pingMessage = 'Error connecting to backend';
      }
    });
  }

  private scheduleStatAnimations(): void {
    this.statAnimationTimeout = setTimeout(() => {
      (Object.entries(this.statTargets) as [StatProperty, number][]).forEach(
        ([property, target]) => this.animateValue(property, 0, target, 6000)
      );

      this.statDriftInitTimeout = setTimeout(() => this.startSlowDrift(), 6500);
    }, 500);
  }

  private animateValue(property: StatProperty, start: number, end: number, duration: number) {
    const range = end - start;
    let startTime: number | null = null;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      (this as any)[property] = Math.floor(start + range * progress);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }

  private startSlowDrift(): void {
    if (this.statDriftStarted) {
      return;
    }

    this.statDriftStarted = true;
    const driftConfig: Record<StatProperty, { variance: number; interval: number }> = {
      meterCount: { variance: 2000, interval: 2000 },
      registeredUsers: { variance: 750, interval: 2500 },
      transactions: { variance: 4000, interval: 1800 }
    };

    (Object.entries(driftConfig) as [StatProperty, { variance: number; interval: number }][])
      .forEach(([property, { variance, interval }]) => {
        const base = this.statTargets[property];
        const updateStat = () => {
          const direction = Math.random() > 0.5 ? 1 : -1;
          const magnitude = Math.floor(Math.random() * variance);
          const raw = (this as any)[property] + direction * magnitude;
          const min = base - variance;
          const max = base + variance;
          (this as any)[property] = Math.min(max, Math.max(min, raw));
        };

        updateStat();
        const intervalId = setInterval(updateStat, interval);
        this.statDriftIntervals.push(intervalId);
      });
  }

  private teardownStatTimers(): void {
    if (this.statAnimationTimeout !== null) {
      clearTimeout(this.statAnimationTimeout);
      this.statAnimationTimeout = null;
    }

    if (this.statDriftInitTimeout !== null) {
      clearTimeout(this.statDriftInitTimeout);
      this.statDriftInitTimeout = null;
    }

    this.statDriftIntervals.forEach((intervalId) => clearInterval(intervalId));
    this.statDriftIntervals = [];
    this.statDriftStarted = false;
  }

  acceptCookies(): void {
    this.showCookieBanner = false;
  }

  declineCookies(): void {
    this.showCookieBanner = false;
  }
}
