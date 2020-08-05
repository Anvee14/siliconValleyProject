//questions array can be stored in database like firebase
var questions = {"Anxiety":["How often have you been bothered by feeling nervous, anxious or on edge over the last two weeks?","How often have you been bothered by having trouble relaxing over the last two weeks?"],
                "Stress":["Do you experience breathing difficulty Eg, excessively rapid breathing, breathlessness in the absence of physical exertion","How often have you found that you could NOT cope with all the things you had to do?"],
                "Depression":["Do you experiance headaches, chest pain, muscle tension, nausea?","Do you experience irritability, sadness,<br> or anger?"],
                "Sleep Problem":["Do you experiance interfere with physical, mental, and emotional functioning","Do you have trouble falling asleep, waking too early in the morning, or waking up feeling unrefreshed."],
                "Loneliness":["Do you have trouble in ability to concentrate, make decisions, problem-solve","Do you feel lack of companionship"],
                "Self Esteem":["Do you struggle to focus on tasks or stay motivated?","Do you have difficulty in making your own choices"]
              };


var challenges = []
function getChallenges() {
    challenges = getParams().getAll('challenge')
    //console.log(challenges)
}

var topic = 0
function getQuestions(){
    if (topic < challenges.length) {
        var name = getParams().get('name')
        name = name.charAt(0).toUpperCase() + name.slice(1) 
        document.getElementById("challenge").innerHTML = "Hello "+ name +
                     "<BR>Please answer following questions related to<BR>" + challenges[topic]
        document.getElementById("ques1").innerHTML = questions[challenges[topic]][0];
        document.getElementById("ques2").innerHTML = questions[challenges[topic]][1];
        topic++
        var ele = document.getElementsByName("ans")
        for(var i=0;i<ele.length;i++)
          ele[i].checked = false;
          var ele1 = document.getElementsByName("ans1")
        for(var i=0;i<ele1.length;i++)
          ele1[i].checked = false;
    } else {
       window.open('care.html',"_self")
    }

}

function getParams() {
   const queryString = window.location.search;
   const urlParams = new URLSearchParams(queryString);
  //` console.log(urlParams.getAll('carename'))
   return(urlParams)

}
function getNextPg(){
  var care = getParams().get('carename')
  if( care=="selfCare"){
    window.open('selfCare.html',"_self")
  }
  if(care=="therapist"){
    window.open('therapist.html',"_self")
  }

}

function changeFrame(choice){
  if (choice == "hobby") {
    document. getElementById('changehtml').src = "../html/hobby.html";
  }
  if (choice == "pandachat") {
    document. getElementById('changehtml').src = "../html/pandachat.html";
  }
  if (choice == "timetable") {
    document. getElementById('changehtml').src = "../html/timetable.html";
  }
  if (choice == "entertainment") {
    document. getElementById('changehtml').src = "../html/entertainment.html";
  }
  if (choice == "meditate") {
    document. getElementById('changehtml').src = "../html/meditate.html";
  }
}
function checkRadio(name){
  if(document.getElementById(name).checked){
    return true
  }else{
    return false
  }
}