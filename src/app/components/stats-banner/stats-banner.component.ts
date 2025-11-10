import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-stats-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stats-banner.component.html',
  styleUrl: './stats-banner.component.css'
})
export class StatsBannerComponent {
  @Input() meterCount = 0;
  @Input() registeredUsers = 0;
  @Input() transactions = 0;
}
