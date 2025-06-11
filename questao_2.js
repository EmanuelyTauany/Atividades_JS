function VOGAL(c){
    const vogais = ["a", "e", "i", "o", "u"];
    
    alert(vogais.includes(c.toLowerCase())? 1 : 0)
}

document.getElementById("MyForm2").addEventListener("submit", function(event){
    event.preventDefault();

    const c = document.getElementById("char").value.trim().toLowerCase();
    console.log(c);
    
    VOGAL(c);

});
