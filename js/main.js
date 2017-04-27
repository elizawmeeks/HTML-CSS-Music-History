console.log("hihi");
// Event Listeners to show and hide pages using Floating Action Button
let addMusic = document.getElementById("addMusic");
let viewMusic = document.getElementById("viewMusic");
let profile = document.getElementById("profile");
let sideNav = document.getElementById("sideNavBar");
let addMusicView = document.getElementById("addMusicView");
let listMusicView = document.getElementById("listMusicView");


addMusic.addEventListener("click", function(event){
	addMusicView.classList.remove("hidden");
	listMusicView.classList.add("hidden");
	sideNav.classList.add("hidden");
});

viewMusic.addEventListener("click", function(event){
	listMusicView.classList.remove("hidden");
	addMusicView.classList.add("hidden");
	sideNav.classList.remove("hidden");
});

// Displaying Songs
	// Variable to load JSON Page
var dataRequest = new XMLHttpRequest();
	// Event Listeners for loading
dataRequest.addEventListener("load", dataRequestComplete);
dataRequest.addEventListener("error", dataRequestFailed);
	// Functions tied to Event Listeners
function dataRequestComplete(event){
	console.log("The file has loaded");
	var data = JSON.parse(event.target.responseText);
	console.log("The data is: ", data);
}

var dataRequestFailed = (event) => console.log("Oops an error occurred while getting the data");


dataRequest.open("GET", "songs.json");
dataRequest.send();

function showData (songs){
	var write = document.getElementById("stickItHere");
	var songOutput = "";
	for (var i = 0; i < 4, i++){
		
	}
}


// `<div class="col s12">
// 	<h2>Lost Boy</h2>
// 	<p> Ruth B <span class="pink-text">|</span> The Intro <span class="pink-text">|</span> Pop</p>
// </div>`