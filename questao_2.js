document.getElementById("MyForm2").addEventListener("submit", function(event){
    event.preventDefault();

    const c = document.getElementById("char").value.trim().toLowerCase();
    
    if(c.length != 1){
      alert("Por favor, digite apenas 1 caractere!");
      return; 
    }

    VOGAL(c);

});

function VOGAL(c){
    const vogais = ["a", "e", "i", "o", "u"];
    
    alert(vogais.includes(c.toLowerCase())? 1 : 0)
}   

    

    



