import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-final-cta',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './final-cta.component.html',
  styleUrl: './final-cta.component.css'
})
export class FinalCtaComponent {
  partnerBadges = [
    // 'Boxer',
    // 'OK Foods',
    // 'Usave',
    // 'Pick n Pay',
    // 'Flash',
    // 'Kazang'
  ];
}
