import { Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { ProposComponent } from './pages/propos/propos.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { LivresComponent } from './pages/livres/livres.component';

export const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'contact', title : "Contact", component: ContactComponent},
    {path: 'propos', title : "Propos", component: ProposComponent},
    {path: 'accueil', title : "Accueil", component: AccueilComponent},
    {path: 'livres', title : "Livres", component: LivresComponent},
    {path: '**', redirectTo: '/home'}, /* placer à la fin sinon prend le dessus sur les routes suivantes */ 
];


/*
    ajouter la route dans app.routes.ts 
    importer RouterOutlet, dans app.component.ts
    importer RouterLink, dans le composant où la route doit etre faite
    Dans le header le lien doit etre : <a class="nav-link" routerLink="/Contact">Contact</a>
    Dans app.config.ts : 
    export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)]
*/