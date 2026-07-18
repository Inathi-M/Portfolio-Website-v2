import { Component } from '@angular/core';
import { CtaComponent } from './cta/cta.component';
import { HeaderSocialsComponent } from './header-socials/header-socials.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CtaComponent, HeaderSocialsComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {}
