const hideButton = document.getElementById("hide-button");
const carImage = document.getElementById("car-image")

hideButton.addEventListener("click", event => {

    if (carImage.style.visibility === "hidden"){
        carImage.style.visibility = "visible";
        hideButton.textContent = "Hide"
    }
    else{
        carImage.style.visibility = "hidden"
        hideButton.textContent = "Show" 
    }

    
})