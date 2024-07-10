const btnRegister = document.querySelector(".nav-button");
const image = document.querySelector(".imag");


btnRegister.onclick = function(){
    image.innerHTML = "<div class='loader'> </div>";
    setTimeout(()=>{
        
        this.innerHTML = "<button class='register-btn'>Register Now</button><div class='imag'><img src='img/Right.png' alt=''></div>";
        
        
    }, 2000);
};