function carregar_dados()
{
	checar_paciente();
	var json = JSON.parse(localStorage.getItem("Pacientes"));
	for(i = 0; i < json.Paciente.Pacientes.length; i++)
	{
		if(json.Paciente.Pacientes[i].Nome == sessionStorage.getItem("PacienteSelecionado"))
		{
			if(!json.Paciente.Pacientes[i].hasOwnProperty("Tela25"))
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
	json.Paciente.Pacientes[i].Tela25 = {};
	json.Paciente.Pacientes[i].Tela25.grande = "";
	json.Paciente.Pacientes[i].Tela25.menor = "";
	json.Paciente.Pacientes[i].Tela25.linha = "";
	json.Paciente.Pacientes[i].Tela25.retangulo = "";
	json.Paciente.Pacientes[i].Tela25.quatro = "";
	json.Paciente.Pacientes[i].Tela25.seta = "";
	json.Paciente.Pacientes[i].Tela25.vertical = "";
	json.Paciente.Pacientes[i].Tela25.cortando = "";
	json.Paciente.Pacientes[i].Tela25.esquerda = "";
	json.Paciente.Pacientes[i].Tela25.externo = "";
	json.Paciente.Pacientes[i].Tela25.metade = "";
	json.Paciente.Pacientes[i].Tela25.z = "";
	json.Paciente.Pacientes[i].Tela25.circulo = "";
	json.Paciente.Pacientes[i].Tela25.dentro = "";
	json.Paciente.Pacientes[i].Tela25.inferior = "";
	json.Paciente.Pacientes[i].Tela25.quadrado = "";
	json.Paciente.Pacientes[i].Tela25.inicio = "";
	json.Paciente.Pacientes[i].Tela25.meio = "";
	
	var ls = JSON.stringify(json);
	console.log(json);
	localStorage.setItem("Pacientes", ls);
}	

function carregar_paciente(json, i) {
	Object.keys(json.Paciente.Pacientes[i].Tela25).forEach(function(nome) {		
		if(json.Paciente.Pacientes[i].Tela25[nome] != "")
			document.getElementById(json.Paciente.Pacientes[i].Tela25[nome]).checked = true;
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
					json.Paciente.Pacientes[i].Tela25[allChecks[j].name] = allChecks[j].getAttribute('id');
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
		window.location.href = "Tela24.html"
}

function proximo(form) {
	localStorage.setItem('PacienteSelecionado', sessionStorage.getItem('PacienteSelecionado'));
    var json = JSON.parse(localStorage.getItem('Pacientes'));
	for(i = 0; i < json.Paciente.Pacientes.length; i++)
	{
		if(json.Paciente.Pacientes[i].Nome == sessionStorage.getItem("PacienteSelecionado"))
		{
			//json.Paciente.Pacientes[i].TelaAtual = 26;
			var ls = JSON.stringify(json);
			localStorage.setItem('Pacientes', ls);
			salvar();
			form.action = "Tela26.html";
			break;
		}
	}
}
