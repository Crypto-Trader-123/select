const branchSelected = document.querySelector(".branch-selected");
const branchOptionsContainer = document.querySelector(".branch-options");

const branchOptionsList = document.querySelectorAll(".branch-option");
branchSelected.addEventListener("click", () => {
  branchOptionsContainer.classList.toggle("active");
});

branchOptionsList.forEach((o) => {
  o.addEventListener("click", () => {
    // branchSelected.innerHTML = o.querySelector("label").innerHTML;
    branchOptionsContainer.classList.remove("active");
  });
});

const courseSelected = document.querySelector(".course-selected");
const courseOptionsContainer = document.querySelector(".course-options");

const courseOptionsList = document.querySelectorAll(".course-option");
courseSelected.addEventListener("click", () => {
  courseOptionsContainer.classList.toggle("active");
});

courseOptionsList.forEach((o) => {
  o.addEventListener("click", () => {
    // courseSelected.innerHTML = o.querySelector("label").innerHTML;
    courseOptionsContainer.classList.remove("active");
  });
});

const eceCourseList = [
  "EE 482 - Energy Management and Auditing",
  "BT 362 - Sustainable Energy Processes",
  "MP 469 - Industrial Psychology and Organizational Behaviour",
  "CE 488 - Disaster Management",
  "CS 484 - Computer Graphics",
];

const eeeCourseList = [
  "MP 469 - Industrial Psychology and Organizational Behaviour",
  "EC 482 - Biomedical Engineering",
  "CE 488 - Disaster Management",
  "CS 484 - Computer Graphics",
];

const cseCourseList = [
  "EE 482 - Energy Management and Auditing",
  "BT 362 - Sustainable Energy Processes",
  "MP 469 - Industrial Psychology and Organizational Behaviour",
  "EC 482 - Biomedical Engineering",
  "CE 488 - Disaster Management",
];

const mechCourseList = [
  "BT 362 - Sustainable Energy Processes",
  "EC 482 - Biomedical Engineering",
  "CE 488 - Disaster Management",
  "CS 484 - Computer Graphics",
];

const civilCourseList = [
  "EE 482 - Energy Management and Auditing",
  "BT 362 - Sustainable Energy Processes",
  "MP 469 - Industrial Psychology and Organizational Behaviour",
  "EC 482 - Biomedical Engineering",
  "CS 484 - Computer Graphics",
];

const branchOptions = document.getElementsByName("branch");
branchOptions.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.checked) {
      branchSelected.innerText = item.parentNode.lastElementChild.innerText;
      if (item.value == "mechanical") {
        console.log("mechanical");
        courseOptionsContainer.innerHTML = "";
        document.querySelector(".course-selected").innerText = "Select your elective";
        mechCourseList.forEach((course, index) => {
          const li = document.createElement("div");
          li.classList.add("course-option");
          li.classList.add("option");
          const inputElement = document.createElement("input");
          inputElement.name = "course";
          inputElement.type = "radio";
          inputElement.id = "course" + index;
          inputElement.value = course;
          inputElement.classList.add("radio");
          const labelElement = document.createElement("label");
          labelElement.htmlFor = "course" + index;
          labelElement.innerText = course;
          li.appendChild(inputElement);
          li.appendChild(labelElement);
          courseOptionsContainer.appendChild(li);
        });
      } else if (item.value == "civil") {
        console.log("civil");
        courseOptionsContainer.innerHTML = "";
        document.querySelector(".course-selected").innerText = "Select your elective";
        civilCourseList.forEach((course, index) => {
          const li = document.createElement("div");
          li.classList.add("course-option");
          li.classList.add("option");
          const inputElement = document.createElement("input");
          inputElement.name = "course";
          inputElement.type = "radio";
          inputElement.id = "course" + index;
          inputElement.value = course;
          inputElement.classList.add("radio");
          const labelElement = document.createElement("label");
          labelElement.htmlFor = "course" + index;
          labelElement.innerText = course;
          li.appendChild(inputElement);
          li.appendChild(labelElement);
          courseOptionsContainer.appendChild(li);
        });
      } else if (item.value == "eee") {
        console.log("eee");
        courseOptionsContainer.innerHTML = "";
        document.querySelector(".course-selected").innerText = "Select your elective";
        eeeCourseList.forEach((course, index) => {
          const li = document.createElement("div");
          li.classList.add("course-option");
          li.classList.add("option");
          const inputElement = document.createElement("input");
          inputElement.name = "course";
          inputElement.type = "radio";
          inputElement.id = "course" + index;
          inputElement.value = course;
          inputElement.classList.add("radio");
          const labelElement = document.createElement("label");
          labelElement.htmlFor = "course" + index;
          labelElement.innerText = course;
          li.appendChild(inputElement);
          li.appendChild(labelElement);
          courseOptionsContainer.appendChild(li);
        });
      } else if (item.value == "ece") {
        console.log("ece");
        courseOptionsContainer.innerHTML = "";
        document.querySelector(".course-selected").innerText = "Select your elective";
        eceCourseList.forEach((course, index) => {
          const li = document.createElement("div");
          li.classList.add("course-option");
          li.classList.add("option");
          const inputElement = document.createElement("input");
          inputElement.name = "course";
          inputElement.type = "radio";
          inputElement.id = "course" + index;
          inputElement.value = course;
          inputElement.classList.add("radio");
          const labelElement = document.createElement("label");
          labelElement.htmlFor = "course" + index;
          labelElement.innerText = course;
          li.appendChild(inputElement);
          li.appendChild(labelElement);
          courseOptionsContainer.appendChild(li);
        });
      } else if (item.value == "cse") {
        console.log("cse");
        courseOptionsContainer.innerHTML = "";
        document.querySelector(".course-selected").innerText = "Select your elective";
        cseCourseList.forEach((course, index) => {
          const li = document.createElement("div");
          li.classList.add("course-option");
          li.classList.add("option");
          const inputElement = document.createElement("input");
          inputElement.name = "course";
          inputElement.type = "radio";
          inputElement.id = "course" + index;
          inputElement.value = course;
          inputElement.classList.add("radio");
          const labelElement = document.createElement("label");
          labelElement.htmlFor = "course" + index;
          labelElement.innerText = course;
          li.appendChild(inputElement);
          li.appendChild(labelElement);
          courseOptionsContainer.appendChild(li);
        });
      }
      const courseOptions = document.getElementsByName("course");
      courseOptions.forEach(item => {
        item.addEventListener("click",()=>{
          if(item.checked){
            document.querySelector(".course-selected").innerText = item.value;
            console.log(item.value);
            courseOptionsContainer.classList.remove("active");
          }
        })
      })
    }
  });
});
