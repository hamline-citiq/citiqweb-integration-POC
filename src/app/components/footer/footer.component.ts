import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

type FooterLink = {
  label: string;
  href: string;
};

type FooterGroup = {
  title: string;
  links: FooterLink[];
};

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  readonly logoUrl = 'assets/citiq-logo.png';
  readonly currentYear = new Date().getFullYear();

  readonly linkGroups: FooterGroup[] = [
    {
      title: 'Company',
      links: [
        { label: 'About', href: '#about' },
        { label: 'Careers', href: '#careers' },
        { label: 'News', href: '#news' }
      ]
    },
    {
      title: 'Support',
      links: [
        { label: 'Help Centre', href: '#support' },
        { label: 'FAQs', href: '#faqs' },
        { label: 'Status', href: '#status' }
      ]
    }
  ];

  readonly contact = {
    phone: '087 55 111 55',
    email: 'hello@citiqprepaid.co.za'
  };
  readonly contactPhoneLink = this.contact.phone.replace(/\s+/g, '');

  readonly policies: FooterLink[] = [
    { label: 'Terms', href: '#terms' },
    { label: 'Privacy', href: '#privacy' }
  ];

  trackByIndex(index: number): number {
    return index;
  }
}
