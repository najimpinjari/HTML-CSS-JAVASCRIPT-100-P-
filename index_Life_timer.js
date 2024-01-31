let isdobopen = false;
const settingcogEl = document.getElementById("iconsetting");
 const settingcontentEl = document.getElementById("settingsCcontent");

 const toggledateofbirthselect = () => {
    if(isdobopen){
        settingcogEl.classList.add("hide");
    }else{
        settingcogEl.classList.remove("hide");
    }   
    isdobopen = !isdobopen;
    console.log("Toggle",isdobopen);
 }

 settingcogEl.addEventListener("click",toggledateofbirthselect);