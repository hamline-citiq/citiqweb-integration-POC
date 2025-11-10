import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type PartnerLogo = {
  name: string;
  src: string;
};

@Component({
  selector: 'app-icon-strip',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-strip.component.html',
  styleUrl: './icon-strip.component.css'
})
export class IconStripComponent {
  readonly partners: PartnerLogo[] = [
    { name: 'Citiq Prepaid', src: 'assets/citiq-logo.png' },
    { name: 'Boxer', src: 'https://www.citiqprepaid.co.za/wp-content/uploads/2025/04/Boxer.png' },
    { name: 'OK Foods', src: 'https://www.citiqprepaid.co.za/wp-content/uploads/2025/04/OK-FOODS-LOGO-2.png' },
    { name: 'Usave', src: 'https://www.citiqprepaid.co.za/wp-content/uploads/2025/04/Usave.png' },
    { name: 'Pick n Pay', src: 'https://www.citiqprepaid.co.za/wp-content/uploads/2025/04/PnP-Logo.png' },
    { name: 'Flash', src: 'https://www.citiqprepaid.co.za/wp-content/uploads/2025/04/Flash.png' },
    { name: 'Kazang', src: 'https://www.citiqprepaid.co.za/wp-content/uploads/2025/04/Kazang-scaled.png' }
  ];

  readonly loopedPartners = [...this.partners, ...this.partners];
  activeIndex = 0;

  setActive(index: number): void {
    this.activeIndex = index % this.partners.length;
  }

  trackByIndex(index: number): number {
    return index;
  }
}
