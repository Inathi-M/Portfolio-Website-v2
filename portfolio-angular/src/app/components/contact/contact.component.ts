import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  private portfolioService = inject(PortfolioService);
  personalInfo = this.portfolioService.getPersonalInfo();
  
  getWhatsAppLink() {
    return this.portfolioService.getWhatsAppLink();
  }
}
