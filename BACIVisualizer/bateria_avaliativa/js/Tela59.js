function carregar_dados()
{
	checar_paciente();
	var json = JSON.parse(localStorage.getItem("Pacientes"));
	for(i = 0; i < json.Paciente.Pacientes.length; i++)
	{
		if(json.Paciente.Pacientes[i].Nome == sessionStorage.getItem("PacienteSelecionado"))
		{
			if(!json.Paciente.Pacientes[i].hasOwnProperty("Tela59"))
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
	json.Paciente.Pacientes[i].Tela59 = {};
	json.Paciente.Pacientes[i].Tela59.flor = false;
	json.Paciente.Pacientes[i].Tela59.gato = false;
	json.Paciente.Pacientes[i].Tela59.vaso = false;
	json.Paciente.Pacientes[i].Tela59.pincel = false;
	json.Paciente.Pacientes[i].Tela59.coelho = false;
	json.Paciente.Pacientes[i].Tela59.violao = false;
	json.Paciente.Pacientes[i].Tela59.dado = false;
	json.Paciente.Pacientes[i].Tela59.batom = false;
	json.Paciente.Pacientes[i].Tela59.prato = false;
	json.Paciente.Pacientes[i].Tela59.gude = false;
	json.Paciente.Pacientes[i].Tela59.pontuacao = 0;
	
	var ls = JSON.stringify(json);
	localStorage.setItem("Pacientes", ls);
}	

function carregar_paciente(json, i) {
	Object.keys(json.Paciente.Pacientes[i].Tela59).forEach(function(nome) {		
		document.getElementById(nome).checked = json.Paciente.Pacientes[i].Tela59[nome];
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
	var pontos = 0;
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
					json.Paciente.Pacientes[i].Tela59[allChecks[j].name] = allChecks[j].checked;
					
					if(allChecks[j].className == 'correto' && allChecks[j].checked)
					{
						pontos = pontos + 1;
					}
				}
				else if(allChecks[j].type == 'hidden')
				{
					json.Paciente.Pacientes[i].Tela59[allChecks[j].name] = pontos;
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
		window.location.href = "Tela58.html"
}

function proximo(form) {
	localStorage.setItem('PacienteSelecionado', sessionStorage.getItem('PacienteSelecionado'));
    var json = JSON.parse(localStorage.getItem('Pacientes'));
	for(i = 0; i < json.Paciente.Pacientes.length; i++)
	{
		if(json.Paciente.Pacientes[i].Nome == sessionStorage.getItem("PacienteSelecionado"))
		{
			if(json.Paciente.Pacientes[i].TelaAtual < 59)
				json.Paciente.Pacientes[i].TelaAtual = 59;
			var ls = JSON.stringify(json);
			localStorage.setItem('Pacientes', ls);
			salvar();
			form.action = "Tela60.html";
			break;
		}
	}
}

