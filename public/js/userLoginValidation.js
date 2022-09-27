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

        if (form.email.value == "") {
            errors.push("El campo de Email no puede ir vacío");
        }
        if (form.password.value == "") {
            errors.push("El campo de Password no puede ir vacío");
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