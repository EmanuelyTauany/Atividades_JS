document.getElementById("MyForm2").addEventListener("submit", function(event){
    event.preventDefault();

    const c = document.getElementById("c").value.trim().toLowerCase();
    console.log(c);
    VOGAL(c);
});

function VOGAL(c){
    const vogais = ["a", "e", "i", "o", "u"];

        if(vogais.includes(c)){
            alert(1);
        }else{
            alert(0);
        }
    
}

