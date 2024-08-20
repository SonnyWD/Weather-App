// Je commence par stocker ma clé d'API et ma balise img pour mes icones météo


const iconsTemp = document.querySelector(".icon");
const loader = document.querySelector(".container-loader")
const errorInformation = document.querySelector(".error-information")

// J'utilise une fonction async await pour apeller l'API et intégrer les données dans mes balises HTML 

async function weatherApp(){

    try {
        const response = await fetch(`http://api.airvisual.com/v2/nearest_city?key=${APIKEY}`)

        if(!response.ok) {
            throw new Error(`Error ${response.status}, ${response.statusText}`)
          }

        const data = await response.json()

        loader.classList.remove("active");

        document.querySelector("h1").innerHTML = data.data.city;
        document.querySelector(".country").innerHTML = data.data.country;
        document.querySelector("h2").innerHTML = data.data.current.weather.tp + '°';
        let weatherDataIcon = data.data.current.weather.ic;


        callIconsTemp(weatherDataIcon)
        
    }
    catch(error){

        loader.classList.remove("active");
        errorInformation.textContent = error.message;
    }
}

// Ensuite j'apelle ma fonction callIconsTemp pour afficher la bonne icone SVG en fonction de la donnée stockée dans weatherDataIcon 

function callIconsTemp(weatherDataIcon){
    if(weatherDataIcon === "01d"){
        iconsTemp.src = "ressources/icons/01d.svg"
    }
    else if(weatherDataIcon === "01n"){
        iconsTemp.src = "ressources/icons/01n.svg"

    }
    else if(weatherDataIcon === "02d"){
        iconsTemp.src = "ressources/icons/02d.svg"

    }
    else if(weatherDataIcon === "02n"){
        iconsTemp.src = "ressources/icons/02n.svg"

    }
    else if(weatherDataIcon === "03d"){
        iconsTemp.src = "ressources/icons/03d.svg"

    }
    else if(weatherDataIcon === "04d"){
        iconsTemp.src = "ressources/icons/04d.svg"

    }
    else if(weatherDataIcon === "09d"){
        iconsTemp.src = "ressources/icons/09d.svg"

    }
    else if(weatherDataIcon === "10d"){
        iconsTemp.src = "ressources/icons/10d.svg"

    }
    else if(weatherDataIcon === "10n"){
        iconsTemp.src = "ressources/icons/10n.svg"

    }
    else if(weatherDataIcon === "11d"){
        iconsTemp.src = "ressources/icons/11d.svg"

    }
    else if(weatherDataIcon === "13d"){
        iconsTemp.src = "ressources/icons/13d.svg"

    }
    else if(weatherDataIcon === "50d"){
        iconsTemp.src = "ressources/icons/50d.svg"

    }
}

// enfin j'apelle ma fonction weatherApp
weatherApp()