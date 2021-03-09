import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro } from 'src/app/models/libro';
import { LibrosService } from 'src/app/service/libros/libros.service';

@Component({
  selector: 'app-detalleslibro',
  templateUrl: './detalleslibro.component.html',
  styleUrls: ['./detalleslibro.component.css']
})
export class DetalleslibroComponent implements OnInit {

  libroRecivido:Libro;
  

  constructor(private router:Router, private service:LibrosService) { }

  ngOnInit(): void {
    this.mostrarDatos();
  }

  mostrarDatos(){
    let libroR = localStorage.getItem("idLibro");
    console.log(libroR);
    
    if (libroR !== null){
      this.service.getLibroId(libroR)
      .subscribe(data=>{
      this.libroRecivido=data;
    })
    }
  }



}
