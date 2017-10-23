function carregar_dados()
{
	checar_paciente();
}


function checar_paciente() {
	if(localStorage.getItem("PacienteSelecionado") == null)
	{
		alert("Selecione um paciente");
		window.location.href = "paciente.html";
		return false;
	
	}
	else{
		
		sessionStorage.setItem("PacienteSelecionado", localStorage.getItem('PacienteSelecionado'));
		localStorage.removeItem("PacienteSelecionado");	
		paciente = sessionStorage.getItem("PacienteSelecionado");		
		document.getElementById("nome").innerHTML = paciente;
		return true;
	}
}


function voltar()
{
		localStorage.setItem("PacienteSelecionado", sessionStorage.getItem('PacienteSelecionado'));	
		window.location.href = "Tela21.html"
}

function proximo(form) {
	localStorage.setItem('PacienteSelecionado', sessionStorage.getItem('PacienteSelecionado'));
    var json = JSON.parse(localStorage.getItem('Pacientes'));
	for(i = 0; i < json.Paciente.Pacientes.length; i++)
	{
		if(json.Paciente.Pacientes[i].Nome == sessionStorage.getItem("PacienteSelecionado"))
		{
			json.Paciente.Pacientes[i].TelaAtual = 23;
			var ls = JSON.stringify(json);
			localStorage.setItem('Pacientes', ls);
			form.action = "Tela23.html";
			break;
		}
	}
}
