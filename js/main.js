var quizAnswers = [
{
	question: "What is the current name of the first U.S. college or university to admit a Black student (located in central Virginia)?",
	answer: "washington and lee"
},
{
	question: "Who was the first African American known to have graduated from a U.S. college or university (Middlebury College)?",
	answer: "twilight"
},
{
	question: "What was the first U.S. post-secondary institution to admit students regardless of race or sex (located near Cleveland, Ohio)?",
	answer: "oberlin"
},
{
	question: "Who was the first African American to earn a Ph.D. from a U.S. institution (Yale)?",
	answer: "bouchet"
},
{
	question: "What was the first Black college to grant bachelor's degrees in the U.S.(founded in 1852)?",
	answer: "lincoln"
},
{
	question: "Who was the first African American professor to hold a teaching post at a predominantly white U.S. institution? (New York Central College)?",
	answer: "reason"
},
{
	question: "On what campus was the first African American Greek letter fraternity founded (Alpha Phi Alpha)?",
	answer: "cornell"
},
{
	question: "From what institution did Dr. Kyla McMullen graduate to become it's first Black woman PhD in Computer Science (in 2012)?",
	answer: "michigan"
},
{
	question: "What was the first of the U.S. service academies to graduate an African American (Henry O. Flipper)?",
	answer: "west point"
},
{
	question: "Who, in the year 2000, became the first African American president of an Ivy Leauge institution (Brown University)?",
	answer: "simmons"
}
]
//I represents the index number of the item (in this case, the question[below])
for(i = 0; i < quizAnswers.length; i++) {
	var x = quizAnswers[i].question
	document.getElementById("question" + [i]).textContent = x
	//this prints your answer in the input box
}

function seeResults() {
	var correct = 0
	var incorrect = 0
	for(i = 0; i < quizAnswers.length; i++) {
		//this variable creates the correct answers.
		var myAnswer = quizAnswers[i].answer
		var userAnswer = document.getElementById("answer" + [i]).value.toLowerCase()
		var questionResults = document.getElementById("question" + [i])

	if (myAnswer == userAnswer) {
		questionResults.className = "correct"
		correct++
	} else {
		questionResults.className = "incorrect"
		incorrect++
	}
}
	document.getElementById("correct").textContent = "You gave " + correct + " correct answers,"
	document.getElementById("incorrect").textContent = " and you gave " + incorrect + " incorrect answers."
}