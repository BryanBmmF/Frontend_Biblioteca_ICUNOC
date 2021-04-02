import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent} from './index/index.component';
import { LoginComponent } from "./login/login.component";
import { CatalogoComponent} from './catalogo/catalogo.component';
import { IngresoLibroComponent} from './ingresoLibro/ingresoLibro.component';
import { ListaLibroComponent} from './ingresoLibro/lista-libro.component';
import { DetalleLibroComponent} from './ingresoLibro/detalle-libro.component';
import { EditarLibroComponent} from './ingresoLibro/editar-libro.component';
import { ListaUserComponent } from './user/lista-user.component';
import { DetalleUserComponent } from './user/detalle-user.component';
import { NuevoUserComponent } from './user/nuevo-user.component';
import { EditarUserComponent } from './user/editar-user.component';
import { DetalleslibroComponent } from './detalleslibro/detalleslibro.component';
import { PrestamoLibroComponent } from './prestamo/prestamo-libro.component';
import { ReservaLibroComponent } from './reserva/reserva-libro.component';
import { RegistrarDevolucionComponent } from './devoluciones/registrar-devolucion/registrar-devolucion.component';
import { RevisionPrestamoComponent } from './prestamos/revision-prestamo/revision-prestamo.component';
import { CategoryListComponent } from './category-list/category-list.component'; 
import {CategoryCreatorComponent} from './category-creator/category-creator.component';
import {CategoryEditorComponent} from './category-editor/category-editor.component';
import { ResetPasswordComponent } from './user/reset-password/reset-password.component';
import { SolicitudResetPasswordComponent } from './user/solicitud-reset-password/solicitud-reset-password.component';

/**
 * Manejo de las diferentes rutas de la pagina
 */
const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'login', component: LoginComponent },
  { path: 'catalogo', component: CatalogoComponent },
  { path: 'detalleslibro', component: DetalleslibroComponent },
  { path: 'usuarios', component: ListaUserComponent },
  { path: 'registro-usuario', component: NuevoUserComponent },
  { path: 'detalle/:id', component: DetalleUserComponent },
  { path: 'editar-usuario/:id', component: EditarUserComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'solicitud-reset-password', component: SolicitudResetPasswordComponent },

  { path: 'ingresoLibro', component: IngresoLibroComponent },
  { path: 'editarLibro/:id', component: EditarLibroComponent },
  { path: 'detalleLibro/:id', component: DetalleLibroComponent },
  { path: 'detalleLibroC/:codigo', component: DetalleLibroComponent },
  { path: 'listaLibro', component: ListaLibroComponent },


  { path: 'prestamo', component: PrestamoLibroComponent },
  { path: 'reservacionConfirmada', component: ReservaLibroComponent },

  { path: 'registrarDevolucion', component: RegistrarDevolucionComponent },
  { path: 'revisarPrestamos', component: RevisionPrestamoComponent },
  { path: 'listaCategoriasAdmin', component: CategoryListComponent },
  { path: 'crear-categoria', component: CategoryCreatorComponent },
  { path: 'actualizarCategoria/:id', component: CategoryEditorComponent },
  //cualquier otro path inexistente, redireccionar a index va de ultimo siempre
  { path: '**', redirectTo:'', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
