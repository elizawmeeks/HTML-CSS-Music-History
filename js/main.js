console.log("hihi");
// Event Listeners to show and hide pages using Floating Action Button, and to add music
	// Event Listener Variables
let addMusic = document.getElementById("addMusic");
let viewMusic = document.getElementById("viewMusic");
let profile = document.getElementById("profile");
let sideNav = document.getElementById("sideNavBar");
let addMusicView = document.getElementById("addMusicView");
let listMusicView = document.getElementById("listMusicView");
var addMusicButton = document.getElementById("btn-addMusic");

	// Event Listeners themselves
		// FAB Event Listeners
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

		// Add Music Event Listener

// Displaying Songs
	// Variable to load JSON file
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
	// Event Listener for add music button, the function has to exist inside the dataRequestComplete function so that it has access to the data we're getting from the XHR. Stop moving it out! It doesn't work!
	addMusicButton.addEventListener("click", function(event){
		console.log("you clicked the button");
		console.log("dataRequest", data);
			// variables to add stuff to the object:
		var addSong = document.getElementById("song");
		var addAlbum = document.getElementById("album");
		var addArtist = document.getElementById("artist");
		var reportChange = document.getElementById("add-music-change");
		var userArtist = addArtist.value;
		var userAlbum = addAlbum.value;
		var userSong = addSong.value;
			for (var i = 0; i < data.artist.length; i++){
				// console.log("artist name: ", data.artist[i].name);
				for (var j = 0; j < data.artist[i].albums.length; j++){
					// console.log("album name: ", data.artist[i].albums[j].album_name);
					for (var k = 0; k < data.artist[i].albums[j].songs.length; k++){
						// console.log("song name: ", data.artist[i].albums[j].songs[k])
						// 1st if statement: If artist, song, and album are all in the object, break. No need to add.
						// 2nd if statement (else if): If artist and album are in the object, just add the song to the songs array.
						// 3rd if statement (else if): if Artist is in the object, add a new album and a song to the album.
						// If none of the user submitted information is in the object, add them all in.
						if (userArtist === data.artist[i].name && userAlbum === data.artist[i].albums[j].album_name && userSong === data.artist[i].albums[j].songs[k]){
							console.log("Stop the trian, this song's already in the album");
							reportChange.innerHTML = "This song is already in our library";
							break;
						} else if (userArtist === data.artist[i].name && userAlbum === data.artist[i].albums[j].album_name){
							let n = data.artist[i].albums[j].songs.length;
							data.artist[i].albums[j].songs[n] = userSong;
							console.log("new song, old album: ", data.artist[i].albums[j].songs[n], "data: ", data);
							reportChange.innerHTML = "Your song has been added to the library";
							break;
						} else if (userArtist === data.artist[i].name){
							let l = data.artist[i].albums.length;
							data.artist[i].albums[l] = [];
							data.artist[i].albums[l].album_name = userAlbum;
							console.log("new album: ", data.artist[i].albums[l].album_name);
							data.artist[i].albums[l].songs = [];
							let m = data.artist[i].albums[l].songs.length;
							data.artist[i].albums[l].songs[m] = userSong;
							console.log("new song: ", data.artist[i].albums[l].songs[m], "data: ", data);
							reportChange.innerHTML = "Your song has been added to the library";
							break;
						}
					}
				}
			}
			//Adding new artist, album, and song. Figure out how to only add it if it wasn't add it above. As it's written here every single song makes a new array whether it's already in the object or now.
			// let n = data.artist.length;
			// data.artist[n] = {};
			// data.artist[n].name = userArtist;
			// data.artist[n].albums = [];
			// data.artist[n].albums[0] = [];
			// data.artist[n].albums[0].album_name = userAlbum;
			// data.artist[n].albums[0].songs = [];
			// let m = data.artist[n].albums[0].songs.length;
			// data.artist[i].albums[0].songs[0] = userSong;
			// console.log("new artist: ", data.artist[n].name, "new album: ", data.artist[n].albums[0].album_name, "new song: ", data.artist[n].albums[0].songs[0], "data: ", data);
			// reportChange.innerHTML = "Your song has been added to the library";
	});
}

var dataRequestFailed = (event) => console.log("Oops an error occurred while getting the data");

	// Getting the JSON file
dataRequest.open("GET", "songs.json");
dataRequest.send();

	// Function that randomly selects which songs will appear in the List Music View. I did a cool thing!
function showData (music){
	var write = document.getElementById("listMusicView");
	var songOutput = "";
	for (var i = 0; i < 4; i++){
			var h = Math.floor((Math.random() * music.artist.length));
			var artistName = music.artist[h].name;
			var genre = music.artist[h].genre;
			var j = Math.floor((Math.random() * music.artist[h].albums.length));
			var k = Math.floor((Math.random() * music.artist[h].albums[j].songs.length));
			// This console log just shows the random numbers.
			console.log("artist h", h, "Album j", j, "songs k", k);
			var albumName = music.artist[h].albums[j].album_name;
			var songName = music.artist[h].albums[j].songs[k];
		songOutput += 	`<div class="row">
							<div class="col s12">
								<h2>${songName}</h2>
								<p> ${artistName} <span class="pink-text">|</span> ${albumName} <span class="pink-text">|</span> ${genre}</p>
							</div>
						</div>`;
	}

	write.innerHTML += songOutput;
}

// Add Music Functionality


	// Reference to add stuff to json object:

	// // for(i=4; i<=8; i++){
	// //     var newUser = "user" + i;
	// //     var newValue = "value" + i;
	// //     jsonObj.members.viewers[newUser] = newValue ;

	// // }

	// // console.log(jsonObj);