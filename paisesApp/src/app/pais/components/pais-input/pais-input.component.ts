import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit{






  @Output() onEnter:EventEmitter<string> = new EventEmitter();
  @Output() onDebounce:EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';


  debouncer: Subject<string> = new Subject();

  termino: string = '';

  constructor() { }
  
  ngOnInit(): void {
    this.debouncer
      .pipe( // dice no emitas los valores despues de 300 ms
        debounceTime(300)
      )
      .subscribe( valor =>{
          console.log('debouncer', valor);
          this.onDebounce.emit(valor);
      });
  }

  buscar(){
    // console.log('hola mundo');
    // console.log(this.termino);
    this.onEnter.emit(this.termino);
  }


  teclaPresionada(event: any){
      //const valor = event.target.value;
      // console.log(valor);
      // console.log(this.termino);
      this.debouncer.next(this.termino);
  }

}
