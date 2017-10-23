function carregar_dados()
{
	checar_paciente();
	var json = JSON.parse(localStorage.getItem("Pacientes"));
	for(i = 0; i < json.Paciente.Pacientes.length; i++)
	{
		if(json.Paciente.Pacientes[i].Nome == sessionStorage.getItem("PacienteSelecionado"))
		{
			if(!json.Paciente.Pacientes[i].hasOwnProperty("Tela7"))
			{
				primera_vez(json, i, json.Paciente.Pacientes[i].Nome);
			}
			else{
				carregar_paciente(json, i ,sessionStorage.getItem("PacienteSelecionado"));
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
	json.Paciente.Pacientes[i].Tela7 = {};
	json.Paciente.Pacientes[i].Tela7.compreensao = "0";
	json.Paciente.Pacientes[i].Tela7.frase = "0";
	
	var ls = JSON.stringify(json);
	console.log(json);
	localStorage.setItem("Pacientes", ls);
}

function carregar_paciente(json, i, nome) {
	
	if(json.Paciente.Pacientes[i].Tela7.totalAcerto != "")
		document.getElementById("compreensao").value = json.Paciente.Pacientes[i].Tela7.compreensao;
	
	if(json.Paciente.Pacientes[i].Tela7.memoria != "")
		document.getElementById("frase").value = json.Paciente.Pacientes[i].Tela7.frase;
	
	
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
	for(j = 0; j < json.Paciente.Pacientes.length; j++)
	{
		if(json.Paciente.Pacientes[j].Nome == sessionStorage.getItem("PacienteSelecionado"))
		{	
				
				json.Paciente.Pacientes[j].Tela7.compreensao = document.getElementById("compreensao").options[document.getElementById("compreensao").selectedIndex].value;
			
				json.Paciente.Pacientes[j].Tela7.frase = document.getElementById("frase").options[document.getElementById("frase").selectedIndex].value;
		
		}
	}
	var ls = JSON.stringify(json);
	localStorage.setItem("Pacientes", ls);
}

function voltar()
{
		localStorage.setItem("PacienteSelecionado", sessionStorage.getItem('PacienteSelecionado'));	
		window.location.href = "Tela6.html"
}

function proximo(form) {
	localStorage.setItem('PacienteSelecionado', sessionStorage.getItem('PacienteSelecionado'));
    var json = JSON.parse(localStorage.getItem('Pacientes'));
	for(i = 0; i < json.Paciente.Pacientes.length; i++)
	{
		if(json.Paciente.Pacientes[i].Nome == sessionStorage.getItem("PacienteSelecionado"))
		{
			json.Paciente.Pacientes[i].TelaAtual = 8;
			var ls = JSON.stringify(json);
			localStorage.setItem('Pacientes', ls);
			salvar();
			form.action = "Tela8.html";
			break;
		}
	}
}




