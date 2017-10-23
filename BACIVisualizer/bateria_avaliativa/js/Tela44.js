function carregar_dados()
{
	checar_paciente();
	var json = JSON.parse(localStorage.getItem("Pacientes"));
	for(i = 0; i < json.Paciente.Pacientes.length; i++)
	{
		if(json.Paciente.Pacientes[i].Nome == sessionStorage.getItem("PacienteSelecionado"))
		{
			if(!json.Paciente.Pacientes[i].hasOwnProperty("Tela44"))
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
	json.Paciente.Pacientes[i].Tela44 = {};
	json.Paciente.Pacientes[i].Tela44.livro= "false";
	json.Paciente.Pacientes[i].Tela44.mesa= "false";
	json.Paciente.Pacientes[i].Tela44.sapato= "false";
	json.Paciente.Pacientes[i].Tela44.arvore= "false";
	json.Paciente.Pacientes[i].Tela44.estrela= "false";
	json.Paciente.Pacientes[i].Tela44.copo= "false";
	json.Paciente.Pacientes[i].Tela44.boneca= "false";
	json.Paciente.Pacientes[i].Tela44.pato= "false";
	json.Paciente.Pacientes[i].Tela44.cavalo= "false";
	json.Paciente.Pacientes[i].Tela44.janela= "false";
	json.Paciente.Pacientes[i].Tela44.livro2= "false";
	json.Paciente.Pacientes[i].Tela44.mesa2= "false";
	json.Paciente.Pacientes[i].Tela44.sapato2= "false";
	json.Paciente.Pacientes[i].Tela44.arvore2= "false";
	json.Paciente.Pacientes[i].Tela44.estrela2= "false";
	json.Paciente.Pacientes[i].Tela44.copo2= "false";
	json.Paciente.Pacientes[i].Tela44.boneca2= "false";
	json.Paciente.Pacientes[i].Tela44.pato2= "false";
	json.Paciente.Pacientes[i].Tela44.cavalo2= "false";
	json.Paciente.Pacientes[i].Tela44.janela2= "false";
	json.Paciente.Pacientes[i].Tela44.livro3= "false";
	json.Paciente.Pacientes[i].Tela44.mesa3= "false";
	json.Paciente.Pacientes[i].Tela44.sapato3= "false";
	json.Paciente.Pacientes[i].Tela44.arvore3= "false";
	json.Paciente.Pacientes[i].Tela44.estrela3= "false";
	json.Paciente.Pacientes[i].Tela44.copo3= "false";
	json.Paciente.Pacientes[i].Tela44.boneca3= "false";
	json.Paciente.Pacientes[i].Tela44.pato3= "false";
	json.Paciente.Pacientes[i].Tela44.cavalo3= "false";
	json.Paciente.Pacientes[i].Tela44.janela3= "false";
	
	var ls = JSON.stringify(json);
	localStorage.setItem("Pacientes", ls);
}	

function carregar_paciente(json, i) {
	Object.keys(json.Paciente.Pacientes[i].Tela44).forEach(function(nome) {		
		document.getElementById(nome).checked = json.Paciente.Pacientes[i].Tela44[nome];
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
					json.Paciente.Pacientes[i].Tela44[allChecks[j].name] = allChecks[j].checked;
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
		window.location.href = "Tela43.html"
}

function proximo(form) {
	localStorage.setItem('PacienteSelecionado', sessionStorage.getItem('PacienteSelecionado'));
    var json = JSON.parse(localStorage.getItem('Pacientes'));
	for(i = 0; i < json.Paciente.Pacientes.length; i++)
	{
		if(json.Paciente.Pacientes[i].Nome == sessionStorage.getItem("PacienteSelecionado"))
		{
			if(json.Paciente.Pacientes[i].TelaAtual < 45)
				json.Paciente.Pacientes[i].TelaAtual = 45;
			var ls = JSON.stringify(json);
			localStorage.setItem('Pacientes', ls);
			salvar();
			form.action = "Tela45.html";
			break;
		}
	}
}
