const url = "https://zoo-animal-api.herokuapp.com/animals/rand"

const displayAnimalData = (data) => {
    const display = document.getElementById("display")
    display.innerHTML = `<h2>${data.name} <em>(${data.latin_name})</em></h2><img width=600 height=auto src=${data.image_link}>`
}


fetch(url)
    .then((res) => res.json())
    .then((data) => {
        displayAnimalData(data)
    })

