document.getElementById("MyForm").addEventListener("submit", function(event){
 event.preventDefault();
   
 const a = Number(document.getElementById("a").value);
 const b = Number(document.getElementById("b").value);
 const c = Number(document.getElementById("c").value);
 const d = Number(document.getElementById("d").value);
 const e = Number(document.getElementById("e").value);

 MAIOR_MENOR(a, b, c, d, e);
}); 

function MAIOR_MENOR(a, b, c, d, e){
  const v = [a, b, c, d, e];
  let maior = a;
  let menor = a;

  for(let i=0; i<v.length;i++){
   if(v[i]> maior){
    maior = v[i]
   }

   if(v[i]<menor){
      menor = v[i]
   }
  }

  //v.sort(
  // (a,b) => a-b
  //);

 

 alert("O menor número digitado foi "+ menor +" e o maior foi "+ maior +".")
    
<<<<<<< HEAD
}
=======
}
 
>>>>>>> master
