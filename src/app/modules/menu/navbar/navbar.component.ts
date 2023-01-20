import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

// FUNCIÓN QUE MUESTRA EL MENU RESPONSIVE

  public active : boolean = false;

  setActive() : void {
    this.active = !this.active
  }


// responsiveMenu(){
//   var x:any = document.getElementById("nav");
//   if (x.className === "") {
//       x.className = "responsive";
//   } else {
//     x.className = "";
//   }
// }

  // seleccionar(link:any) 
  //   {
  //     let opciones:any = document.querySelectorAll('#links a');
  //     opciones[0].className = "";
  //     opciones[1].className = "";
  //     opciones[2].className = "";
  //     opciones[3].className = "";
  //     opciones[4].className = "";
  //     link.className = "seleccionado";
  //     // Desaparecemos el menu una vez seleccionada una opción en el modo responsive
  //     var x:any = document.getElementById("nav");
  //     x.className = "";
  // }
}
