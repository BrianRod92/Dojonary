function logIn() {
    var logBttn = document.querySelector(".loginLogout");
    logBttn.innerHTML = "Logout"
}

var likesBttn1 = 13;

function numLikes() {
    likesBttn1++;
    var Bttn1 = document.querySelector(".likeBttnTop");
    Bttn1.innerHTML = likesBttn1 + " Likes"
    alert("Ninja was liked")
}

var likesBttn2 = 37;

function numLikes2() {
    likesBttn2++;
    var Bttn2 = document.querySelector(".likeBttnBottom");
    Bttn2.innerHTML = likesBttn2 + " Likes"
    alert("Ninja was liked")
}

function definition() {
    var addDefinition = document.querySelector(".addDef");
    addDefinition.remove();
}

