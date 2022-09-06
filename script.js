var newDiv = document.createElement("div");
document.body.appendChild(newDiv);
newDiv.style.backgroundColor='rc';
newDiv.style.width='100px';
newDiv.style.height='100px';
newDiv.style.margin='100px';
newDiv.style.display='block';
newDiv.style.border='2px black solid';
newDiv.style.borderRadius='10px';

function randcolor(){
    var r=Math.floor(Math.random()*255);
    var g=Math.floor(Math.random()*255);
    var b=Math.floor(Math.random()*255);
    newDiv.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
    
}
let rc=randcolor();
////////////////////////////////////////////////////////////////////////////////


// let te=document.getElementById(te).value;
// document.getElementById(te2).innerHTML=te;
function cl(){
    var val=document.getElementsByTagName("input")[0].value;
    console.log(val);
    document.getElementsByTagName("input")[0].value="";
    const mg=document.createElement("span");
    mg.innerHTML=(val);
    document.getElementById("te2").appendChild(mg);
    mg.style.margin="5px";
    mg.style.padding="3px";
    mg.style.border="1px black solid";
    mg.style.backgroundColor="lightblue";

    
    

}

// 


