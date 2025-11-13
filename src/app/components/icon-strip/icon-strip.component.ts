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
  { name: 'Top It Up', src: 'https://www.citiqprepaid.co.za/wp-content/uploads/2025/04/Top-It-Up.png' },
  { name: 'Sasol', src: 'https://www.citiqprepaid.co.za/wp-content/uploads/2025/04/Sasol-01.png' },
  { name: 'Engen', src: 'https://www.citiqprepaid.co.za/wp-content/uploads/2025/04/engen-seeklogo.png' },
  { name: 'Total', src: 'https://www.citiqprepaid.co.za/wp-content/uploads/2025/04/Total-01.png' },
  { name: 'Shell', src: 'https://www.citiqprepaid.co.za/wp-content/uploads/2025/04/Shell-01.png' },
  { name: 'Nedbank', src: 'https://www.citiqprepaid.co.za/wp-content/uploads/2025/04/Nedbank.png' },
  { name: 'Standard Bank', src: 'https://www.citiqprepaid.co.za/wp-content/uploads/2025/04/Standard-Bank.png' },
  { name: 'Capitec', src: 'https://www.citiqprepaid.co.za/wp-content/uploads/2025/04/Capitec.png' },
  { name: 'Absa', src: 'https://www.citiqprepaid.co.za/wp-content/uploads/2025/04/Absa.png' },
  { name: 'FNB', src: 'https://www.citiqprepaid.co.za/wp-content/uploads/2025/04/FNB-.png' },
  { name: 'Investec', src: 'https://www.citiqprepaid.co.za/wp-content/uploads/2025/04/investec-logo-black-and-white.png' },
  { name: 'One Cell', src: 'https://www.citiqprepaid.co.za/wp-content/uploads/2025/04/One-Cell.png' },
  { name: 'UniPin', src: 'https://www.citiqprepaid.co.za/wp-content/uploads/2025/04/unipin-south-africa-1.png' },
  { name: 'Kazang', src: 'https://www.citiqprepaid.co.za/wp-content/uploads/2025/04/Kazang-scaled.png' },
  { name: 'SPAR', src: 'https://www.citiqprepaid.co.za/wp-content/uploads/2025/04/spar-logo.png' },
  { name: 'Shoprite', src: 'https://www.citiqprepaid.co.za/wp-content/uploads/2025/04/Shoprite-Logo-Hi-Res-scaled-1.png' },
  { name: 'Checkers', src: 'https://www.citiqprepaid.co.za/wp-content/uploads/2025/04/checkers-supermarket-logo.png' }
];

  readonly marqueePartners = [...this.partners, ...this.partners, ...this.partners];

  trackByIndex(index: number): number {
    return index;
  }
}
