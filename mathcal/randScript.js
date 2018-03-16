var pageName = location.pathname.split("/").slice(-1);
window.addEventListener('load', function() {
  alert(pageName);
  randomOpr();
  pageAction();
});
var num1 = document.getElementById("num1");
var num2 = document.getElementById("num2");
function pageAction(){
    if(pageName == "level1.html"){
    num1.innerHTML = Math.floor(Math.random()*20+1);
    num2.innerHTML = Math.floor(Math.random()*20+1);
  }else if(pageName == "level2.html"){
    num1.innerHTML = Math.floor(Math.random()*30+21);
    num2.innerHTML = Math.floor(Math.random()*30+21);
  }else if(pageName == "level3.html"){
    num1.innerHTML = Math.floor(Math.random()*50+51);
    num2.innerHTML = Math.floor(Math.random()*50+51);
  }
}
var operators = ['+', '-', '*', '/']
var selectedOperator = Math.floor(Math.random()*operators.length);

function randomOpr() {
    var operator = document.getElementById("opr");
    alert((operator).value);
    operator.innerHTML = operators[selectedOperator];
}

function checkMath() {
    var num1 = parseInt(document.getElementById("num1").innerHTML, 10);
    var num2 = parseInt(document.getElementById("num2").innerHTML, 10);
    var answer = parseInt(document.getElementById("answer").value, 10);
    if(operators[selectedOperator]== "+"){
        if (answer === num1 + num2) {
        alert("your answer is correct");
        } else {
        alert(answer + " is incorrect, correct answer is " + (num1+ num2));
        }
    }else if(operators[selectedOperator].sign == "-"){
        if (answer === num1 - num2) {
        alert("your answer is correct");
        } else {
        alert(answer + " is incorrect, correct answer is " + (num1 - num2));
        }
    }else if(operators[selectedOperator].sign == "*"){
        if (answer === num1 - num2) {
        alert("your answer is correct");
        } else {
        alert(answer + " is incorrect, correct answer is " + (num1 * num2));
        }
    }else if(operators[selectedOperator].sign == "/"){
        if (answer === num1 - num2) {
        alert("your answer is correct");
        } else {
        alert(answer + " is incorrect, correct answer is " + (num1 / num2));
        }
    }
    document.getElementById("answer").value="";
    randomNum();
}