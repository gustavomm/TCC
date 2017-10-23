function carregar_dados()
{
	checar_paciente();
	var json = JSON.parse(localStorage.getItem("Pacientes"));
	for(i = 0; i < json.Paciente.Pacientes.length; i++)
	{
		if(json.Paciente.Pacientes[i].Nome == sessionStorage.getItem("PacienteSelecionado"))
		{
			if(!json.Paciente.Pacientes[i].hasOwnProperty("Tela11"))
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
	json.Paciente.Pacientes[i].Tela11 = {};
	json.Paciente.Pacientes[i].Tela11.frequencia = "";
	json.Paciente.Pacientes[i].Tela11.reconhecer = "";
	json.Paciente.Pacientes[i].Tela11.atividade = "";
	json.Paciente.Pacientes[i].Tela11.acabaram = "";
	json.Paciente.Pacientes[i].Tela11.anotar = "";
	json.Paciente.Pacientes[i].Tela11.compromissos = "";
	json.Paciente.Pacientes[i].Tela11.nomepessoas = "";
	json.Paciente.Pacientes[i].Tela11.rostopessoas = "";
	json.Paciente.Pacientes[i].Tela11.recentemente = "";
	json.Paciente.Pacientes[i].Tela11.dezanos = "";
	json.Paciente.Pacientes[i].Tela11.historia = "";
	json.Paciente.Pacientes[i].Tela11.objeto = "";
	json.Paciente.Pacientes[i].Tela11.recado = "";
	json.Paciente.Pacientes[i].Tela11.memoria = "";
	
	var ls = JSON.stringify(json);
	console.log(json);
	localStorage.setItem("Pacientes", ls);
}	

function carregar_paciente(json, i) {
	Object.keys(json.Paciente.Pacientes[i].Tela11).forEach(function(nome) {		
		if(json.Paciente.Pacientes[i].Tela11[nome] != "")
			document.getElementById(json.Paciente.Pacientes[i].Tela11[nome]).checked = true;
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
					json.Paciente.Pacientes[i].Tela11[allChecks[j].name] = allChecks[j].getAttribute('id');
				}
			}
		}
	}
	var ls = JSON.stringify(json);
	localStorage.setItem("Pacientes", ls);
}

function voltar()
{
		localStorage.setItem("PacienteSelecionado", sessionStorage.getItem('PacienteSelecionado'));	
		window.location.href = "Tela10.html"
}

function proximo(form) {
	localStorage.setItem('PacienteSelecionado', sessionStorage.getItem('PacienteSelecionado'));
    var json = JSON.parse(localStorage.getItem('Pacientes'));
	for(i = 0; i < json.Paciente.Pacientes.length; i++)
	{
		if(json.Paciente.Pacientes[i].Nome == sessionStorage.getItem("PacienteSelecionado"))
		{
			json.Paciente.Pacientes[i].TelaAtual = 12;
			var ls = JSON.stringify(json);
			localStorage.setItem('Pacientes', ls);
			salvar();
			form.action = "Tela12.html";
			break;
		}
	}
}
