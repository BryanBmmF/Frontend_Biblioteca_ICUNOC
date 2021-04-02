import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//external toastr
import { ToastrModule } from 'ngx-toastr';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptorServiceService } from './service/interceptor/http-interceptor-service.service';
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
import {MatSelectModule} from '@angular/material/select';   
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component'; 
import { IngresoLibroComponent } from './ingresoLibro/ingresoLibro.component'; 
import { ListaUserComponent } from './user/lista-user.component';
import { DetalleUserComponent } from './user/detalle-user.component';
import { NuevoUserComponent } from './user/nuevo-user.component';
import { EditarUserComponent } from './user/editar-user.component';

import { PrestamoLibroComponent } from './prestamo/prestamo-libro.component';
import { ReservaLibroComponent } from './reserva/reserva-libro.component'; 
import { DetalleslibroComponent } from './detalleslibro/detalleslibro.component';
import { RevisionPrestamoComponent } from './prestamos/revision-prestamo/revision-prestamo.component';
import { RegistrarDevolucionComponent } from './devoluciones/registrar-devolucion/registrar-devolucion.component';
import { CategoryCreatorComponent } from './category-creator/category-creator.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryEditorComponent } from './category-editor/category-editor.component';
import { ListaLibroComponent } from './ingresoLibro/lista-libro.component';
import { DetalleLibroComponent } from './ingresoLibro/detalle-libro.component';
import { EditarLibroComponent } from './ingresoLibro/editar-libro.component';
import { ResetPasswordComponent } from './user/reset-password/reset-password.component';
import { SolicitudResetPasswordComponent } from './user/solicitud-reset-password/solicitud-reset-password.component'; 



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
    RevisionPrestamoComponent,
    RegistrarDevolucionComponent,
    CategoryCreatorComponent,
    CategoryListComponent,
    CategoryEditorComponent,
    ListaLibroComponent,
    DetalleLibroComponent,
    EditarLibroComponent,
    ResetPasswordComponent,
    SolicitudResetPasswordComponent
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
    MatSelectModule,
    ToastrModule.forRoot(), // ToastrModule added

  ],
  providers: [
    CookieService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorServiceService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
