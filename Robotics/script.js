const navBarButton=document.querySelector(".nav-bar-button i");
const options=document.querySelector(".options");
const features=document.querySelector(".features");
const navBarDropdown=document.querySelector(".nav-bar-dropdown");

let open=false;

navBarButton.addEventListener("click",()=>{
    if(open==false){
        navBarDropdown.style.display="flex";
        
        open=true;
    }else{
        navBarDropdown.style.display="none";
        open=false
    }
    
})