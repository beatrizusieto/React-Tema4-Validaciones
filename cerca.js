
function registerValidate() {

	const form = document.getElementById('search');

	let acumErrores = 0;
	

	form.classList.remove('is-invalid');
	
	let inputSearch = document.getElementById('inputSearch');
	
	if(inputSearch.value == "") {
		inputSearch.classList.add("is-invalid");
		document.getElementById("errorSearch").textContent = "Es campo es obligatorio";
        acumErrores ++;
    }else if(!validar_search(inputSearch.value)){
		inputSearch.classList.add("is-invalid");
		document.getElementById("errorSearch").textContent = "La búsqueda no cumple el formato";
		acumErrores ++;
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

function validar_search(search) {

	

	if(search.length>3)
	{
		return true;
	}
	else  return false;

	
}
