
function registerValidateLogin() {

	const form = document.getElementById('myform1');

	let acumErrores = 0;
	
   
	form.classList.remove('is-invalid');

	let inputEmail = document.getElementById('inputEmail');
	
	
	let inputPassword = document.forms["myform1"]["inputPassword"];
	
	if(inputEmail.value == "") {
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "Es campo es obligatorio";
        acumErrores ++;
		
    }else if(!validar_email(inputEmail.value)){
		inputEmail.classList.add("is-invalid");
		document.getElementById("errorEmail").textContent = "El e-mail no cumple el formato";
		acumErrores ++;
	}else{
		document.getElementById("errorEmail").textContent = "";
	}

    if(inputPassword.value == "") {
		inputPassword.classList.add("is-invalid");
		document.getElementById("errorPassword").textContent = "Es campo es obligatorio";
		acumErrores ++;
	}else if(!validar_password(inputPassword.value)){
			inputPassword.classList.add("is-invalid");
			document.getElementById("errorPassword").textContent = "El password no cumple el formato. Debe tener al menos 8 carácteres, un número y una mayúscula";
			acumErrores ++;
	}else{
		document.getElementById("errorPassword").textContent = "";
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
