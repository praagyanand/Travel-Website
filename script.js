
const throttleFunction=(func, delay)=>{
      let prev = 0;
      return (...args) => {
        let now = new Date().getTime();
        if(now - prev> delay){
          prev = now;
          return func(...args); 
        }
      };
    };
    document.querySelector("#center")
    .addEventListener("mousemove",
     throttleFunction((dets)=>{
      // your less repetation code
      var div = document.createElement("div");
      div.classList.add("imagediv");
      div.style.left = dets.clientX+'px';
      div.style.top = dets.clientY+'px';

      var img = document.createElement("img"); 
      img.setAttribute("src","https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YW5pbWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60");

      div.appendChild(img);

      document.body.appendChild(div);
     
      gsap.to(img, {
        y: "0",
        ease: Power1,
        duration: .2
      });
        
      
      gsap.to(img, {
        y: "100%",
        delay: .3,
        ease: Power2,
      
      });
      

      setTimeout(function() {
        div.remove();
      }, 2000);
    }, 500));