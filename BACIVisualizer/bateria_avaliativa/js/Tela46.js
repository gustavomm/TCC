function carregar_dados()
{
	checar_paciente();
	var json = JSON.parse(localStorage.getItem("Pacientes"));
	for(i = 0; i < json.Paciente.Pacientes.length; i++)
	{
		if(json.Paciente.Pacientes[i].Nome == sessionStorage.getItem("PacienteSelecionado"))
		{
			if(!json.Paciente.Pacientes[i].hasOwnProperty("Tela46"))
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
	json.Paciente.Pacientes[i].Tela46 = {};
	json.Paciente.Pacientes[i].Tela46.ex1 = false;
	json.Paciente.Pacientes[i].Tela46.ex2 = false;
	json.Paciente.Pacientes[i].Tela46.ex3 = false;
	json.Paciente.Pacientes[i].Tela46.ex4 = false;
	json.Paciente.Pacientes[i].Tela46.ex5 = false;
	json.Paciente.Pacientes[i].Tela46.ex6 = false;
	json.Paciente.Pacientes[i].Tela46.ex7 = false;
	json.Paciente.Pacientes[i].Tela46.ex8 = false;
	
	var ls = JSON.stringify(json);
	localStorage.setItem("Pacientes", ls);
}	

function carregar_paciente(json, i) {
	Object.keys(json.Paciente.Pacientes[i].Tela46).forEach(function(nome) {		
		document.getElementById(nome).checked = json.Paciente.Pacientes[i].Tela46[nome];
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
					json.Paciente.Pacientes[i].Tela46[allChecks[j].name] = allChecks[j].checked;
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
		window.location.href = "Tela45.html"
}

function proximo(form) {
	localStorage.setItem('PacienteSelecionado', sessionStorage.getItem('PacienteSelecionado'));
    var json = JSON.parse(localStorage.getItem('Pacientes'));
	for(i = 0; i < json.Paciente.Pacientes.length; i++)
	{
		if(json.Paciente.Pacientes[i].Nome == sessionStorage.getItem("PacienteSelecionado"))
		{
			if(json.Paciente.Pacientes[i].TelaAtual < 47)
				json.Paciente.Pacientes[i].TelaAtual = 47;
			var ls = JSON.stringify(json);
			localStorage.setItem('Pacientes', ls);
			salvar();
			form.action = "Tela47.html";
			break;
		}
	}
}
