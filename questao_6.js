document.getElementById("MyForm6").addEventListener("submit", function(event){
  event.preventDefault();

  const v = Number(document.getElementById("valor_int").value);
  
  PAR_IMPAR(v);
});

function PAR_IMPAR(x){
    let verifica;

    if(x%2==0){
        verifica = true;
    }else{
        verifica = false;
    }

    alert(verifica);
}