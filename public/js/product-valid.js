const formulario = document.querySelector(".form-reservation");
const errorPrice = document.querySelector(".errorPrice");
const errorDescription = document.querySelector(".errorDescription");
const errorTitle = document.querySelector(".errorTitle");
const errorMessages = document.querySelectorAll(".errorMessage");

function resetFormErrors() {
    errorMessages.forEach(errorMessage => {
        errorMessage.style.display = "none"
    })
}

formulario.addEventListener("submit", function(e){
// llamamos a la función que oculta los mensajes de error
resetFormErrors()
    let errores = [];
    console.log('el campo debe estar completo');

    let campoTitulo = document.querySelector("input[name='title']");

    if(campoTitulo.value == ""){
        errores.push("el campo debe estar completo");
        errorTitle.innerText = "Por favor, complete el titulo";
        errorTitle.style.display = "block";
    }

    let campoPrecio = document.querySelector("input[name='price']");
    if(campoPrecio.value == ""){
        errores.push("el campo debe estar completo")
        errorPrice.innerText = "Por favor, complete el precio"
        errorPrice.style.display = "block"
    }

    let campoDescription = document.querySelector("input[name='description']");
    if(campoDescription.value == ""){
        errores.push("el campo debe estar completo");
        errorDescription.innerText = "Por favor, complete el descripcion"
        errorDescription.style.display = "block"
    } 

    if(errores.length > 0){
        console.log(errores);
        e.preventDefault();
    }
})








/*ES LA UNICA forma Q NO TIRA ERROR EN CONSOLA
 function validateForm() {
    const campoName = document.form["form.reservation"]["title"].value;
    if (campoName == "") {
      alert("Name must be filled out");
      return false;
    }
  }




 */






/* const form = document.querySelector("#form-reservation");
const title = document.querySelector('#title');
const image = document.querySelector('#image');
const price = document.querySelector('#price');
const description = document.querySelector('#description');

const errorTitle = document.querySelector(".errorTitle");
const errorImage = document.querySelector(".errorImage");
const  errorPrice = document.
querySelector(".errorPrice");
const  errorDescription = document.
querySelector(".errorDescription");
const  errorMessages = document.querySelectorAll(".errorMessage");





function resetFormErrors() {
    console.log('hola')
    errorMessages.forEach(errorMessage => {
        errorMessage.style.display = "none"
    })
}

title.addEventListener("focus", resetFormErrors)
price.addEventListener("focus", resetFormErrors)
description.addEventListener("focus", resetFormErrors)

form.addEventListener("submit", function(e) {
    let errors = false

    // llamamos a la función que oculta los mensajes de error
    resetFormErrors()
    
    if (title.value.length == 0){
        errorTitle.innerText = "Complete el titulo"
        errorTitle.style.display = "block"
        errors = true 
    } else if (title.value.length < 2) {
        errorTitle.innerText = 'El titulo es incorrecto'
        errorTtile.style.display = "block"
        errors = true
    }
    
    if (price.value.length == 0){
        errorPrice.innerText = "Por favor, ingrese un precio"
        errorPrice.style.display = "block"
        errors = true
    } else if (price.value.length < 4) {
        errorPrice.innerText = 'Debe contener numeros'
        errorPrice.style.display = "block"
        errors = true
    } 
    if (description.value.length == 0){
        errorDescription.innerText = "Por favor, ingrese un precio"
        errorDescription.style.display = "block"
        errors = true
    } else if (description.value.length < 4) {
        errorDescription.innerText = 'Debe contener numeros'
        errorDescription.style.display = "block"
        errors = true
    } 

    // con que haya un solo campo con error, ya no se va a enviar el formulario
    if (errors) {
        e.preventDefault()
    }

}) */
/* 

title.addEventListener('blur', function (e) {
    if (this.value.length <= 3 && this.value.length > 0) {
        validacionIncorrecta(this)
    } else if (this.value.length > 3) {
        validacionCorrecta(this)
    }
})
image.addEventListener('change', function (e) {
    console.log(this.value);
    let filePath = this.value;
    let allowedExtensions = /(.jpg|.jpeg|.png|.gif)$/i;
    if (!allowedExtensions.exec(filePath)) {
        this.value = '';
        validacionIncorrecta(this);
    }
})

price.addEventListener('blur', function (e) {
    if (parseInt(this.value) && parseInt(this.value) != 0) {
        validacionCorrecta(this)
    } else {
        validacionIncorrecta(this)
    }
})
description.addEventListener('blur', function (e) {
    if (parseInt(this.value) && parseInt(this.value) != 0) {
        validacionCorrecta(this)
    } else {
        validacionIncorrecta(this)
    }
})






let validacionCorrecta = (elemento) => {
    elemento.classList.remove("validation-bad")
    elemento.classList.add("validation-success")
    let feedbackDiv = document.querySelector(`#feedback-${elemento.id}`)
    feedbackDiv.classList.add("hidden")
}
let validacionIncorrecta = (elemento) => {
    elemento.classList.add("validation-bad")
    elemento.classList.remove("validation-success")
    let feedbackDiv = document.querySelector(`#feedback-${elemento.id}`)
    feedbackDiv.classList.remove("hidden")
}
let limpiarValidaciones = (elemento) => {
    let feedbackDiv = document.querySelector(`#feedback-${elemento.id}`)
    feedbackDiv.classList.add("hidden")
} */