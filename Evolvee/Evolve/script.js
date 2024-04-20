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







const dogImage=document.querySelector(".dog-image");
const URL="https://dog.ceo/api/breeds/image/random"
const dogButton=document.querySelector("#dog-button");
function getImages(){
    fetch(URL).then((response)=>{
        return response.json();
    }).then((data)=>{
        console.log(data);
        console.log(data.message)
        dogImage.style.backgroundImage=`url(${data.message})`;
        
        
    })
}
dogButton.addEventListener("click",getImages);