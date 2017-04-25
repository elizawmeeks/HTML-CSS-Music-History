console.log("hihi");

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