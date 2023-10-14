import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CALCULADORA  IMC';

  persona = {
    nombre: '',
    edad: 0,
    sexo: '',
    peso: 0,
    estatura: 0,
    imc: 0
  };

  mostrarDetalles = true;
  recomendacion = '';
  mostrarAdvertencia = false;

  formularioValido() {
    return (
      this.persona.nombre &&
      this.persona.edad &&
      this.persona.sexo &&
      this.persona.peso &&
      this.persona.estatura
    );
  }

  calcularImc = () => {
    if (this.formularioValido()) {
      this.mostrarAdvertencia = false; // Reiniciar advertencia
      this.persona.imc = this.persona.peso / (this.persona.estatura * this.persona.estatura);
      this.persona.imc = Math.round(this.persona.imc);
      this.mostrarDetalles = true;
      this.darRecomendacion(this.persona.imc);
    } else {
      this.mostrarAdvertencia = true;
    }
  }
  nuevosDatos() {
    this.persona = {
      nombre: '',
      edad: 0,
      sexo: '',
      peso: 0,
      estatura: 0,
      imc: 0
    };
    this.mostrarDetalles = false;
  }
  darRecomendacion(imc: number) {
    if (imc < 18.5) {
      this.recomendacion = 'Peso bajo. La recomendación es visitar un nutricionista para que te ayude con tu alimentación.';
    } else if (imc >= 18.5 && imc < 24.9) {
      this.recomendacion = 'Peso saludable. ¡Mantén un estilo de vida activo y equilibrado!';
    } else if (imc >= 25 && imc < 29.9) {
      this.recomendacion = 'Sobrepeso. Se recomienda hacer ejercicio y mantener una dieta saludable.';
    } else {
      this.recomendacion = 'Obesidad. Consulta a un medico profecional y dejar el lol por un rato.';
    }}

    imagenIMC(imc: number): string {
      if (imc < 18.5) {
        return 'doctor.jpg';
      } else if (imc >= 18.5 && imc < 24.9) {
        return 'salud.jpg';
      } else if (imc >= 25 && imc < 29.9) {
        return 'dobrep.jpeg';
      } else {
        return 'pesao.jpeg';
      }
    }

  }
