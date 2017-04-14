var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

console.log(songs);

// Add song to beginning and end

songs.push("Lost Boy > by Ruth B on the Album The Intro");
songs.unshift("Fighting Fish > by Dessa on the Album Parts of Speech");

console.log(songs);

// Loop over the array, and remove any words or characters that obviously don't
// Find and replace the > character in each item with a - character.

for (i = 0; i < songs.length; i++){
	songs[i] = songs[i].replace("*", "");
	songs[i] = songs[i].replace("@","");
	songs[i] = songs[i].replace("(","");
	songs[i] = songs[i].replace("!","");
	songs[i] = songs[i].replace(">","-");
}

console.log(songs);

// Add each string to the DOM in index.html in the main content area.

for (i = 0; i < 4; i++){
	document.getElementById("songs" + (i+1)).innerHTML = songs[i];
}
