import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template:"<p>Aqu&iacute; ir&iacute;a un empleado</p>",
  styleUrls: ['./empleado.component.css']
  //styles:["p{background-color:red}"]
})
export class EmpleadoComponent implements OnInit {

nombre="Guillermo";
apellido="Valdez";
edad=29;
empresa="Imprecopys Peru";

/*cambiaEmpresa(event:Event){
 this.empresa=(<HTMLInputElement>event.target).value; 
}*/

/*getEdad(){
  return this.edad;
}*/

/*mostrarEdad(value:string){
  var nEdad = parseInt(value);
  if(value==""){
    return null;
  }
  else{
    if(nEdad<=0 || nEdad>=100){
      return "Edad absurda";
    }
    else{
      if(nEdad>=18){
        return "Es mayor de edad";
      }
      else{
        return "Es menor de edad";
      }
    }
  }
}*/

llamaEmpresa(value:String){  
}

habilitacionCuadro=false;

usuRegistrado=false;

textoDeRegistro="No hay nadie registrado";

getRegistroUsuario(){
  this.usuRegistrado=false;
}

setUsuarioRegistrado(event:Event){
  //alert("El usuario se acaba de registrar");
  //this.textoDeRegistro="El usuario se acaba de registrar\n";
  //alert(event.target);
  if((<HTMLInputElement>event.target).value =="si"){
    this.textoDeRegistro="El usuario se acaba de registrar";
  }
  else{
    this.textoDeRegistro="No hay nadie registrado";
  }
}

  constructor() { }

  ngOnInit(): void {
  }

}
