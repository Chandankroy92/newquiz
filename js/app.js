var lengthofobject = Object(data.quizcontent).length;
var curPage = 0;correct=0;
var myAnswers = [];
var possibleAnswers=4;
var myHeader = document.getElementById("quizHeader");
var classname = document.getElementsByClassName("answer");
var myQuestion = document.getElementById("questions");
var progressBar = document.getElementById("progressBar");
var btnNext = document.getElementById("btnNext");
var btnPrevious = document.getElementById("btnPrevious");
var btnFinish = document.getElementById("finishQuiz");
checkPage();
btnNext.addEventListener("click", moveNext);
btnPrevious.addEventListener("click", moveBack);
btnFinish.addEventListener("click",endQuiz);
for (var i = 0; i < classname.length; i++) {
  classname[i].addEventListener('click', myAnswer);
}

function myAnswer() {
  var idAnswer=this.getAttribute("data-id");
  //check for correct answers
  myAnswers[curPage]=idAnswer;
  if(data.quizcontent[curPage].correct==idAnswer){
    console.log("correct answer");
  }else {
    console.log("Wrong Answer");
  }
}

function moveNext() {
  if(myAnswers[curPage]){
    console.log('okay to proceed');

    if(curPage < (lengthofobject - 1)){
      curPage++;
      checkPage(curPage);
    }else{
      console.log(curPage + ' ' +lengthofobject);
      if (lengthofobject >= curPage) {
        endQuiz();
      }else {
        console.log("end of the quiz" +curPage);
      }
    }
  } else {
    console.log("not answered");
  }
}


function endQuiz(){
  if (myAnswers[curPage]){
    console.log('Quiz Is Over');
  }else {
     console.log("not answered");
  }
  
}

function checkPage(i) {

  if(curPage==0){
    btnPrevious.classList.add("hide");
  }else{btnPrevious.classList.remove("hide");}
  // console.log(curPage+1);

  if((curPage+1) < (lengthofobject)){
    btnNext.classList.remove("hide");
  }else{btnNext.classList.add("hide");}
  
  myHeader.innerHTML = data.quizcontent[curPage].question;
  for (var i=0;i<myQuestion.children.length;i++) {
    var curNode = myQuestion.children[i];
    console.log(curNode.childNodes)
    curNode.childNodes[0].innerHTML = capitalise(data.quizcontent[curPage]['a'+(i+1)]);
  }

  var increment = Math.ceil(((curPage+1) / (lengthofobject))*100);
  progressBar.style.width = (increment)+'%';
  progressBar.innerHTML = (increment)+'%';

}

function moveBack() {
  if(curPage > 0) {
    curPage--;
    checkPage(curPage);
  }else {
    console.log("end of the quiz page" + curPage);
  }
} 

function capitalise(str){
  return str.substr(0, 1).toUpperCase() + str.substr(1);

}