import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './content/main/main.component';
import { CharactersComponent } from './content/characters/characters.component';
import { PersonageComponent } from './content/personage/personage.component';
import { ResidentsComponent } from './content/residents/residents.component';
import { AboutComponent } from './content/about/about.component';
import { ResultComponent } from './content/result/result.component';

const routes: Routes = [
  { path: 'home', component: MainComponent },
  { path: 'personajes', component: CharactersComponent },
  { path: 'personaje/:nombre', component: PersonageComponent },
  { path: 'resultados/:patern', component: ResultComponent },
  { path: 'residentes', component: ResidentsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
