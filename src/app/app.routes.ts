import { Routes } from '@angular/router';
import { ContactComponent } from './pages/contact/contact.component';
import { ProposComponent } from './pages/propos/propos.component';
import NouveautesComponent from './pages/nouveaute/nouveautes.component';
import { CollectionComponent } from './pages/collection/collection.component';
import { ConnecterComponent } from './features/connecter/connecter.component';
import { HomeComponent } from './pages/home/home.component';
import { ParametrageComponent } from './pages/parametrage/parametrage.component';

export const routes: Routes = [
  { path: 'home', title: 'Home', component: HomeComponent },
  { path: 'nouveautes', title: 'Nouveautes', component: NouveautesComponent },
  { path: 'collection', title: 'Collection', component: CollectionComponent },
  { path: 'propos', title: 'Propos', component: ProposComponent },
  { path: 'contact', title: 'Contact', component: ContactComponent },
  { path: 'parametrages', title: 'Parametrages', component: ParametrageComponent },
  { path: 'connecter', title: 'Connecter', component: ConnecterComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', redirectTo: '/home' },
];



/*
    ajouter la route dans app.routes.ts 
    importer RouterOutlet, dans app.component.ts
    importer RouterLink, dans le composant où la route doit etre faite
    Dans le header le lien doit etre : <a routerLink="/Contact">Contact</a>
    Dans app.config.ts : 
    export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)]
*/