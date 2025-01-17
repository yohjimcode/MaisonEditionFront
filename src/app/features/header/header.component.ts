import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
  ],

  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  textBouton!: string;
  connect: boolean = false;

  ngOnInit(): void {
    this.textBouton = "Mon espace";
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


