document.getElementById("MyForm3").addEventListener("submit", function(event){
   event.preventDefault();

   const x = Number(document.getElementById("limite_ini").value);
   const y = Number(document.getElementById("limite_fim").value);  
   
   LIMITES(x, y);
});

function LIMITES(lis, ls){
    v = [];
    let pares = [];
    let soma_pares = 0;
    let y = 0;

   for(let i=lis; i<=ls;i++){
    v[i-1]=i;
    if(v[i-1]%2 ==0){
      pares[y] = v[i-1];  
     soma_pares = v[i-1]+soma_pares;
     y++
    } 
   }
   alert("O números pares do intervalo numérico são os seguintes:\n" + pares +".\nE seu somatório é:\n" + soma_pares);
}