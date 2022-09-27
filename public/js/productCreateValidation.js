window.onload = function () {
    let form = document.querySelector("form");
    let errorsList = document.querySelector(".errorList");
    console.log("estamos conectados");
    form.addEventListener("submit", (e) => {
        //Check if there is any previous errors created and reset the list
        let errorBullets = document.querySelectorAll("li");
        if (errorBullets.length > 0 && errorBullets[0]) {
            let errorsArray = [...errorBullets];
            errorsArray.map((e) => {
                e.remove();
            });
        }
        let errors = [];
        console.log(form.brand_id);
        if (form.brand_id.value == "") {
            errors.push("Debes seleccionar una marca");
        }
        if (form.category_id.value == "") {
            errors.push("Debes seleccionar un tipo");
        }
        if (form.model.value == "") {
            errors.push("Debes completar el campo modelo");
        }
        if (form.price.value == "" || isNaN(form.price.value)) {
            errors.push("Debes completar el campo precio con numeros");
        }
        if (form.description.value == "") {
            errors.push("Debes completar el campo descripcion");
        }
        if (form.image.value == "") {
            errors.push("Debes seleccionar una imagen de producto");
        }

        if (errors.length > 0) {
            e.preventDefault();
            errors.map((e) => {
                errorsList.innerHTML += "<li>" + e + "</li>";
            });
            errorsList.style.display = "block";
        }
    });
};
