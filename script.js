var mensaje;

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

//función para boton encriptar
function btnEncriptar(){
    //Lee y captura (selecciona) el texto sin encriptar ingresado.
    //.querySelector selecciona en masa (todo lo que yo le indique o que tenga una condición específica). En este caso todo lo que esté dentro del "textArea".
    const textArea = document.querySelector(".textArea");
    //Lee y captura (selecciona) el texto sin encriptar ingresado.
    //.querySelector selecciona en masa (todo lo que yo le indique o que tenga una condición específica). En este caso todo lo que esté dentro del "mensaje".
    mensaje = document.querySelector(".mensaje");
    //Se manda a llamar a la función encriptar.
    const textoEncriptado =  encriptar (textArea.value);
    //Asigna el valor del texto encriptado al mensaje.
    mensaje.value = textoEncriptado;
    //Se limpia el espacio del texto ingresado.
    textArea.value = "";
    //Se quita la imagen de fondo del mensaje.
    mensaje.style.backgroundImage = "none";
}

//función para boton desencriptar
function btnDesencriptar(){
    //Lee y captura (selecciona) el texto sin encriptar ingresado.
    //.querySelector selecciona en masa (todo lo que yo le indique o que tenga una condición específica). En este caso todo lo que esté dentro del "textArea".
    const textArea = document.querySelector(".textArea");
    //Lee y captura (selecciona) el texto sin encriptar ingresado.
    //.querySelector selecciona en masa (todo lo que yo le indique o que tenga una condición específica). En este caso todo lo que esté dentro del "mensaje".
    mensaje = document.querySelector(".mensaje");
    //Se manda a llamar a la función desencriptar.
    const textoDesencriptado =  desencriptar (textArea.value);
    //"Regresa" al mensaje original que fue encriptado.
    mensaje.value = textoDesencriptado;
    //Se limpia el espacio del texto ingresado.
    textArea.value = "";
    //Se conserva la imagen de fondo del mensaje.
   }

//función para encriptar
function encriptar(stringEncriptada){
    //Asigna un valor por la cual intercambiar la letra. Corchetes azules son una columna. Las comas son las filas. Primer valor: columna1 parte1 y segundo valor columna1 parte2.
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    //Convierte el texto ingresado (Sin encriptar) en minúscula obligatoriamente.
    stringEncriptada = stringEncriptada.toLowerCase();
    //La condición es stringEncriptada. Para verificar que las letras están siendo ingresadas es .includes(). Después poner la llave que va a ser verificada (matrizCodigo). Luego, ponerle el índice y la posición a la llave.
    for(let i = 0; i<matrizCodigo.length; i++){ 
        //Se manda a llamar una por una de las letras que coinciden con las que deben cambiarse.En este caso son las vocales.
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            //0=parte1(vocales) y 1=parte2(palabras por las que se remplazarán a las vocales)
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    //regresa el resultado de la encriptación.
    return stringEncriptada;
}

//función para desencriptar
function desencriptar(stringDesencriptada){
     //Asigna un valor por la cual intercambiar la letra. Corchetes azules son una columna. Las comas son las filas. Primer valor: columna1 parte1 y segundo valor columna1 parte2.
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    //Convierte el texto ingresado (encriptada) en minúscula obligatoriamente.
    stringDesencriptada = stringDesencriptada.toLowerCase();
     //La condición es stringDesencriptada. Para verificar que las letras están siendo ingresadas es .includes(). Después poner la llave que va a ser verificada (matrizCodigo). Luego, ponerle el índice y la posición a la llave.
    for(let i = 0; i<matrizCodigo.length; i++){ 
        if(stringDesencriptada.includes(matrizCodigo[i][0])){
             //Se manda a llamar una por una de las palabras que coinciden con las que deben cambiarse por vocales.
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0] );
        }
    }
    return stringDesencriptada;
}

//función para copiar
function btnCopiar(){
    //Lee y captura (selecciona) el texto sin encriptar ingresado.
    //.querySelector selecciona en masa (todo lo que yo le indique o que tenga una condición específica). En este caso todo lo que esté dentro del "mensaje".
    mensaje = document.querySelector(".mensaje").value;
    //Al usar el navigator hace referencia al navegador (objeto) que se use. Después se llama al portapapeles con el "clipboard" (clase) y por último se escribe o sobre escribe en el portapapeles con la función writetext (método) y se pone entre paréntesis lo que se va a sobreescribir. En este último caso vamos a reescribir lo que se guardó en la variable "mensaje". 
    navigator.clipboard.writeText(mensaje);
    alert("¡Texto copiado!");
}

