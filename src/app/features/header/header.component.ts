import { Component } from '@angular/core';
import { ContactComponent } from '../../pages/contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    FooterComponent,
    ContactComponent
  ]
,

  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
