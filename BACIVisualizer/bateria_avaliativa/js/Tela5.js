function carregar_dados()
{
	checar_paciente();
	
	var json = JSON.parse(localStorage.getItem("Pacientes"));
	for(i = 0; i < json.Paciente.Pacientes.length; i++)
	{
		if(json.Paciente.Pacientes[i].Nome == sessionStorage.getItem("PacienteSelecionado"))
		{
			if(!json.Paciente.Pacientes[i].hasOwnProperty("Tela5"))
			{
				primera_vez(json, i, json.Paciente.Pacientes[i].Nome);
			}
			else{
				carregar_paciente(json, i ,sessionStorage.getItem("PacienteSelecionado"));
			}
		}
	}
	calcular_orientacao();
	calcular_atencao();
	calcular_linguagem()
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
	json.Paciente.Pacientes[i].Tela5 = {};
	json.Paciente.Pacientes[i].Tela5.diaSemana = "";
	json.Paciente.Pacientes[i].Tela5.diaMes = "";
	json.Paciente.Pacientes[i].Tela5.ano = "";
	json.Paciente.Pacientes[i].Tela5.horas = "";
	json.Paciente.Pacientes[i].Tela5.ondeEstamos = "";
	json.Paciente.Pacientes[i].Tela5.local = "";
	json.Paciente.Pacientes[i].Tela5.instituicao = "";
	json.Paciente.Pacientes[i].Tela5.bairro = "";
	json.Paciente.Pacientes[i].Tela5.cidade = "";
	json.Paciente.Pacientes[i].Tela5.estado = "";
	json.Paciente.Pacientes[i].Tela5.totalAcerto = "";
	json.Paciente.Pacientes[i].Tela5.calc1 = "";
	json.Paciente.Pacientes[i].Tela5.calc2 = "";
	json.Paciente.Pacientes[i].Tela5.calc3 = "";
	json.Paciente.Pacientes[i].Tela5.calc4 = "";
	json.Paciente.Pacientes[i].Tela5.calc5 = "";
	json.Paciente.Pacientes[i].Tela5.memoria = "";
	json.Paciente.Pacientes[i].Tela5.lapis = "";
	json.Paciente.Pacientes[i].Tela5.relogio = "";
	json.Paciente.Pacientes[i].Tela5.frase = "";
	json.Paciente.Pacientes[i].Tela5.papel = "";
	
	var ls = JSON.stringify(json);
	console.log(json);
	localStorage.setItem("Pacientes", ls);
}

function carregar_paciente(json, i, nome) {
	
	Object.keys(json.Paciente.Pacientes[0].Tela5).forEach(function(nome) {		
		if(json.Paciente.Pacientes[i].Tela5[nome] != "")
			document.getElementById(json.Paciente.Pacientes[i].Tela5[nome]).checked = true;
	})
	if(json.Paciente.Pacientes[i].Tela5.totalAcerto != "")
		document.getElementById("totalAcerto").value = json.Paciente.Pacientes[i].Tela5.totalAcerto;
	
	if(json.Paciente.Pacientes[i].Tela5.memoria != "")
		document.getElementById("memoria").value = json.Paciente.Pacientes[i].Tela5.memoria;
	
	if(json.Paciente.Pacientes[i].Tela5.papel != "")
		document.getElementById("papel").value = json.Paciente.Pacientes[i].Tela5.papel;
	
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
				
				json.Paciente.Pacientes[j].Tela5.totalAcerto = document.getElementById("totalAcerto").options[document.getElementById("totalAcerto").selectedIndex].value;
			
				json.Paciente.Pacientes[j].Tela5.memoria = document.getElementById("memoria").options[document.getElementById("memoria").selectedIndex].value;
			
				json.Paciente.Pacientes[j].Tela5.papel = document.getElementById("papel").options[document.getElementById("papel").selectedIndex].value;
			
			for(i = 0; i < json.Paciente.Pacientes.length; i++)
			{
				if(json.Paciente.Pacientes[i].Nome == sessionStorage.getItem("PacienteSelecionado"))
				{
					var allRadio = document.getElementsByTagName('input');
					for(j = 0; j < allRadio.length; j++)
					{
						if(allRadio[j].type == 'radio' && allRadio[j].checked == true)
						{
							json.Paciente.Pacientes[i].Tela5[allRadio[j].name] = allRadio[j].value;
						}
					}
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
		window.location.href = "Tela4.html"
}

function proximo(form) {
	localStorage.setItem('PacienteSelecionado', sessionStorage.getItem('PacienteSelecionado'));
    var json = JSON.parse(localStorage.getItem('Pacientes'));
	for(i = 0; i < json.Paciente.Pacientes.length; i++)
	{
		if(json.Paciente.Pacientes[i].Nome == sessionStorage.getItem("PacienteSelecionado"))
		{
			json.Paciente.Pacientes[i].TelaAtual = 6;
			var ls = JSON.stringify(json);
			localStorage.setItem('Pacientes', ls);
			salvar();
			form.action = "Tela6.html";
			break;
		}
	}
}

function calcular_orientacao()
{
	var allRadio = document.getElementsByTagName('input');
	var total = 0;
	for(j = 0; j < allRadio.length; j++)
	{
		if(allRadio[j].type == 'radio' && allRadio[j].checked == true)
		{
				if(allRadio[j].id == "semanaSim" ) total++;
				if(allRadio[j].id == "mesSim" ) total++;
				if(allRadio[j].id == "anoSim" ) total++;
				if(allRadio[j].id == "horasSim" ) total++;
				if(allRadio[j].id == "ondeSim" ) total++;
				if(allRadio[j].id == "localSim" ) total++;
				if(allRadio[j].id == "instSim" ) total++;
				if(allRadio[j].id == "bairroSim" ) total++;
				if(allRadio[j].id == "cidadeSim" ) total++;
				if(allRadio[j].id == "estadoSim" ) total++;
		}
	}
	
	document.getElementById('orientacao').innerHTML = "Pontuação na Orientação Espaço e Tempo = " + total + "/10";
}

function calcular_atencao()
{
	var allRadio = document.getElementsByTagName('input');
	var total = 0;
	for(j = 0; j < allRadio.length; j++)
	{
		if(allRadio[j].type == 'radio' && allRadio[j].checked == true)
		{
				if(allRadio[j].id == "calc1Sim" ) total++;
				if(allRadio[j].id == "calc2Sim" ) total++;
				if(allRadio[j].id == "calc3Sim" ) total++;
				if(allRadio[j].id == "calc4Sim" ) total++;
				if(allRadio[j].id == "calc5Sim" ) total++;
		}
	}
	
	document.getElementById('atencao').innerHTML = "Atenção e cálculo =  " + total + "/5";
}

function calcular_linguagem()
{
	var allRadio = document.getElementsByTagName('input');
	var total = 0;
	for(j = 0; j < allRadio.length; j++)
	{
		if(allRadio[j].type == 'radio' && allRadio[j].checked == true)
		{
				if(allRadio[j].id == "lapisSim" ) total++;
				if(allRadio[j].id == "relogioSim" ) total++;
				if(allRadio[j].id == "fraseSim" ) total++;
		}
	}
	
	document.getElementById('linguagem').innerHTML = "Linguagem =  " + total + "/3";
}


