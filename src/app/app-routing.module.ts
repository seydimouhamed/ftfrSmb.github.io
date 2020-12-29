import { EditReservationComponent } from './bien/reservation/edit-reservation/edit-reservation.component';
import { DetailReservationComponent } from './bien/reservation/detail-reservation/detail-reservation.component';
import { NgModule } from '@angular/core';
import {Routes, RouterModule, ROUTES} from '@angular/router';
import {ListComponent} from './bien/list/list.component';
import {AddComponent} from './bien/add/add.component';
import {ReservationComponent} from './bien/reservation/reservation.component';
import {DetailComponent} from './bien/detail/detail.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthGardService} from './auth-gard.service';
import {ErrorsComponent} from './errors/errors.component';
import {BienResolveService} from './bien/bien-resolve.service';
import {ConnexionComponent} from './connexion/connexion.component';

const appRoute: Routes = [
  { path: '', redirectTo: '/biens', pathMatch: 'full'},
  { path: 'biens', component: ListComponent},
  { path: 'biens/add', component: AddComponent, canActivate: [AuthGardService]},
  { path: 'biens/:id', component: DetailComponent, resolve: {bien: BienResolveService}},

  { path: 'reservations', component: ReservationComponent, children: [
    { path: ':id', component: DetailReservationComponent},
    { path: ':id/edit', component: EditReservationComponent}
  ]},
  { path: 'login', component: ConnexionComponent},
  { path: 'not-found', component: ErrorsComponent, data: { message: 'page not found'}},
  { path: '**', redirectTo: '/not-found'}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoute)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
