import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleLibroComponent } from './detalle-libro.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UsersService } from '../service/users/users.service';
import { ToastrService } from 'ngx-toastr';
import { MatDialog } from '@angular/material/dialog';
import { of, throwError } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { LibrosService } from '../service/libros/libros.service';


class LibrosServiceMock {
  detalleCodigo = jasmine.createSpy('detalleCodigo');
}

class UsersServiceMock {
  getLoggedInUserRoleAdmin = jasmine.createSpy('getLoggedInUserRoleAdmin');
  getLoggedInUserRoleBibliotecario = jasmine.createSpy('getLoggedInUserRoleBibliotecario');
  getDatosUserLogueado = jasmine.createSpy('getDatosUserLogueado');
  sendEmail = jasmine.createSpy('sendEmail');
  logout = jasmine.createSpy('logout');
  lista = jasmine.createSpy('lista');
  delete = jasmine.createSpy('delete');
}
class ToastrServiceMock {
  //estos mocks son del toastr
  success = jasmine.createSpy('success');
  warning = jasmine.createSpy('warning');
  error = jasmine.createSpy('error');
}

class MatDialogMock {
  //este es el mock del Dialogo, igual solo se declara porque hay dos escenarios
  //open = jasmine.createSpy('open').and.returnValue({afterClosed: () => of(true)});
  open = jasmine.createSpy('open');
}

describe('DetalleLibroComponent', () => {
  let component: DetalleLibroComponent;
  let fixture: ComponentFixture<DetalleLibroComponent>;
  let userServiceMock: UsersServiceMock;
  let matDialogMock: MatDialogMock;
  let toastrMock : ToastrServiceMock;

  //el roter spy falso que emula las rutas
  const spyRouter = {
    navigate: jasmine.createSpy('navigate'),
    navigateByUrl: jasmine.createSpy('navigateByUrl'),
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        //Estos 2 imports casi que van de cajon siempre
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [ DetalleLibroComponent ],
      providers:[
        HttpClient,
        DetalleLibroComponent,
        {
          provide: UsersService,
          useClass: UsersServiceMock,
        },
        {
          provide: Router,
          useValue: spyRouter,
        },
        {
          provide: ToastrService,
          useClass: ToastrServiceMock,
        },
        {
          provide: MatDialog,
          useClass: MatDialogMock,
        },
      ]
    })
    component = TestBed.get(DetalleLibroComponent);
    userServiceMock = TestBed.get(UsersService);
    matDialogMock = TestBed.get(MatDialog);
    toastrMock = TestBed.get(ToastrService);
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
  


});
