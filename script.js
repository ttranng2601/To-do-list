var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var delButton = document.createElement("button");
	var li = document.createElement("li");
	delButton.setAttribute("id", "del");
	li.appendChild(delButton);
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	li.onclick = doneTask;
	delButton.onclick = deleteElement;

}

function addListAfterClick(){
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeyPress(){
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function doneTask(event){
	event.target.classList.toggle("done");
}

function deleteElement(event) {
	event.target.parentNode.remove();
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeyPress);
