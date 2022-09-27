window.onload = () => {

    let form = document.querySelector("form")
    let errorsList = document.querySelector(".errorList")

    form.addEventListener("submit", (e) => {

        let errorBullets = document.querySelectorAll("li");
        if (errorBullets.length > 0 && errorBullets[0]) {
            let errorsArray = [...errorBullets];
            errorsArray.map((e) => {
                e.remove();
            });
        }
        let errors = [];

        if (form.nombre.value == "") {
            errors.push("El campo Nombre no puede ir vacío");
        } if (form.nombre.value.length < 3) {
            errors.push("El campo Nombre debe contener más de tres caracteres");
        }
        if (form.apellido.value == "") {
            errors.push("El campo Apellido no puede ir vacío");
        }  if (form.apellido.value.length < 3) {
            errors.push("El campo Apellido debe contener más de tres caracteres");
        }
        if (form.email.value == "") {
            errors.push("El campo Email no puede ir vacío");
        } 
        if (form.birthDate.value == "") {
            errors.push("El campo Fecha de Nacimiento no puede ir vacío");
        } 
        if (form.password.value == "") {
            errors.push("El campo Password no puede ir vacío");
        } if (form.password.value.length < 8 || form.password.value.length > 16) {
            errors.push("Debe ingresar un Password desde 8 hasta 16 caracteres")
        }

        if (errors.length > 0) {
            e.preventDefault();
            errors.map((e) => {
                errorsList.innerHTML += "<li>" + e + "</li>";
            });
            errorsList.style.display = "block";
        }
    })
}