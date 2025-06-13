document.getElementById("MyForm4").addEventListener("submit", function(event){
    event.preventDefault();
    const x = Number(document.getElementById("x").value);
    const y = Number(document.getElementById("y").value);
    const z = Number(document.getElementById("z").value);
   
   ORDEM(x, y, z);


});

function ORDEM(a, b, c){
    
    j = [a,b,c];

    j.sort(
        (a,b) => a-b
    );

    alert(j);
     
}
