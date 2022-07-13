const addListItem = text => {
    const container = document.getElementById("container")
    const newLi = document.createElement("li")
    newLi.textContent = text
    container.appendChild(newLi)
}

const handleFormSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    addListItem(form.fullName.value)

}

document.getElementById('identity-form').addEventListener("submit", handleFormSubmit)

