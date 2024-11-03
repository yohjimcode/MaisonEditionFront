import { Component, OnInit } from '@angular/core';
import { ContactComponent } from '../../pages/contact/contact.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterEvent, RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    FooterComponent,
    ContactComponent
  ],

  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  textBouton!: string;
  connect: boolean = false;

  ngOnInit(): void {
    this.textBouton = "Me connecter";
  }

  isConnected() {
    if (!this.connect) {
      this.connect = true;
      this.textBouton = "Se déconnecter";
    }
    else {
      this.connect = false;
      this.textBouton = "Me connecter";
      this.openConfirmation();
    }
  }

  openConfirmation() {
      // creer un dialog 
  }
}


