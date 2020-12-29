import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { TopbarComponent } from './topbar/topbar.component';
import { LienComponent } from './lien/lien.component';
import { BienComponent } from './bien/bien.component';
import { AddComponent } from './bien/add/add.component';
import { ListComponent } from './bien/list/list.component';
import { DetailComponent } from './bien/detail/detail.component';
import { JumbotronComponent } from './bien/jumbotron/jumbotron.component';
import { ItemComponent } from './bien/list/item/item.component';
import { PipePipe } from './@pipe/pipe.pipe';
import { SecondeToJourPipe } from './@pipe/seconde-to-jour.pipe';
import { NumberSeparatorPipe } from './@pipe/number-separator.pipe';
import { NumberJourPipe } from './@pipe/number-jour.pipe';
import { TimeLeftPipe } from './@pipe/time-left.pipe';
import { SummerizePipe } from './@pipe/summerize.pipe';
import { FilterPipe } from './@pipe/filter.pipe';
import {RouterModule, Routes} from '@angular/router';
import {ReservationComponent} from './bien/reservation/reservation.component';
import { DetailReservationComponent } from './bien/reservation/detail-reservation/detail-reservation.component';
import { EditReservationComponent } from './bien/reservation/edit-reservation/edit-reservation.component';
import {AppRoutingModule} from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorsComponent } from './errors/errors.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { RegisterComponent } from './connexion/register/register.component';

@NgModule({
  declarations: [ AppComponent,  FooterComponent,
    TopbarComponent, LienComponent, BienComponent,
    AddComponent, ListComponent, DetailComponent,
    JumbotronComponent, ItemComponent, PipePipe,
    SecondeToJourPipe, NumberSeparatorPipe, NumberJourPipe,
    TimeLeftPipe, SummerizePipe, FilterPipe, DetailReservationComponent, EditReservationComponent, ReservationComponent, PageNotFoundComponent, ErrorsComponent, ConnexionComponent, RegisterComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
