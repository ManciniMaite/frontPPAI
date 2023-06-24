import { Component, OnInit } from '@angular/core';
import { Llamada } from '../model/Llamada';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EXAMPLE_Llamada } from '../model/data/data-Llamada';

@Component({
  selector: 'app-rta-operador',
  templateUrl: './rta-operador.component.html',
  styleUrls: ['./rta-operador.component.css']
})
export class RtaOperadorComponent implements OnInit {
  llamada: Llamada = EXAMPLE_Llamada;


  myForm: FormGroup = this.fb.group({
    nombre: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
  });

  constructor(
    private fb: FormBuilder,
  ){}

  ngOnInit(): void {
      this.myForm = this.fb.group({
        respuesta: ['', Validators.required],
        validaciones: [[],Validators.required ]
      });
  }


  

}
