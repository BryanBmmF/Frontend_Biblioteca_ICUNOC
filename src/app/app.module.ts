import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//external toastr
import { ToastrModule } from 'ngx-toastr';

import { HttpClientModule } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CatalogoComponent } from './catalogo/catalogo.component';

//componentes angular material
import { MatSliderModule } from '@angular/material/slider';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';

import {MatButtonModule} from '@angular/material/button'; 
import {MatMenuModule} from '@angular/material/menu'; 
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';  
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component'; 
import { IngresoLibroComponent } from './ingresoLibro/ingresoLibro.component'; 
import { ListaUserComponent } from './user/lista-user.component';
import { DetalleUserComponent } from './user/detalle-user.component';
import { NuevoUserComponent } from './user/nuevo-user.component';
import { EditarUserComponent } from './user/editar-user.component';
import { DetalleslibroComponent } from './detalleslibro/detalleslibro.component';
import { PrestamoLibroComponent } from './prestamo/prestamo-libro.component';
import { ReservaLibroComponent } from './reserva/reserva-libro.component'; 


@NgModule({
  declarations: [
    AppComponent,
    CatalogoComponent,
    IngresoLibroComponent,
    LoginComponent,
    IndexComponent,
    ListaUserComponent,
    DetalleUserComponent,
    NuevoUserComponent,
    EditarUserComponent,
    DetalleslibroComponent,
    PrestamoLibroComponent,
    ReservaLibroComponent,
  ],
  imports: [
    MatSliderModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MatExpansionModule,
    MatListModule,
    MatTableModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatInputModule,
    MatCardModule,
    ToastrModule.forRoot(), // ToastrModule added

  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
