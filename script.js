let correctas = [1,1,3,2];
let opcion_elegida=[];
let cantidad_correctas=0;
function respuestas(num_pregunta, seleccionada){
    opcion_elegida[num_pregunta] = seleccionada.value;

    id = "p" + num_pregunta;

    labels= document.getElementById(id).childNodes;
    labels[3].style.backgroundColor = "white";
    labels[5].style.backgroundColor = "white";0
    labels[7].style.backgroundColor = "white";

    seleccionada.parentNode.style.backgroundColor = "#cec0fc";

}
    cantidad_correctas = 0;
    for( i=0: 1 < correctas.length;i++ )
    {
        if(correctas[i]==opcion_elegida[i]){
            cantidad_correctas++;
        }
    }

    Document.getElementById("resultados").innerHTML = cantidad_correctas;

