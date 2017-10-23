function carregar_dados()
{
	checar_paciente();
	var json = JSON.parse(localStorage.getItem("Pacientes"));
	for(i = 0; i < json.Paciente.Pacientes.length; i++)
	{
		if(json.Paciente.Pacientes[i].Nome == sessionStorage.getItem("PacienteSelecionado"))
		{
			if(!json.Paciente.Pacientes[i].hasOwnProperty("Tela54"))
			{
				primera_vez(json, i, json.Paciente.Pacientes[i].Nome);
			}
			else{
				carregar_paciente(json, i);
			}
		}
	}
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

function primera_vez(json, i, nome)
{
	json.Paciente.Pacientes[i].Tela54 = {};
	json.Paciente.Pacientes[i].Tela54.Flor = false;
	json.Paciente.Pacientes[i].Tela54.Gato = false;
	json.Paciente.Pacientes[i].Tela54.Vaso = false;
	json.Paciente.Pacientes[i].Tela54.Pincel = false;
	json.Paciente.Pacientes[i].Tela54.Coelho = false;
	json.Paciente.Pacientes[i].Tela54.Violao = false;
	json.Paciente.Pacientes[i].Tela54.Dado = false;
	json.Paciente.Pacientes[i].Tela54.Batom = false;
	json.Paciente.Pacientes[i].Tela54.Prato = false;
	json.Paciente.Pacientes[i].Tela54.Gude = false;
	
	var ls = JSON.stringify(json);
	localStorage.setItem("Pacientes", ls);
}	

function carregar_paciente(json, i) {
	Object.keys(json.Paciente.Pacientes[i].Tela54).forEach(function(nome) {		
		document.getElementById(nome).checked = json.Paciente.Pacientes[i].Tela54[nome];
	});
	
}

function salvar_sair()
{
	salvar();
	alert('As informacoes foram salvas');
	window.location.href = "paciente.html";
}

function salvar()
{
	json = JSON.parse(localStorage.getItem("Pacientes"));
	for(i = 0; i < json.Paciente.Pacientes.length; i++)
	{
		if(json.Paciente.Pacientes[i].Nome == sessionStorage.getItem("PacienteSelecionado"))
		{
			var allChecks = document.getElementsByTagName('input');
			for(j = 0; j < allChecks.length; j++)
			{
				if(allChecks[j].type == 'checkbox')
				{
					json.Paciente.Pacientes[i].Tela54[allChecks[j].name] = allChecks[j].checked;
				}
			}
		}
	}
	var ls = JSON.stringify(json);
	localStorage.setItem("Pacientes", ls);
}

function voltar()
{
		salvar();
		localStorage.setItem("PacienteSelecionado", sessionStorage.getItem('PacienteSelecionado'));	
		window.location.href = "Tela53.html"
}

function proximo(form) {
	localStorage.setItem('PacienteSelecionado', sessionStorage.getItem('PacienteSelecionado'));
    var json = JSON.parse(localStorage.getItem('Pacientes'));
	for(i = 0; i < json.Paciente.Pacientes.length; i++)
	{
		if(json.Paciente.Pacientes[i].Nome == sessionStorage.getItem("PacienteSelecionado"))
		{
			if(json.Paciente.Pacientes[i].TelaAtual < 55)
				json.Paciente.Pacientes[i].TelaAtual = 55;
			var ls = JSON.stringify(json);
			localStorage.setItem('Pacientes', ls);
			salvar();
			form.action = "Tela55.html";
			break;
		}
	}
}
