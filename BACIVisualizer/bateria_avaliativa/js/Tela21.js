function carregar_dados()
{
	checar_paciente();
	var json = JSON.parse(localStorage.getItem("Pacientes"));
	for(i = 0; i < json.Paciente.Pacientes.length; i++)
	{
		if(json.Paciente.Pacientes[i].Nome == sessionStorage.getItem("PacienteSelecionado"))
		{
			if(!json.Paciente.Pacientes[i].hasOwnProperty("Tela21"))
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
	json.Paciente.Pacientes[i].Tela21 = {};
	json.Paciente.Pacientes[i].Tela21.lembrar = "";
	json.Paciente.Pacientes[i].Tela21.organizar = "";
	json.Paciente.Pacientes[i].Tela21.ordenar = "";
	json.Paciente.Pacientes[i].Tela21.descrever = "";
	json.Paciente.Pacientes[i].Tela21.contar = "";
	json.Paciente.Pacientes[i].Tela21.intrusao = "";
	json.Paciente.Pacientes[i].Tela21.confabular = "";
	json.Paciente.Pacientes[i].Tela21.coerencia = "";
	json.Paciente.Pacientes[i].Tela21.pausa = "";
	json.Paciente.Pacientes[i].Tela21.repetir = "";
	json.Paciente.Pacientes[i].Tela21.observacoes = "";
	
	var ls = JSON.stringify(json);
	console.log(json);
	localStorage.setItem("Pacientes", ls);
}	

function carregar_paciente(json, i) {
	Object.keys(json.Paciente.Pacientes[i].Tela21).forEach(function(nome) {		
		if(json.Paciente.Pacientes[i].Tela21[nome] != "" && nome != "observacoes")
			document.getElementById(json.Paciente.Pacientes[i].Tela21[nome]).checked = true;
		if(json.Paciente.Pacientes[i].Tela21[nome] != null && json.Paciente.Pacientes[i].Tela21[nome] != "" && nome == "observacoes")
			document.getElementById(nome).value = json.Paciente.Pacientes[i].Tela21[nome];
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
				if(allChecks[j].type == 'radio' && allChecks[j].checked == true)
				{
					json.Paciente.Pacientes[i].Tela21[allChecks[j].name] = allChecks[j].getAttribute('id');
				}
			}
			json.Paciente.Pacientes[i].Tela21["observacoes"] = document.getElementById("observacoes").value;
		}
	}
	var ls = JSON.stringify(json);
	localStorage.setItem("Pacientes", ls);
}

function voltar()
{
		localStorage.setItem("PacienteSelecionado", sessionStorage.getItem('PacienteSelecionado'));	
		window.location.href = "Tela20.html"
}

function proximo(form) {
	localStorage.setItem('PacienteSelecionado', sessionStorage.getItem('PacienteSelecionado'));
    var json = JSON.parse(localStorage.getItem('Pacientes'));
	for(i = 0; i < json.Paciente.Pacientes.length; i++)
	{
		if(json.Paciente.Pacientes[i].Nome == sessionStorage.getItem("PacienteSelecionado"))
		{
			json.Paciente.Pacientes[i].TelaAtual = 22;
			var ls = JSON.stringify(json);
			localStorage.setItem('Pacientes', ls);
			salvar();
			form.action = "Tela22.html";
			break;
		}
	}
}
