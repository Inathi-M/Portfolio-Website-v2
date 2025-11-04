import { Component, inject } from '@angular/core';
import { PortfolioService } from '../../services/portfolio.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  private portfolioService = inject(PortfolioService);
  personalInfo = this.portfolioService.getPersonalInfo();
}
