function addGoal() {
	
	let formEntry = prompt('enter updated goals');	
	
	if(formEntry == null || formEntry == "" ){
		alert("You did not enter a new goal");
	}
	else{
		var ul = document.getElementById("dynamic-list");
		var li = document.createElement("li");
		alert(formEntry + " added");
		var id = formEntry.replace(" ", "-").toLowerCase();
		li.setAttribute('id', id);
		li.appendChild(document.createTextNode(formEntry));
		ul.appendChild(li);
	}
}

function removeGoal() {
	var ul = document.getElementById("dynamic-list");
	let formEntry = prompt('Enter the full name goal you wish to remove');	
	var toDelete = document.getElementById(formEntry.replace(" ", "-").toLowerCase());
	if(toDelete == null){
		alert("Goal does not exist");
	}
	else{
		ul.removeChild(toDelete);
		alert("Goal deleted");

	}
}
