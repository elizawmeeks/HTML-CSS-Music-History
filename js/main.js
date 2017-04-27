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
	showData(data);
}

var dataRequestFailed = (event) => console.log("Oops an error occurred while getting the data");


dataRequest.open("GET", "songs.json");
dataRequest.send();

function showData (songs){
	var write = document.getElementById("listMusicView");
	var songOutput = "";
	for (var i = 0; i < songs.artist.length; i++){
			var artistName = songs.artist[i].name;
			var genre = songs.artist[i].genre;
			var j = Math.floor((Math.random() * songs.artist[i].albums.length));
			var k = Math.floor((Math.random() * songs.artist[i].albums[j].songs.length));
			console.log("j", j)
			var albumName = songs.artist[i].albums[j].album_name;
			var songName = songs.artist[i].albums[j].songs[k];
		songOutput += 	`<div class="row">
							<div class="col s12">
								<h2>${songName}</h2>
								<p> ${artistName} <span class="pink-text">|</span> ${albumName} <span class="pink-text">|</span> ${genre}</p>
							</div>
						</div>`;
	}
	// for (prop in songs){
	// 	var x = songs[prop];
	// 	songOutput += x;
	// }

	write.innerHTML += songOutput;
}

