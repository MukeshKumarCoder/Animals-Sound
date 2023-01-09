let count=document.querySelectorAll(".i").length;
for(let i=0;i<count;i++){
    document.querySelectorAll(".i")[i].addEventListener("click" ,function(){
        
        let a=this.textContent;
        console.log(a);
        switch(a){
            case "buffalo":
                var audio = new Audio("buffalo.mp3");
               audio.play();
               break;

               case "bear":
                var audio = new Audio("bear.mp3");
               audio.play();
               break;

               case "cat":
                var audio = new Audio("cat.mp3");
               audio.play();
               break;

               case "monkey":
                var audio = new Audio("monkey.mp3");
               audio.play();
               break;

               case "cow":
                var audio = new Audio("cow.mp3");
               audio.play();
               break;

               case "elephant":
                var audio = new Audio("elephant.mp3");
               audio.play();
               break;

               case "lion":
                var audio = new Audio("lion.mp3");
               audio.play();
            
               break;

               case "tiger":
                var audio = new Audio("lion.mp3");
               audio.play();
              
               break;


               
               
        }
        });
}

