function carregar_dados()
{
	checar_paciente();
	var json = JSON.parse(localStorage.getItem("Pacientes"));
	for(i = 0; i < json.Paciente.Pacientes.length; i++)
	{
		if(json.Paciente.Pacientes[i].Nome == sessionStorage.getItem("PacienteSelecionado"))
		{
			if(!json.Paciente.Pacientes[i].hasOwnProperty("Tela10"))
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
	json.Paciente.Pacientes[i].Tela10 = {};
	json.Paciente.Pacientes[i].Tela10.infeliz = "";
	json.Paciente.Pacientes[i].Tela10.tolerar = "";
	json.Paciente.Pacientes[i].Tela10.companhia = "";
	json.Paciente.Pacientes[i].Tela10.compreende = "";
	json.Paciente.Pacientes[i].Tela10.esperando = "";
	json.Paciente.Pacientes[i].Tela10.recorrer = "";
	json.Paciente.Pacientes[i].Tela10.proximoNinguem = "";
	json.Paciente.Pacientes[i].Tela10.rodeiam = "";
	json.Paciente.Pacientes[i].Tela10.excluido = "";
	json.Paciente.Pacientes[i].Tela10.sozinho = "";
	json.Paciente.Pacientes[i].Tela10.comunicar = "";
	json.Paciente.Pacientes[i].Tela10.superficiais = "";
	json.Paciente.Pacientes[i].Tela10.carente = "";
	json.Paciente.Pacientes[i].Tela10.conhece = "";
	json.Paciente.Pacientes[i].Tela10.isolado = "";
	json.Paciente.Pacientes[i].Tela10.infelizExcluindo = "";
	json.Paciente.Pacientes[i].Tela10.amigos = "";
	json.Paciente.Pacientes[i].Tela10.bloqueado = "";
	json.Paciente.Pacientes[i].Tela10.redor = "";
	json.Paciente.Pacientes[i].Tela10.atividades = "";
	
	var ls = JSON.stringify(json);
	console.log(json);
	localStorage.setItem("Pacientes", ls);
}

function carregar_paciente(json, i) {
	
	//document.getElementById(json.Paciente.Pacientes[i].Tela10["ex1"]).checked = true;
	Object.keys(json.Paciente.Pacientes[i].Tela10).forEach(function(nome) {		
		if(json.Paciente.Pacientes[i].Tela10[nome] != "")
			document.getElementById(json.Paciente.Pacientes[i].Tela10[nome]).checked = true;
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
					json.Paciente.Pacientes[i].Tela10[allChecks[j].name] = allChecks[j].getAttribute('id');
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
		window.location.href = "Tela9.html"
}

function proximo(form) {
	localStorage.setItem('PacienteSelecionado', sessionStorage.getItem('PacienteSelecionado'));
    var json = JSON.parse(localStorage.getItem('Pacientes'));
	for(i = 0; i < json.Paciente.Pacientes.length; i++)
	{
		if(json.Paciente.Pacientes[i].Nome == sessionStorage.getItem("PacienteSelecionado"))
		{
			json.Paciente.Pacientes[i].TelaAtual = 11;
			var ls = JSON.stringify(json);
			localStorage.setItem('Pacientes', ls);
			salvar();
			form.action = "Tela11.html";
			break;
		}
	}
}


function atualizarPontos(nome, valor)
{
	var a;
	 a = document.getElementById(nome);
	var b = document.getElementById(valor);
	 b.value = a.value;
	
	atualizarPontoGeral();
	
}

function atualizarPontoGeral() {
  
  var valor = 0;
  var i;
  var inputs = document.getElementsByTagName("input");
  
  for (i=0; i<inputs.length; i++) {
    if ((inputs[i].type) == "radio") {
		
      if(inputs[i].id != "pontos")
	  {
		  
			valor = valor + parseInt(inputs[i].value);
	  }
    }
  }
  
  document.getElementById("pontos").value = valor;
}