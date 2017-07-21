

    var counter = 0;
    var wins = 0;
    var losses = 0;

    $("#scoreboard").text("Wins: " + wins + "  Losses: " + losses);

 //random number for computer
      var minNumber = 19;
      var maxNumber = 120;

      var randomNumber = randomNumberFromRange(minNumber, maxNumber);

function randomNumberFromRange(min,max) {

    return Math.floor(Math.random()*(max-min)+(min+1));
  }

    $("#number-to-guess").text(randomNumber);
  

 //random numbers for crystals    

      var counter = 0;
      var numberOptions = [1,2,3,4,5,6,7,8,9,10,11,12];

function randomOptions(numberOptions) {
  
    for (var i = numberOptions.length - 1; i > 0; i--){

        var j = Math.floor(Math.random()*(i +1));
        var temp = numberOptions[i];
        numberOptions[i] = numberOptions[j];
        numberOptions[j] = temp;          
  }
    return numberOptions;
} 
    randomOptions(numberOptions);
    

  for (var i = 11; i < numberOptions.length; i++) {

	var imageCrystal = $("<img>");
	imageCrystal.addClass("image");   //css to adjust size
	imageCrystal.attr("src", "assets/images/bigheadnb.png");  //image of crystal
	imageCrystal.attr("data-value", randomOptions(numberOptions[0]));  //value of image
	$("#images").append(imageCrystal);

  var imageCrystalTwo = $("<img>");
  imageCrystalTwo.addClass("image");   //css to adjust size
  imageCrystalTwo.attr("src", "assets/images/bigheadnb.png");  //image of crystal
  imageCrystalTwo.attr("data-value", randomOptions(numberOptions[1]));
  $("#images").append(imageCrystalTwo);

  var imageCrystalThree = $("<img>");
  imageCrystalThree.addClass("image");   //css to adjust size
  imageCrystalThree.attr("src", "assets/images/bigheadnb.png");   //image crystal
  imageCrystalThree.attr("data-value", randomOptions(numberOptions[2]));
  $("#images").append(imageCrystalThree); 

  var imageCrystalFour = $("<img>");
  imageCrystalFour.addClass("image");   //css to adjust size
  imageCrystalFour.attr("src", "assets/images/bigheadnb.png");   //image crystal
  imageCrystalFour.attr("data-value", randomOptions(numberOptions[3]));
  $("#images").append(imageCrystalFour);

}

  $(".image").on("click", function() {

 var audio = new Audio("https://sound.peal.io/ps/audios/000/000/706/original/I_like_what_you_got.wav?1469744420");
 var audio2 = new Audio("https://sound.peal.io/ps/audios/000/000/709/original/disqualified2.wav?1469744138");
	
 var crystalvalue = ($(this).attr("data-value"));
	crystalvalue = parseInt(crystalvalue);

	counter += crystalvalue;

	$("#counter").text(counter);

	if (counter === randomNumber) {
    wins+=1;
     audio.play();
    counter=0;
    $("#scoreboard").text("Wins: " + wins + "  Losses: " + losses);
    $('#counter').text(counter); 
    randomNumber = randomNumberFromRange(minNumber, maxNumber);
    $("#number-to-guess").text(randomNumber);
    randomOptions(numberOptions);
    console.log(randomOptions(numberOptions));
    imageCrystal.attr("data-value", randomOptions(numberOptions[0]));
    imageCrystalTwo.attr("data-value", randomOptions(numberOptions[1]));
    imageCrystalThree.attr("data-value", randomOptions(numberOptions[2]));
    imageCrystalFour.attr("data-value", randomOptions(numberOptions[3]));



	}

	else if (counter > randomNumber) {
    losses+=1;
    audio2.play();
    counter=0;
    $("#scoreboard").text("Wins: " + wins + "  Losses: " + losses);
    $('#counter').text(counter);
    randomNumber = randomNumberFromRange(minNumber, maxNumber);
    $("#number-to-guess").text(randomNumber);
    randomOptions(numberOptions);
    console.log(randomOptions(numberOptions));
    imageCrystal.attr("data-value", randomOptions(numberOptions[0]));
    imageCrystalTwo.attr("data-value", randomOptions(numberOptions[1]));
    imageCrystalThree.attr("data-value", randomOptions(numberOptions[2]));
    imageCrystalFour.attr("data-value", randomOptions(numberOptions[3]));
  

	}

});

