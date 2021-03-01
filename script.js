var myViewFinderArray = new Array();
var theArtist = ["Frans Van Heerden", "Pixabay", "Pixabay", "Pixabay", "Daniela Vaelarde"];
var years = [`2018`, `2012`, `2016`, `2011`, `2019`];
var themPics = ["derp.jpg", "duck.jpg", "flam.jpg", "hum.jpg", "parots.jpg"];
var randomView = 0;
var onDesc = ["<h2>Look at this derpy boy.</h2>", "<h2>Flamingos are pink and adorable.</h2>", "<h2>Ducks are so cute! I love ducks.</h2>", "<h2>Humming birds are elegant beautiful creatures</h2>", "<h2>Parrots are so sweet. Look at all of their colors<h2>"];

class ViewFinder {
    constructor(title, pic, year, artist, desc) {
        this.title = title;
        this.pic = pic;
        this.year = year;
        this.artist = artist;
        this.desc = desc;
        this.extra = artist;
    }

    toString() {
        return "Title: " + this.title;
    }

    get theTitle() {
        return this.title;
    }

    get thePic() {
        return this.pic;
    }

    get theYear() {
        return this.year;
    }

    get theArtist() {
        return this.artist;
    }
    get theDesc() {
        return this.desc;
    }

    get theExtra() {
        return this.desc;
    }
}
function initalizeArray() {
    var myViewFinder = new ViewFinder("<h1>A Derp Seagull</h1>", themPics[0], onDesc[0], years[0], theArtist[0]);
    var myViewFinder1 = new ViewFinder("<h1>Flamingos</h1>", themPics[2], onDesc[1], years[2], theArtist[2]);
    var myViewFinder2 = new ViewFinder("<h1>A gaggle of ADORABLE Ducks</h1>", themPics[1], onDesc[2], years[1], theArtist[1],);
    var myViewFinder3 = new ViewFinder("<h1>A Humming Bird living its best life</h1>", themPics[3], onDesc[3], years[3], theArtist[3]);
    var myViewFinder4 = new ViewFinder("<h1>Parrots being cute</h1>", themPics[4], onDesc[4], years[4], theArtist[4]);
    myViewFinderArray.push(myViewFinder);
    myViewFinderArray.push(myViewFinder1);
    myViewFinderArray.push(myViewFinder2);
    myViewFinderArray.push(myViewFinder3);
    myViewFinderArray.push(myViewFinder4);
}

function accessInfo() {

    //console.log(myViewFinder.toString());
    //console.log(myViewFinder.theTitle);
    randomView = Math.floor(Math.random() * myViewFinderArray.length);
    document.getElementById("title").innerHTML = myViewFinderArray[randomView].theTitle;
    document.getElementById("pic").src = myViewFinderArray[randomView].thePic;
    document.getElementById("year").innerHTML = myViewFinderArray[randomView].theYear;
    document.getElementById("artist").innerHTML = myViewFinderArray[randomView].theArtist;
    document.getElementById("extra").innerHTML = myViewFinderArray[randomView].theExtra;

}

