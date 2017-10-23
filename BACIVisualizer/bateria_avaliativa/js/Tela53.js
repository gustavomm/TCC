var images = [];
images[0] = "../images/Memoria/dado.png";
images[1] = "../images/Memoria/violao.png";
images[2] = "../images/Memoria/gude.png";
images[3] = "../images/Memoria/flor.png";
images[4] = "../images/Memoria/batom.png";
images[5] = "../images/Memoria/prato.png";
images[6] = "../images/Memoria/pincel.png";
images[7] = "../images/Memoria/coelho.png";
images[8] = "../images/Memoria/gato.png";
images[9] = "../images/Memoria/vaso.png";

var i = 1;
var begin = 4000;
function renew() {
	document.getElementById("comecar").disabled = true;
	document.getElementById("comecar").innerHTML = "Espere 4 segundos: " + 9;
	var interval = setInterval(function()
	{
		if(images.length == i){
			document.getElementById("imageId").src = images[0];
			i = 1;
			document.getElementById("comecar").disabled = false;
			document.getElementById("comecar").innerHTML = "Começar";
			clearInterval(interval);
		}
		else {
		document.getElementById("comecar").disabled = true;
		var val = 9 - i;
		document.getElementById("comecar").innerHTML = "Espere 4 segundos: " + val;
		document.getElementById("imageId").style.visibility = 'visible';
		document.getElementById("imageId").src = images[i]; 
		i++;
		}
	},4000);
}

function carregar_dados()
{
	checar_paciente();
	
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


function salvar_sair()
{
	alert('As informacoes foram salvas');
	window.location.href = "paciente.html";
}


function voltar()
{
		localStorage.setItem("PacienteSelecionado", sessionStorage.getItem('PacienteSelecionado'));	
		window.location.href = "Tela52.html"
}

function proximo(form) {
	localStorage.setItem('PacienteSelecionado', sessionStorage.getItem('PacienteSelecionado'));
    var json = JSON.parse(localStorage.getItem('Pacientes'));
	for(i = 0; i < json.Paciente.Pacientes.length; i++)
	{
		if(json.Paciente.Pacientes[i].Nome == sessionStorage.getItem("PacienteSelecionado"))
		{
			if(json.Paciente.Pacientes[i].TelaAtual < 54)
				json.Paciente.Pacientes[i].TelaAtual = 54;
			var ls = JSON.stringify(json);
			localStorage.setItem('Pacientes', ls);
			form.action = "Tela54.html";
			break;
		}
	}
}
