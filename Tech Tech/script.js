
var checked = [];
let proj = { name: "Project Manager", count: 0, link: "https://www.coursera.org/articles/technical-project-manager" };
let uiux = { name: "UI/UX Designer", count: 0, link: "https://resources.workable.com/ui-ux-designer-job-description#:~:text=UI%20UX%20designers%20create%20the,can%20be%20communicated%20using%20storyboards." };
let data = { name: "Data Analyst", count: 0, link: "https://www.coursera.org/articles/what-does-a-data-analyst-do-a-career-guide" };
let soft = { name: "Software Developer", count: 0, link: "https://www.devry.edu/online-programs/area-of-study/technology/what-does-a-software-developer-do.html" };
var options = [proj, uiux, data, soft];

function results() {
  for (let e = 0; e < checked.length; e++) {
    if (checked[e] == "proj") {
      proj.count++;
    }
    if (checked[e] == "uiux") {
      uiux.count++;
    }
    if (checked[e] == "data") {
      data.count++;
    }
    if (checked[e] == "soft") {
      soft.count++;
    }
  }

  for (i = 0; i < options.length; i++) {
    console.log(options[i].name);
    console.log(options[i].count);
  }

  var largest = soft;
  for (i = 0; i < options.length; i++) {
    if (options[i].count > largest.count) {
      largest = options[i];
    }
  }

  document.getElementById("result").innerHTML = "You should consider being a " + largest.name;

  document.getElementById("learnBNT").innerHTML = '<a href=' + largest.link + ' button type="button" class="btn btn-lg btn-secondary">Learn More</button> </a>';

}

function radioCheck(array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i].checked) {
      checked.push(array[i].value);
    }
  }
  results();
}

function end() {
  while (checked.length > 0) {
    checked.pop();
  }
  soft.count = 0;
  proj.count = 0;
  uiux.count = 0;
  data.count = 0;

  let idArray = document.getElementsByClassName("form-check-input");
  radioCheck(idArray);
}

const resultClick = document.querySelector("#check");
resultClick.addEventListener("click", end);
