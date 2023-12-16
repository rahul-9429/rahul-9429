addtask(){
    document.getElementById("task").innerHTML = "I have changed!";
}



function myFunction() {
    if (document.documentElement.scrollTop > 500) {
       document.getElementById("img1").style.position = "fixed";  
       document.getElementById("img1").style.top = "100px";
    } 
    else if(document.documentElement.scrollTop > 550){
      document.getElementById("img2").style.position = "fixed";  
       document.getElementById("img2").style.top = "200px";
    }
    else if(document.documentElement.scrollTop > 600){
      document.getElementById("img3").style.position = "fixed";  
       document.getElementById("img3").style.top = "300px";
    }
    else if(document.documentElement.scrollTop > 650){
      document.getElementById("img4").style.position = "fixed";  
       document.getElementById("img4").style.top = "400px";
    }
    else if(document.documentElement.scrollTop > 700){
      document.getElementById("img5").style.position = "fixed";  
       document.getElementById("img5").style.top = "500px";
    }
    else if(document.documentElement.scrollTop > 750){
      document.getElementById("img6").style.position = "fixed";  
       document.getElementById("img6").style.top = "450px";
    }
    else if(document.documentElement.scrollTop > 800){
       document.getElementById("img7").style.position = "fixed";  
       document.getElementById("img7").style.top = "350px";
    }