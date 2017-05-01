# HTML-CSS-Music-History

##NSS Exercise

## Music History 4

I have so many songs in my JSON file that I split it into 4 files. I made it load with a "more button", but it was so unwieldy that I added pagination and had the music load separately for each page. But I can do the more button!

### Directions

#### Part One

Read from local JSON file with an XHR.
Loop over results and inject into Music History list view.
Add delete button to each row and, when it is clicked, delete the entire row in the DOM.

#### Part Two

Take your music and split it into two JSON files instead of them all living on one file.
Add a button at the bottom of your music list and label it More >.
Load the songs from the first list, and inject the DOM into the document as you've already done.
When the user clicks that button, load the songs from the second JSON file and append them to the bottom of the existing music, but before the More button.

## Music History 3

I basically gave up on the instructions for music history 3 and (belatedly realized that I) kind of made up a melange of music history 3 and 4 (and also kind of didn't). Basically my version of Music History 3 created a JSON file with all of my songs, and created an XHR request to output songs onto the main page. I still kind of thought that we only wanted 4 songs on the main page, so I built a function to randomly select which songs in the object are dispalyed, which I think is kind of cool. Adding music in the Add Music View adds it to the object (you know, as long as you don't refresh the page. We're gonna learn how to permanently hold onto information like this, right?), but I had trouble getting it to format exactly the same way with objects inside of arrays. I didn't output it to the dom because with the randomizing function it wouldn't necessarily dispaly. Basically I decided that I liked the randomizing function better than outputting all the songs for the moment.

I might come back and make things align more with the instructions, but I also learned a lot and had a lot of fun which is, frankly, enough for me. I think I'm more likely to come back for Music History 4 and follow those instructions better.