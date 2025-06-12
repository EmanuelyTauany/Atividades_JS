document.getElementById("MyForm5").addEventListener("submit", function(event){
     event.preventDefault();

     const n = Number(document.getElementById("valor").value);
    
     POSITIVO_NEGATIVO(n);
});

function POSITIVO_NEGATIVO(x){
    let verifica;

    if(x>=0){
      verifica = true;
    }else{
        verifica = false;
    }

    alert(verifica);
}