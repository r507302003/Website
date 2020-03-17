function inNout(){
    var show = document.querySelector("#ShowDialog"); 
    var name = document.getElementById('name').value; 
    var email = document.getElementById('email').value; 
    var intoType = document.getElementById('intoType').value; 
    var textbox = document.getElementById('textbox').value; 
    var p = document.createElement('p');
    p.innerHTML= `name: ${name}, email: ${email}, Your flavor species: ${intoType}, comments: ${textbox}`;
    document.getElementById("ThanksDialog").style.display = "block";
    show.appendChild(p);

}

function closed(){
    var p = document.querySelector("#ShowDialog > p");
    p.parentNode.removeChild(p);
    document.getElementById("ThanksDialog").style.display = "none";
}