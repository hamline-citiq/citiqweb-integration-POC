import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-cookie-banner',
  standalone: true,
  imports: [],
  templateUrl: './cookie-banner.component.html',
  styleUrl: './cookie-banner.component.css'
})
export class CookieBannerComponent {
  @Output() accept = new EventEmitter<void>();
  @Output() decline = new EventEmitter<void>();
}
