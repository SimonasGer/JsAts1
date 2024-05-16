// Gavus duomenis is api uzpildyti vietovemis select elementa

// Gauti vietoviu json is apie serviso
// Consolinti duomenis, isitikinti, kad juos gavome
// Sukurti tiek option elementu, kiek yra vietoviu
// I option elementa ideti vietoves pavadinima


const getPlaces = async () => {
    const data = await fetch("https://api.meteo.lt/v1/places")
    .then(response => {return response.json()});
    return data;
}

const renderPlaces = async () => {
    const data = await getPlaces();
    // console.log("Is kitos funkcijos", data[1566].name);
    for (let place of data){
        // console.log(`${place.name}, ${place.administrativeDivision}.`);
        let option = document.createElement("option");
        option.value = `${place.name}, ${place.administrativeDivision}.`;
        document.querySelector("datalist").appendChild(option);
    }
}


export default renderPlaces;