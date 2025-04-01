//your JS code here. If required.
async function DelayTime(event){
	event.preventDefault();
	
	let textinput = document.getElementById("text").value;
	let outputdelay = document.getElementById("delay").value;

	let delaydisplay = parseInt(outputdelay);

	if(delaydisplay < 0){
		alert("Please enter valid delay")
		return;
	}

	await new Promise(resolve => setTimeout(resolve, delaydisplay));

	const outputDiv = document.getElementById('output');
	outputDiv.innerText = textinput;
	
}

document.getElementById('btn').addEventListener('click', DelayTime);