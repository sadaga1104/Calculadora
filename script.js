//Contiene la operacion o resultado parcial
let parcial = "";

//Elemento donde se coloca la operacion que se esta realizando
let operRealizada = document.getElementById("operacionRealizada");
//Elemento donde se coloca el resultado
let txtResul = document.getElementById("txtResultado");

//Ultimo operaor seleccionado
let operadorSeleccionado = "";

//Numero ingresado
let numero = "";

//Para determinar si lo ultimo presionado es un numero o una operacion
let ultimoDigitoPresionado = "";

function operador(num){
    //Concateno el numero
    numero = numero + num;
    //Concateno la operacion hasta el momento
    parcial = parcial + num;
    //muestro
    operRealizada.innerHTML = parcial;
    //Controlamos la division por 0
    if(numero=='0' && operadorSeleccionado=='/'){
        limpiar();
        txtResul.innerHTML = "Indefinido";
        return;
    }
    //Guardo el tipo de tecla presionada por ultima vez
    if(ultimoDigitoPresionado=='operacion'){
        ultimoDigitoPresionado = 'numero'
    }
}

//Detecto cuando se presiona una operación
function operacion(oper){
    //Guardo la operacion que eligio
    operadorSeleccionado = oper;
    //Actualizo el tipo de letra presionado
    ultimoDigitoPresionado = "operacion";
    //Voy armando la formula matematica
    parcial = parcial + oper;
    numero = "";
    operRealizada.innerHTML = parcial;
}

//Realizo el calculo de la formula matematica cuando presiona =
function calculo(){
    //Con eval evaluo la formula matematica que esta en formato string
    parcial = eval(parcial);
    txtResul.innerHTML = parcial;
    //Vuelvo a convertir en string por si continua la formula
    parcial = parcial.toString();
    numero = "";
    operRealizada.innerHTML = parcial;
}

//Funcion que limpia
function limpiar(){
    operadorSeleccionado = "";
    parcial = "";
    txtResul.innerHTML = "";
    numero = "";
    operRealizada.innerHTML = 0;
}