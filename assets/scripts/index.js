const addListItem = text => {
    const container = document.getElementById("container")
    const newLi = document.createElement("li")
    newLi.textContent = text
    container.appendChild(newLi)
}   


const getTextContent = () => {
    const input = document.getElementById('input-box').value
    if(input.length) {
        addListItem(input)
    } else {
        alert("You have to input some text")
    }
}

document.getElementById("first-button").addEventListener("click", getTextContent)