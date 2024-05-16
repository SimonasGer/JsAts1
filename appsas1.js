import form from "./appsas.js";

const renderForm = () => {
    let formElement = document.createElement("form");
    formElement.className = "form-inline";
    formElement.innerHTML = form();
    document.querySelector(".card-body").appendChild(formElement);
}

export default renderForm;