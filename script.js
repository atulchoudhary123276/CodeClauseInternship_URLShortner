let link1=document.getElementById("link");
let shortbutton=document.getElementById("btn");
let link2=document.getElementById("newlink");
let copybutton=document.getElementById("copy");




shortbutton.addEventListener('click',shortfunc);

async function shortfunc(){
    // console.log(link1.value);
    if(link1.value==""){
        alert("please enter link first");
    }
   let response=await fetch(`https://api.shrtco.de/v2/shorten?url=${link1.value}`)
   let data=await response.json();
//    console.log(data);
   link2.value=data.result.short_link2;

}

copybutton.addEventListener("click",function(){
    link2.select();

    window.navigator.clipboard.writeText(link2.value);
})