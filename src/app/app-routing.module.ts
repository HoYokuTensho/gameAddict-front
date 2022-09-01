import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddGameComponent } from './add-game/add-game.component';

const routes: Routes = [
  {
        path: '',
        component: HomeComponent
  },
  {
         path: 'addGame',
         component: AddGameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
