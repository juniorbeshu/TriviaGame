var questionCount = 0, correctAnswers = 0, incorrectAnswers = 0, unanswered = 0, countdown = 13;
var correct = false;
$('.results').hide();
$('#multipleChoice').hide();

// Create trivia object to hold questions
// ==================================================
var trivia = {
	"questions" : [
		{
			"question" : "What instrument does Phoebe play?",
			"answer" : "Guitar",
			"multipleChoice" : [
				"Guitar", "Piano", "Drums", "Violin", "Ukulele"
			]
		},
		{
			"question" : "What's the name of the neighbour who leaves everything to Monica and Rachel when he Dies?",
			"answer" : "Mr. Heckles",
			"multipleChoice" : [
				"Smokes a lot lady!", "They don't know his name", "Mr. Heckles", "Danny", "Mike"
			]
		},
		{
			"question" : "What word did rachel misspell on her resume?",
			"answer" : "Computer",
			"multipleChoice" : [
				"She didn't make a misspell anything", "Typing", "French", "Computer", "Word"
			]
		},
		{
			"question" : "What's the name of the dog Phoebe brought that Chandler didn't like",
			"answer" : "Clunkers",
			"multipleChoice" : [
				"Dexter", "No name", "Fluffy", "Spike", "Clunkers"
			]
		},
		{
			"question" : "What food is Ross allergic to?",
			"answer" : "Kiwi",
			"multipleChoice" : [
				"Apples", "Peanuts", "Kiwi", "Nigeria", "Eggs"
			]
		},
		{
			"question" : "What's the address Chndler gives Janice when he lies abput moving to Yemen?",
			"answer" : "15 Yemen Road, Yemen",
			"multipleChoice" : [
				"50 Yemen Road, Yemen", "Yemen", "Zimbabwe", "Botswana", "15 Yemen Road, Yemen"
			]
		},
		{
			"question" : "When Joey couldn't afford to buy the full set of encylopedias, which single volume did he buy?",
			"answer" : "V",
			"multipleChoice" : [
				"T", "O", "V", "N", "C"
			]
		},
		{
			"question" : "How many seasons does Friends have?",
			"answer" : "10",
			"multipleChoice" : [
				"8", "9", "1", "10", "20"
			]
		},
		{
			"question" : "What did Rachel think Emma's first word was",
			"answer" : "Gleeba",
			"multipleChoice" : [
				"Mama", "Gleeba", "Niger", "Mom", "Ross"
			]
		},
		{
			"question" : "Where do Ross and Phoebe along with Susan get stuk when Ben is born? ",
			"answer" : "A closet",
			"multipleChoice" : [
				"A closet", "They were with Susan", "They were locked in a car", "France", "Bathroom"
			]
		}
	]
}
		


	
	$('#triviaQuestion').hide();
	$('.choices').hide();
	$('.results').show();
	$('#correct').html("Correctly Answered " + correctAnswers);
	$('#wrong').html("Wrongly Answered " + incorrectAnswers);
	$('#unanswered').html("Unanswered " + unanswered);


	//Debugging
	console.log("Correctly answered: " + correctAnswers);
	console.log("Incorrectly answered: " + incorrectAnswers);
	console.log("Unanswered: " + unanswered);

}	


function start() {

	
	askQuestion(questionCount);
	

	counter = setInterval(countDownToNextQuestion,1000);
	
}





function askQuestion(questionCount) {
	countdown = 13;
	$('#multipleChoice').show();
	if( questionCount < 10 ) {
		console.log(trivia.questions[questionCount].question);
		$('#triviaQuestion').html(trivia.questions[questionCount].question);

		//Display multiple choices
		$('#a').html(trivia.questions[questionCount].multipleChoice[0]);
		$('#b').html(trivia.questions[questionCount].multipleChoice[1]);
		$('#c').html(trivia.questions[questionCount].multipleChoice[2]);
		$('#d').html(trivia.questions[questionCount].multipleChoice[3]);
		$('#e').html(trivia.questions[questionCount].multipleChoice[4]);
	}

	else {
		clearInterval(counter);
		results();
	}
}



function checkIfCorrect(guessed) {
	if( guessed === trivia.questions[questionCount].answer) {
		return true;
	}

	else {
		return false;
	}
}


$('.startButton').on('click', function(){
		$('.startButton').hide();
		questionCount = 0, correctAnswers = 0, incorrectAnswers = 0, unanswered = 0, countdown = 13;

		start();
});


$('.list-group-item').on('click', function(){

	if (checkIfCorrect($(this).html()) === true) {
		correctAnswers++;
		console.log(" # of Correct Answers: " + correctAnswers);
		questionCount++;
		askQuestion(questionCount);
	}

	else if (checkIfCorrect($(this).html()) === false){
		incorrectAnswers++;
		console.log(" # of Incorrect Answers: " + incorrectAnswers);
		questionCount++;
		askQuestion(questionCount);
	}
});



function countDownToNextQuestion() {
	countdown--;

	
    $('#showCountDown').html('<h4>Time Remaining: ' + countdown + ' seconds</h4>');

    .
    if (countdown === 0){

        
        clearInterval(counter);

        
        unanswered++;
        console.log(" # of Unanswered: " + unanswered);
        console.log('Time Up!')

       
        questionCount++;

       
        if ( questionCount == 10 ) {
        	clearInterval(counter);
        	results();
        }

        else {
	       
	        askQuestion(questionCount);

	       
	        countdown = 13;

	       
	        counter = setInterval(countDownToNextQuestion,1000);
        }

       

}
}