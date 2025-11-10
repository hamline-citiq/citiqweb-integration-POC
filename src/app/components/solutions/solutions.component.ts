import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solutions.component.html',
  styleUrl: './solutions.component.css'
})
export class SolutionsComponent {
  @Input() meterCount = 0;
  @Input() registeredUsers = 0;
  @Input() transactions = 0;

  solutionsCards = [
    {
      title: 'Property Owners',
      copy: 'Insights on consumption, settlements, and infrastructure health across your portfolio.',
      image: 'assets/Carosel2.png'
    },
    {
      title: 'Tenants',
      copy: 'Clear balances, recharge reminders, and simple payment flows from any connected device.',
      image: 'assets/abc.png'
    },
    {
      title: 'Partners',
      copy: 'CIC memebership, and branded experiences tailor-made for channel partners.',
      image: 'assets/contractors.png'
    }
  ];

  featureRows = [
    {
      eyebrow: 'Mobile core',
      title: 'App-first experiences',
      copy: 'Affordable, reliable, token purchases, account switching, and biometric approvals.',
      image: 'assets/carosel.png',
      reverse: false,
      cta: 'See app screens'
    },
    {
      eyebrow: 'Operational intelligence',
      title: 'Automation that adapts',
      copy: 'Just a aplace holder,just a place holder LOL LOL LOL.',
      image: 'assets/expression.png',
      reverse: true,
      cta: 'Explore automations'
    }
  ];
}
