function carregar_dados()
{
	checar_paciente();
	var json = JSON.parse(localStorage.getItem("Pacientes"));
	for(i = 0; i < json.Paciente.Pacientes.length; i++)
	{
		if(json.Paciente.Pacientes[i].Nome == sessionStorage.getItem("PacienteSelecionado"))
		{
			if(!json.Paciente.Pacientes[i].hasOwnProperty("Tela9"))
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
	json.Paciente.Pacientes[i].Tela9 = {};
	json.Paciente.Pacientes[i].Tela9.ex1 = "";
	json.Paciente.Pacientes[i].Tela9.ex2 = "";
	json.Paciente.Pacientes[i].Tela9.ex3 = "";
	json.Paciente.Pacientes[i].Tela9.ex4 = "";
	json.Paciente.Pacientes[i].Tela9.ex5 = "";
	json.Paciente.Pacientes[i].Tela9.ex6 = "";
	json.Paciente.Pacientes[i].Tela9.ex7 = "";
	json.Paciente.Pacientes[i].Tela9.ex8 = "";
	json.Paciente.Pacientes[i].Tela9.ex9 = "";
	json.Paciente.Pacientes[i].Tela9.ex10 = "";
	json.Paciente.Pacientes[i].Tela9.ex11 = "";
	json.Paciente.Pacientes[i].Tela9.ex12 = "";
	json.Paciente.Pacientes[i].Tela9.ex13 = "";
	json.Paciente.Pacientes[i].Tela9.ex14 = "";
	json.Paciente.Pacientes[i].Tela9.ex15 = "";
	
	var ls = JSON.stringify(json);
	console.log(json);
	localStorage.setItem("Pacientes", ls);
}

function carregar_paciente(json, i) {
	
	//document.getElementById(json.Paciente.Pacientes[i].Tela9["ex1"]).checked = true;

	Object.keys(json.Paciente.Pacientes[i].Tela9).forEach(function(nome) {		
		if(json.Paciente.Pacientes[i].Tela9[nome] != "")
			document.getElementById(nome).checked = true;
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
				if(allChecks[j].type == 'checkbox' && allChecks[j].checked == true)
				{
					json.Paciente.Pacientes[i].Tela9[allChecks[j].name] = allChecks[j].value;
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
		window.location.href = "Tela8.html"
}

function proximo(form) {
	localStorage.setItem('PacienteSelecionado', sessionStorage.getItem('PacienteSelecionado'));
    var json = JSON.parse(localStorage.getItem('Pacientes'));
	for(i = 0; i < json.Paciente.Pacientes.length; i++)
	{
		if(json.Paciente.Pacientes[i].Nome == sessionStorage.getItem("PacienteSelecionado"))
		{
			json.Paciente.Pacientes[i].TelaAtual = 10;
			var ls = JSON.stringify(json);
			localStorage.setItem('Pacientes', ls);
			salvar();
			form.action = "Tela10.html";
			break;
		}
	}
}


function atualizarPontos(ex)
{
	
}



