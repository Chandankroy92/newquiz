var curPage = 1;
document.getElementById("btnNext").addEventListener("click", moveNext);
document.getElementById("btnPrevious").addEventListener("click", moveBack);
var classname = document.getElementsByClassName("answer");
for (var i = 0; i < classname.length; i++) {
  classname[i].addEventListener('click', myAnswer, false);
}
 
function myAnswer() {
  var idAnswer=this.getAttribute("data-id");
  document.getElementById("page1").innerHTML = 'Answer' + idAnswer;
}

function moveNext() {
  curPage++;
  document.getElementById("page1").innerHTML = 'Next Question Page' + curPage;
}

function moveBack() {
  curPage--;
  document.getElementById("page1").innerHTML = 'Previous Question Page' + curPage;
}