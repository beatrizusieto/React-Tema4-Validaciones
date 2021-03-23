
function registerValidate2() {

	const form = document.getElementById('myform2');

	let acumErrores = 0;
   
	form.classList.remove('is-invalid');
	
	let inputEmail = document.getElementById('inputEmail2');
	
	let inputUser = document.forms["myform2"]["inputUser"];
	let inputPassword2 = document.forms["myform2"]["inputPassword2"];
	let inputPassword3 = document.forms["myform2"]["inputPassword3"];
	

	if(inputUser.value == "") {
		inputUser.classList.add("is-invalid");
		document.getElementById("errorUser").textContent = "Es campo es obligatorio";
		acumErrores ++;
	}
	else{
		document.getElementById("errorUser").textContent = "";
	}
	
	if(inputEmail2.value == "") {
		inputEmail2.classList.add("is-invalid");
		document.getElementById("errorEmail2").textContent = "Es campo es obligatorio";
        acumErrores ++;
		
    }else if(!validar_email(inputEmail2.value)){
		inputEmail2.classList.add("is-invalid");
		document.getElementById("errorEmail2").textContent = "El e-mail no cumple el formato";
		acumErrores ++;
	}else{
		document.getElementById("errorEmail2").textContent = "";
	}

    if(inputPassword2.value == "") {
		inputPassword2.classList.add("is-invalid");
		document.getElementById("errorPassword2").textContent = "Es campo es obligatorio";
		acumErrores ++;
	}else if(!validar_password(inputPassword2.value)){
			inputPassword2.classList.add("is-invalid");
			document.getElementById("errorPassword2").textContent = "El password no cumple el formato. Debe tener al menos 8 carácteres, un número y una mayúscula";
			acumErrores ++;
	}else{
		document.getElementById("errorPassword2").textContent = "";
	}

	if(inputPassword3.value == "") {
		inputPassword3.classList.add("is-invalid");
		document.getElementById("errorPassword3").textContent = "Es campo es obligatorio";
		acumErrores ++;
	}else if(!validar_confirmacion_password(inputPassword2.value, inputPassword3.value)){
			inputPassword3.classList.add("is-invalid");
			document.getElementById("errorPassword3").textContent = "Los passwords no coinciden o no tienen formato válido";
			acumErrores ++;
	}else{
		document.getElementById("errorPassword3").textContent = "";
	}
	

    if(inputProvince.value == "") {
		inputProvince.classList.add("is-invalid");
		document.getElementById("errorProvince").textContent = "La provincia es obligatoria";
		acumErrores ++;
	}
	else{
		document.getElementById("errorProvince").textContent = "";
	}
	
	

    if (acumErrores > 0){

        return false;

    }else{
		return true;
	}
} 



form.addEventListener('blur', (event) => {
	console.log(event);
	if(event.target.value!='') event.target.classList.remove('is-invalid');
}, true);

function validar_email(email) {

	let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email) ? true : false;
}

function validar_password(password) {

	let regex1 = /\d/;
	let regex2 = /[A-Z]/;
	
	if(password.length<8 || !regex1.test(password) || !regex2.test(password))
	{
		return false;
	}
    else{ return true;}

}

function validar_confirmacion_password(password2, password3) {

	let regex1 = /\d/;
	let regex2 = /[A-Z]/;

	if(password2.length<8 || !regex1.test(password2) || !regex2.test(password2))
	{
		return false;
	}

	if(password2 == password3)
	{
		return true;
	}
	else
	{
		return false;
	}
	
}
