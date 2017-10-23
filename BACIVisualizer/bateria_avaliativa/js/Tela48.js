function carregar_dados()
{
	checar_paciente();
	var json = JSON.parse(localStorage.getItem("Pacientes"));
	for(i = 0; i < json.Paciente.Pacientes.length; i++)
	{
		if(json.Paciente.Pacientes[i].Nome == sessionStorage.getItem("PacienteSelecionado"))
		{
			if(!json.Paciente.Pacientes[i].hasOwnProperty("Tela48"))
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
	json.Paciente.Pacientes[i].Tela48 = {};
	json.Paciente.Pacientes[i].Tela48.carro = false;
	json.Paciente.Pacientes[i].Tela48.estrela = false;
	json.Paciente.Pacientes[i].Tela48.cavalo = false;
	json.Paciente.Pacientes[i].Tela48.coracao = false;
	json.Paciente.Pacientes[i].Tela48.pato = false;
	json.Paciente.Pacientes[i].Tela48.pera = false;
	json.Paciente.Pacientes[i].Tela48.arvore = false;
	json.Paciente.Pacientes[i].Tela48.onibus = false;
	json.Paciente.Pacientes[i].Tela48.sapato = false;
	json.Paciente.Pacientes[i].Tela48.copo = false;
	json.Paciente.Pacientes[i].Tela48.rato = false;
	json.Paciente.Pacientes[i].Tela48.janela = false;
	json.Paciente.Pacientes[i].Tela48.sopa = false;
	json.Paciente.Pacientes[i].Tela48.boneca = false;
	json.Paciente.Pacientes[i].Tela48.caderno = false;
	json.Paciente.Pacientes[i].Tela48.nuvem = false;
	json.Paciente.Pacientes[i].Tela48.mesa = false;
	json.Paciente.Pacientes[i].Tela48.caixa = false;
	json.Paciente.Pacientes[i].Tela48.livro = false;
	json.Paciente.Pacientes[i].Tela48.vestido = false;
	
	var ls = JSON.stringify(json);
	localStorage.setItem("Pacientes", ls);
}	

function carregar_paciente(json, i) {
	Object.keys(json.Paciente.Pacientes[i].Tela48).forEach(function(nome) {		
		document.getElementById(nome).checked = json.Paciente.Pacientes[i].Tela48[nome];
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
					json.Paciente.Pacientes[i].Tela48[allChecks[j].name] = allChecks[j].checked;
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
		window.location.href = "Tela47.html"
}

function proximo(form) {
	localStorage.setItem('PacienteSelecionado', sessionStorage.getItem('PacienteSelecionado'));
    var json = JSON.parse(localStorage.getItem('Pacientes'));
	for(i = 0; i < json.Paciente.Pacientes.length; i++)
	{
		if(json.Paciente.Pacientes[i].Nome == sessionStorage.getItem("PacienteSelecionado"))
		{
			if(json.Paciente.Pacientes[i].TelaAtual < 49)
				json.Paciente.Pacientes[i].TelaAtual = 49;
			var ls = JSON.stringify(json);
			localStorage.setItem('Pacientes', ls);
			salvar();
			form.action = "Tela49.html";
			break;
		}
	}
}
