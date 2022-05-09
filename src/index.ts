rotulo1.innerHTML = "Ingrese el primer número";
rotulo2.innerHTML = "Ingrese el segundo número";
rotulo3.innerHTML = "Ingrese el tercer número";

let boton = document.getElementById("calcular");

boton?.addEventListener("click", () =>{
  
  let numero1 : number = Number(dato1.value);
  let numero2 : number = Number(dato2.value);
  let numero3 : number = Number(dato3.value);

  if (numero1>numero2 && numero1>numero3){
    console.log("El número" + numero1 + " es el mayor");
    }else if(numero2>numero1&&numero2>numero3){
    console.log("El número" + numero2 +" es el mayor");
      }else if(numero3>numero1&&numero3>numero2){
        console.log("El número" + numero3 + " es el mayor");
      });
      



})

