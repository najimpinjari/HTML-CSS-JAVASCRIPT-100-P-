var rect = document.querySelector("#center"); // first declare the rect and store a value in 
// query selector at center id 

rect.addEventListener("mousemove", function(detaills) { //crate a funtion to mouse over for when mouse over purpus
    var rectanglelocation = rect.getBoundingClientRect(); //store the value getboud in rectalocation
    var insiderectaval = detaills.clientX - rectanglelocation.left;  //details for finding all proper details 

    if(insiderectaval < rectanglelocation.width/2){
        var redculur = gsap.utils.mapRange(0,rectanglelocation.width/2,255,0,insiderectaval);
        gsap.to(rect,{ 
            backgroundColor: `rgb(${redculur},0,0)`,
            ease: Power4 
        });
    }
    else{       
        var bluecolor = gsap.utils.mapRange(0,rectanglelocation.width/2,
        rectanglelocation.width,
         0, 255, insiderectaval);
        gsap.to(rect,{ 
            backgroundColor: `rgb(0,0,${bluecolor})`,
            ease: Power4 
        });
    }
})
