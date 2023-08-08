var inp =document.querySelector("input");
var listcontanier=document.querySelector(".list-contanier");

function add(){
    if (inp.value=="") {
        alert("enter a value");
    }
    else {
        var li=document.createElement("li");
        li.innerHTML= inp.value;
         listcontanier.appendChild(li); 
         
    }
    inp.value="";
    
    
    li.addEventListener("click",function(){
        li.style.textDecoration="line-through";
    })
    li.addEventListener("dblclick",function(){
        listcontanier.removeChild(li);
    })

    
    
}


