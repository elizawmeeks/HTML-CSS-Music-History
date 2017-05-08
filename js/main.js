console.log("hihi");
// Event Listeners to show and hide pages using Floating Action Button, and to add music
var write = document.getElementById("listMusicView");
	// Event Listener Variables
let profile = $("#profile")[0];
let sideNav = $("#sideNavBar")[0];
let addMusicView = $("#addMusicView")[0];
let listMusicView = $("#listMusicView")[0];

	// Event Listeners themselves
		// Floating Action Button Event Listeners
			// Switch to Add Music View
$("#addMusic").click(function(event){
	addMusicView.classList.remove("hidden");
	listMusicView.classList.add("hidden");
	sideNav.classList.add("hidden");

});
			// Switch to Music List View
$("#viewMusic").click(function(event){
	listMusicView.classList.remove("hidden");
	addMusicView.classList.add("hidden");
	sideNav.classList.remove("hidden");
});

		// Add Music Event Listener

// Displaying Songs
	// Pagination Variables
var btn1 = $("#btn1")[0];
var btn2 = $("#btn2")[0];
var btn3 = $("#btn3")[0];
var btn4 = $("#btn4")[0];
var leftChevron = $("#leftChevron")[0];
var rightChevron = $("#rightChevron")[0];
	// Load Music List View 1
	// Variable to load JSON file
$.ajax({
	url: "json/songs.json"
}).done(dataRequestComplete);

	// Functions tied to Event Listeners
function dataRequestComplete(data){
	console.log("The file has loaded");
	console.log("The data is: ", data);
			// Adding "" to write.innerHTML makes it so the songs don't add to the bottom, but actually replace the songs. It was getting too long and unwieldy.
	write.innerHTML = "";
	showData(data);
	// Event Listener for add music button, the function has to exist inside the dataRequestComplete function so that it has access to the data we're getting from the XHR. Stop moving it out! It doesn't work!
	$("#btn-addMusic").click(function(event){
		console.log("you clicked the button");
		console.log("dataRequest", data);
			// variables to add stuff to the object:
		var reportChange = $("#add-music-change")[0];
		var userArtist = $("#artist")[0].value;
		var userAlbum = $("#album")[0].value;
		var userSong = $("#song")[0].value;
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

	// Music List View 4 Inside an event listener when you click the "2" button.
$("#btn1").click(function(){
		// Changing Pagination navigation styling
	btn1.classList.remove("waves-effect");
	btn1.classList.add("active");
	btn2.classList.remove("active");
	btn2.classList.add("waves-effect");
	btn3.classList.remove("active");
	btn3.classList.add("waves-effect");
	btn4.classList.remove("active");
	btn4.classList.add("waves-effect");
	leftChevron.classList.add("disabled");
	rightChevron.classList.remove("disabled");

	$.ajax({
		url: "json/songs.json"
	}).done(dataRequestComplete);
});

	// Music List View 2 Inside an event listener when you click the "2" button.
$("#btn2").click(function(){
		// Changing Pagination navigation styling
	btn1.classList.remove("active");
	btn1.classList.add("waves-effect");
	btn2.classList.remove("waves-effect");
	btn2.classList.add("active");
	btn3.classList.remove("active");
	btn3.classList.add("waves-effect");
	btn4.classList.remove("active");
	btn4.classList.add("waves-effect");
	leftChevron.classList.remove("disabled");
	rightChevron.classList.remove("disabled");
	$.ajax({
		url: "json/songs2.json"
	}).done(dRSongs2Complete);
		// Functions tied to Event Listeners
	function dRSongs2Complete(data){
		console.log("The data is: ", data);
			// Adding "" to write.innerHTML makes it so the songs don't add to the bottom, but actually replace the songs. It was getting too long and unwieldy.
		write.innerHTML = "";
		showData(data);
	}
});

	// Music List View 3 Inside an event listener when you click the "2" button.
$("#btn3").click(function(){
		// Changing Pagination navigation styling
	btn1.classList.remove("active");
	btn1.classList.add("waves-effect");
	btn2.classList.remove("active");
	btn2.classList.add("waves-effect");
	btn3.classList.remove("waves-effect");
	btn3.classList.add("active");
	btn4.classList.remove("active");
	btn4.classList.add("waves-effect");
	leftChevron.classList.remove("disabled");
	rightChevron.classList.remove("disabled");
	$.ajax({
		url: "json/songs3.json"
	}).done(dRSongs3Complete);

		// Functions tied to Event Listeners
	function dRSongs3Complete(data){
		console.log("The data is: ", data);
			// Adding "" to write.innerHTML makes it so the songs don't add to the bottom, but actually replace the songs. It was getting too long and unwieldy.
		write.innerHTML = "";
		showData(data);
	}
});

	// Music List View 4 Inside an event listener when you click the "2" button.
$("#btn4").click(function(){
		// Changing Pagination navigation styling
	btn1.classList.remove("active");
	btn1.classList.add("waves-effect");
	btn2.classList.remove("active");
	btn2.classList.add("waves-effect");
	btn3.classList.remove("active");
	btn3.classList.add("waves-effect");
	btn4.classList.remove("waves-effect");
	btn4.classList.add("active");
	leftChevron.classList.remove("disabled");
	rightChevron.classList.add("disabled");
	$.ajax({
		url:"json/songs4.json"
	}).done(dRSongs4Complete);
		// Functions tied to Event Listeners
	function dRSongs4Complete(data){
		console.log("The data is: ", data);
			// Adding "" to write.innerHTML makes it so the songs don't add to the bottom, but actually replace the songs. It was getting too long and unwieldy.
		write.innerHTML = "";
		showData(data);
	}
});

function showData (music){
	var songOutput = "";
	console.log("artist name: ", music.artist[0].genre);
	for (var i = 0; i < music.artist.length; i++){
		var artistName = music.artist[i].name;
		var genre = music.artist[i].genre;
		for (var j = 0; j < music.artist[i].albums.length; j++){
			var albumName = music.artist[i].albums[j].album_name;
			for (var k = 0; k < music.artist[i].albums[j].songs.length; k++){
				var songName = music.artist[i].albums[j].songs[k];
				songOutput += 	`<div class="deleteme">
									<div class="row">
									<div class="col s10">
										<h2>${songName}</h2>
										<p> ${artistName} <span class="pink-text">|</span> ${albumName} <span class="pink-text">|</span> ${genre}</p>
									</div>
									<div class="col s2">
										<button>Delete</button>
									</div>
								</div>
								</div>`;
			}
		}
	}
	write.innerHTML += songOutput;
	var deleteButton = $("button");
	for (var i = 0; i < deleteButton.length; i++){
		deleteButton[i].addEventListener("click", function(event){
			console.log("You clicked delete!");
			var getParent = event.target.parentNode;
			var getGParent = getParent.parentNode;
			var getGGParent = getGParent.parentNode;
			// console.log("getParent", getParent);
			// console.log("getGParent", getGParent);
			// console.log("getGGParent", getGGParent);
			getGGParent.removeChild(getGParent);
		})
	};
}

	// Defunct function that randomly selects which songs will appear in the List Music View. I did a cool thing, but I didn't need to so I'm commenting it out. *weeps*

		// function showData (music){
		// 	var write = document.getElementById("listMusicView");
		// 	var songOutput = "";
		// 	for (var i = 0; i < 4; i++){
		// 			var h = Math.floor((Math.random() * music.artist.length));
		// 			var artistName = music.artist[h].name;
		// 			var genre = music.artist[h].genre;
		// 			var j = Math.floor((Math.random() * music.artist[h].albums.length));
		// 			var k = Math.floor((Math.random() * music.artist[h].albums[j].songs.length));
		// 			// This console log just shows the random numbers.
		// 			console.log("artist h", h, "Album j", j, "songs k", k);
		// 			var albumName = music.artist[h].albums[j].album_name;
		// 			var songName = music.artist[h].albums[j].songs[k];
		// 		songOutput += 	`<div class="row">
		// 							<div class="col s12">
		// 								<h2>${songName}</h2>
		// 								<p> ${artistName} <span class="pink-text">|</span> ${albumName} <span class="pink-text">|</span> ${genre}</p>
		// 							</div>
		// 						</div>`;
		// 	}

		// 	write.innerHTML += songOutput;
		// }