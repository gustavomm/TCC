function show(id)
{
	
	document.getElementById("uso").style.display = "block";
	document.getElementById(id).style.display = "block";
	
}

function hide(id)
{
	document.getElementById(id).style.display = "none";
	
}

function carregar_dados()
{
	checar_paciente();
	var json = JSON.parse(localStorage.getItem("Pacientes"));
	for(i = 0; i < json.Paciente.Pacientes.length; i++)
	{
		if(json.Paciente.Pacientes[i].Nome == sessionStorage.getItem("PacienteSelecionado"))
		{
			if(!json.Paciente.Pacientes[i].hasOwnProperty("Tela3"))
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
	json.Paciente.Pacientes[i].Tela3 = {};
	json.Paciente.Pacientes[i].Tela3.motivo = "";
	json.Paciente.Pacientes[i].Tela3.descricaoSintomas = "";
	json.Paciente.Pacientes[i].Tela3.sintomas = "";
	json.Paciente.Pacientes[i].Tela3.perceberSintomas = "";
	json.Paciente.Pacientes[i].Tela3.inicio = "";
	json.Paciente.Pacientes[i].Tela3.variedadeSintoma = "";
	json.Paciente.Pacientes[i].Tela3.medicamento = "";
	json.Paciente.Pacientes[i].Tela3.usoContinuo = "";
	json.Paciente.Pacientes[i].Tela3.quaisMedicamentos = "";
	json.Paciente.Pacientes[i].Flag = 1;
	
	var ls = JSON.stringify(json);
	console.log(json);
	localStorage.setItem("Pacientes", ls);
}

function carregar_paciente(json, i, nome) {
	var allRadio = document.getElementsByTagName('input');
	for(j = 0; j < allRadio.length; j++)
	{
		if(allRadio[j].type == 'radio' && json.Paciente.Pacientes[i].Tela3[allRadio[j].name] != "")
		{
			document.getElementById(json.Paciente.Pacientes[i].Tela3[allRadio[j].name]).checked = true;
		}
	}
	
	document.getElementById("descricaoSintomas").value = json.Paciente.Pacientes[i].Tela3.descricaoSintomas;
	document.getElementById("perceberSintomas").value = json.Paciente.Pacientes[i].Tela3.perceberSintomas;
	document.getElementById("quaisMedicamentos").value = json.Paciente.Pacientes[i].Tela3.quaisMedicamentos;
	

	if(json.Paciente.Pacientes[i].Tela3.medicamento == "medicamentoSim")
		show("usoContinuo");


	if(json.Paciente.Pacientes[i].Tela3.usoContinuo == 'continuoSim')
		show('usoMedicamentos');
		
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
			json.Paciente.Pacientes[i].Tela3.perceberSintomas = document.getElementById("perceberSintomas").value;
			json.Paciente.Pacientes[i].Tela3.descricaoSintomas = document.getElementById("descricaoSintomas").value;
			json.Paciente.Pacientes[i].Tela3.quaisMedicamentos = document.getElementById("quaisMedicamentos").value;

			var allRadio = document.getElementsByTagName('input');
			for(j = 0; j < allRadio.length; j++)
			{
				if(allRadio[j].type == 'radio' && allRadio[j].checked == true)
				{
					json.Paciente.Pacientes[i].Tela3[allRadio[j].name] = allRadio[j].value;
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
		window.location.href = "Tela2.html"
}

function proximo(form) {
	localStorage.setItem('PacienteSelecionado', sessionStorage.getItem('PacienteSelecionado'));
    var json = JSON.parse(localStorage.getItem('Pacientes'));
	for(i = 0; i < json.Paciente.Pacientes.length; i++)
	{
		if(json.Paciente.Pacientes[i].Nome == sessionStorage.getItem("PacienteSelecionado"))
		{
			json.Paciente.Pacientes[i].TelaAtual = 4;
			var ls = JSON.stringify(json);
			localStorage.setItem('Pacientes', ls);
			salvar();
			form.action = "Tela4.html";
			break;
		}
	}
}


