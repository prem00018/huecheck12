
 function showQuiz(){
    document.getElementById("page-1").style="display:none"
    document.getElementById("quiz-container").style="display:block"
 }
 function showLogin(){
    document.querySelector(".login-form").style="display:block"
    document.getElementById("register-form").style="display:none"
 }
 function register(){
    document.querySelector(".login-form").style="display:none"
    document.getElementById("register-form").style="display:block"
 }
 function showDashboard(){
    document.querySelector(".login-form").style="display:none"
    document.getElementById("dashboard").style="display:block"
 }
 let questions = [
    {
        img:"images/plate1.jpg",
        options : [12,72,"Nothing"],
        answer : 12
    },
    {
        img:"images/plate2.jpg",
        options : [3,0,8],
        answer : 8,
        Red_green_deficiency: 3
    },
    {
        img:"images/plate3.jpg",
        options : [5,6,0],
        answer : 6,
        Red_green_deficiency: 5 


    },
    {
        img:"images/plate4.jpg",
        options : [20,29,70],
        answer : 29,
        Red_green_deficiency: 70 
    },
    {
        img:"images/plate5.jpg",
        options : [35,51,57],
        answer : 57,
        Red_green_deficiency: 35 
    },
    {
        img:"images/plate6.jpg",
        options : [5,2,6],
        answer : 5,
        Red_green_deficiency: 2
    },
    {
        img:"images/plate7.jpg",
        options : [6,5,3],
        answer : 3,
        Red_green_deficiency: 5 
    },
    {
        img:"images/plate8.jpg",
        options : [15,17,57],
        answer : 15,
        Red_green_deficiency: 17 
    },
    {
        img:"images/plate9.jpg",
        options : [57,74,21],
        answer : 74,
        Red_green_deficiency: 21 

    },
    {
        img:"images/plate10.jpg",
        options : [2,5,"Nothing"],
        answer : 2,
        Red_green_deficiency: "Nothing"
    },
    {
        img:"images/plate11.jpg",
        options : ["Nothing",6,5],
        answer : 6,
        Red_green_deficiency: "Nothing"
    },
    {
        img:"images/plate12.jpg",
        options : [57,"Nothing",97],
        answer : 97,
        Red_green_deficiency:"Nothing" 
    },
    {
        img:"images/plate13.jpg",
        options : ["Nothing",45,65],
        answer : 45,
        Red_green_deficiency: "Nothing"
    },
    {
        img:"images/plate14.jpg",
        options : [5,8,"Nothing"],
        answer : 5,
        Red_green_deficiency: "Nothing"
    },
    {
        img:"images/plate15.jpg",
        options : ["Nothing",4,7],
        answer : 7,
        Red_green_deficiency: "Nothing"
    },
    {
        img:"images/plate16.jpg",
        options : [76,16,"Nothing"],
        answer : 16,
        Red_green_deficiency: "Nothing"
    },
    {
        img:"images/plate17.jpg",
        options : [73,"Nothing",28],
        answer : 73,
        Red_green_deficiency: "Nothing"
    },
    {
        img:"images/plate18.jpg",
        options : ["Nothing",5,6],
        answer : "Nothing",
        Red_green_deficiency: 5
    },
    {
        img:"images/plate19.jpg",
        options : [7,2,"Nothing"],
        answer : "Nothing",
        Red_green_deficiency: 2 
    },
    {
        img:"images/plate20.jpg",
        options : ["Nothing",45,18],
        answer : "Nothing",
        Red_green_deficiency: 45
    },
    {
        img:"images/plate21.jpg",
        options : [73,"Nothing",18],
        answer : "Nothing",
        Red_green_deficiency: 73 

    },
    {
        img:"images/plate22.jpg",
        options : [2,26,6],
        answer : 26,
        Protanopia: 6 ,
        Deuteranopia: 2
    },
    {
        img:"images/plate23.jpg",
        options : [2,4,42],
        answer : 42,
        Protanopia : 2, 
        Deuteranopia : 4 
    },
    {
        img:"images/plate24.jpg",
        options : [5,35,3],
        answer : 35,
        Protanopia : 5, 
        Deuteranopia : 3
    },
    {
        img:"images/plate25.jpg",
        options : [96,9,6],
        answer : 96,
        Protanopia : 6, 
        Deuteranopia : 9
    },
    {
        img:"images/plate26.jpg",
        options : ["Purple line","Purple and red line","Red line"],
        answer : "Purple and red line",
        Protanopia : "Purple line", 
        Deuteranopia : "Red line"
    },
    {
        img:"images/plate27.jpg",
        options : ["Red line","Purple line","Purple and red line"],
        answer : "Purple and red line",
        Protanopia :"Purple line", 
        Deuteranopia :"Red line" 
        
    },
    {
        img:"images/plate28.jpg",
        options : ["Nothing","Line",0],
        answer : "Nothing",
        Red_green_deficiency: "Line" 
    },
    {
        img:"images/plate29.jpg",
        options : ["Line",19,"Nothing"],
        answer : "Nothing",
        Red_green_deficiency: "Line"
    },
    {
        img:"images/plate30.jpg",
        options : ["Red-green line","Nothing","Blue-green line"],
        answer : "Blue-green line",
        Red_green_deficiency: "Nothing"
    },
    {
        img:"images/plate31.jpg",
        options : ["Blue-green line","Red-green line","Nothing"],
        answer : "Blue-green line",
        Red_green_deficiency: "Nothing"
    },
    {
        img:"images/plate32.jpg",
        options : ["Nothing","Orange line","Red line"],
        answer : "Orange line",
        Red_green_deficiency: "Nothing"
    },
    {
        img:"images/plate33.jpg",
        options : ["Orange line","Red line","Nothing"],
        answer : "Orange line",
        Red_green_deficiency: "Nothing" 
    },
    {
        img:"images/plate34.jpg",
        options : ["Red-green and violet line","Violet line","Blue-green and yellow-green line"],
        answer : "Blue-green and yellow-green line",
        Red_green_deficiency: " Red-green and violet line"
    },
    {
        img:"images/plate35.jpg",
        options : ["Blue-green and yellow-green line","Blue-green and Violet line","Blue line"],
        answer : "Blue-green and yellow-green line",
        Red_green_deficiency: "Blue-green and violet line"
    },
    {
        img:"images/plate36.jpg",
        options : ["Violet and orange line","Blue-green and violet line","Violet line"],
        answer : "Violet and orange line",
        Red_green_deficiency: "Blue-green and violet line" 

    },
    {
        img:"images/plate37.jpg",
        options : ["Violet line","Violet and orange line","Blue-green and violet line"],
        answer : "Violet and orange line",
        Red_green_deficiency: "Blue-green and violet line"
    },
    {
        img:"images/plate38.jpg",
        options : ["Line","Nothing","Circle"],
        answer : "Line",
    }

]

const questionImg=document.getElementById("question")
const optionContainer =document.getElementById("answer-buttons")

let questionCounter = 0
let currentQuestion;
let availableQuestions=[];
let score=0
let red_green_deficiency_score=0
let protanopia_score=0
let deuteranopia_score=0

function setAvaibleQuestions(){
    for(let i=0;i<questions.length;i++){
        availableQuestions.push(questions[i])
    }
}

function getNewQuestion(){
    const questionIndex=availableQuestions[Math.floor(Math.random()*availableQuestions.length)]
    currentQuestion=questionIndex
    questionImg.src=currentQuestion.img
    const index1=availableQuestions.indexOf(questionIndex)
    availableQuestions.splice(index1,1)
        let optionTag= `<button class="btn">${currentQuestion.options[0]}</button>
                    <button class="btn">${currentQuestion.options[1]}</button>
                    <button class="btn">${currentQuestion.options[2]}</button>`
        optionContainer.innerHTML=optionTag
        const option = document.querySelectorAll(".btn")
        for(let i=0;i<option.length;i++){
        option[i].setAttribute("onclick","getResult(this)")
    }
    questionCounter++
}
let nextBtn=document.getElementById("next-btn")
let scoreBtn=document.getElementById("score-btn")

function getResult(answer){
    let selectedOption = answer
    selectedOption.classList.add('selected')
    let userAnswer=answer.textContent
    let correctAnswer = currentQuestion.answer
    let red_green_deficiency=currentQuestion.Red_green_deficiency
    let protanopia=currentQuestion.Protanopia
    let deuteranopia=currentQuestion.Deuteranopia
    if(userAnswer==correctAnswer){
        score++
    }
    else if(userAnswer==red_green_deficiency){
        red_green_deficiency_score++
    }
    else if(userAnswer==protanopia){
        protanopia_score++
    }
    else if(userAnswer==deuteranopia){
        deuteranopia_score++
    }
    let allOptions = optionContainer.children.length
    for(let i=0;i<allOptions;i++){
        optionContainer.children[i].classList.add('disabled')
    }

}
function next() {
    const selectedOption = document.querySelector('.btn.selected');

    if (selectedOption) {
        // Clear the selected class for the next question
        selectedOption.classList.remove('selected');

        if (questionCounter === questions.length) {
            nextBtn.style.display = "none";
            scoreBtn.style.display = "block";
        } else {
            getNewQuestion();
        }
    } else {
        // Notify the user to select an option before proceeding
        alert("Please select an option before moving to the next question.");
    }
}

function showResults(){
    document.querySelector(".quiz").style.display="none"
    document.querySelector(".score-container").style.display="block"
    document.getElementById("score").innerHTML=`Score : ${score}/38`
    document.getElementById("red-green").innerHTML=`Red-Green Deficiency : ${Math.round((red_green_deficiency_score/30)*100)}%`
    document.getElementById("protanopia").innerHTML=`Protanopia : ${Math.round((protanopia_score/6)*100)}%`
    document.getElementById("deuteranopia").innerHTML=`Deuteranopia : ${Math.round((deuteranopia_score/6)*100)}%`
}
window.onload = function(){
    setAvaibleQuestions()
    getNewQuestion()
}