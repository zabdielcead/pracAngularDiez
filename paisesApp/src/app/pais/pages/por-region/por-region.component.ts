import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais-interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
    `
      button{
        margin-right:5px;
      }
    `
  ]
})
export class PorRegionComponent implements OnInit {

  regiones: string[] =['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises:Country [] = [];

  constructor(private paisService: PaisService ) { }

  ngOnInit(): void {
  }

  activarRegion(region: string){
    this.regionActiva = region;
    this.paises = [];
    this.paisService.buscarRegion(region)
    .subscribe(paises => this.paises = paises);
  }

}
