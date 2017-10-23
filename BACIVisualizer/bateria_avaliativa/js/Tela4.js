function carregar_dados()
{
	checar_paciente();
	var json = JSON.parse(localStorage.getItem("Pacientes"));
	for(i = 0; i < json.Paciente.Pacientes.length; i++)
	{
		if(json.Paciente.Pacientes[i].Nome == sessionStorage.getItem("PacienteSelecionado"))
		{
			if(!json.Paciente.Pacientes[i].hasOwnProperty("Tela4"))
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
	json.Paciente.Pacientes[i].Tela4 = {};
	json.Paciente.Pacientes[i].Tela4.banho = "";
	json.Paciente.Pacientes[i].Tela4.vestir = "";
	json.Paciente.Pacientes[i].Tela4.comer = "";
	json.Paciente.Pacientes[i].Tela4.tomarMedicacao = "";
	json.Paciente.Pacientes[i].Tela4.locomover = "";
	json.Paciente.Pacientes[i].Tela4.sairCasa = "";
	json.Paciente.Pacientes[i].Tela4.prepararRefeicao = "";
	json.Paciente.Pacientes[i].Tela4.compras = "";
	json.Paciente.Pacientes[i].Tela4.financeiros = "";
	json.Paciente.Pacientes[i].Tela4.obrigacoesDiariaCasa = "";
	json.Paciente.Pacientes[i].Tela4.obrigacoesDiariaFora = "";
	json.Paciente.Pacientes[i].Tela4.obrigacoesDiariaCasaText = "";
	json.Paciente.Pacientes[i].Tela4.obrigacoesDiariaForaText = "";
	
	var ls = JSON.stringify(json);
	console.log(json);
	localStorage.setItem("Pacientes", ls);
}

function carregar_paciente(json, i) {
	
	var allRadio = document.getElementsByTagName('input');
	for(j = 0; j < allRadio.length; j++)
	{
		if(allRadio[j].type == 'radio' && json.Paciente.Pacientes[i].Tela4[allRadio[j].name] != "")
		{
			document.getElementById(json.Paciente.Pacientes[i].Tela4[allRadio[j].name]).checked = true;
		}
	}
	
	document.getElementById("obrigacoesDiariaCasaText").value = json.Paciente.Pacientes[i].Tela4.obrigacoesDiariaCasaText;
	document.getElementById("obrigacoesDiariaForaText").value = json.Paciente.Pacientes[i].Tela4.obrigacoesDiariaForaText;
	

	if(json.Paciente.Pacientes[i].Tela4.obrigacoesDiariaCasa == "obrigacoesDiariaCasaSim")
		show("obrigacoesCasaDescricao");


	if(json.Paciente.Pacientes[i].Tela4.obrigacoesDiariaFora == 'obrigacoesDiariaForaSim')
		show('obrigacoesForaDescricao');
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
			json.Paciente.Pacientes[i].Tela4.obrigacoesDiariaCasaText = document.getElementById('obrigacoesDiariaCasaText').value;
			json.Paciente.Pacientes[i].Tela4.obrigacoesDiariaForaText = document.getElementById('obrigacoesDiariaForaText').value;
			var allRadio = document.getElementsByTagName('input');
			for(j = 0; j < allRadio.length; j++)
			{
				if(allRadio[j].type == 'radio' && allRadio[j].checked == true)
				{
					json.Paciente.Pacientes[i].Tela4[allRadio[j].name] = allRadio[j].value;
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
		window.location.href = "Tela3.html"
}

function proximo(form) {
	localStorage.setItem('PacienteSelecionado', sessionStorage.getItem('PacienteSelecionado'));
    var json = JSON.parse(localStorage.getItem('Pacientes'));
	for(i = 0; i < json.Paciente.Pacientes.length; i++)
	{
		if(json.Paciente.Pacientes[i].Nome == sessionStorage.getItem("PacienteSelecionado"))
		{
			json.Paciente.Pacientes[i].TelaAtual = 5;
			var ls = JSON.stringify(json);
			localStorage.setItem('Pacientes', ls);
			salvar();
			form.action = "Tela5.html";
			break;
		}
	}
}

function show(id)
{	
	document.getElementById(id).style.display = "block";
}

function hide(id)
{
	document.getElementById(id).style.display = "none";
}
