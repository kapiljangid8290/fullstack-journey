// Variables
/*let name = "Kapil";
let experience = 1;
let isLearning = true;

// Output
console.log("Name:", name);
console.log("Experience:", experience);
console.log("Learning JS:", isLearning);

// Simple logic
if (experience < 2) {
  console.log("Status: Beginner, but improving fast 🚀");
} else {
  console.log("Status: Intermediate");
}

// Function to greet
function showStatus(name, experience) {
    if (experience < 2) {
        console.log(name + " is a Beginner");
    } else {
        console.log(name + " is an Intermediate learner");
    }   
}

// Select elements
let button = document.getElementById("clickBtn");
let output = document.getElementById("output");

// Add event
button.addEventListener("click", function () {
  output.innerText = "Button clicked! JavaScript is working 🚀";
});

let submitBtn = document.getElementById("submitBtn");
let result = document.getElementById("result");

submitBtn.addEventListener("Click", function () {
    let selectedOption = document.querySelector('input[name="q1"]:checked;');

    if (!selectedOption) {
        result.innerText = "please select an option!";
        return;
    }

    let score = selectedOption.value;

    if (score == 1) {
        result.innerText = "you are a beginner";
    } else if (score == 2) {
        result.innerText = "you are an intermediate learner";
    } else {
        result.innerText = "you are an expert learner";
    }
    });*/


   /* document.addEventListener("DOMContentLoaded", function () {

  let submitBtn = document.getElementById("submitQuiz");
  let finalResult = document.getElementById("finalResult");

  submitBtn.addEventListener("click", function () {
    let totalScore = 0;

    for (let i = 1; i <= 5; i++) {
      let selected = document.querySelector(`input[name="q${i}"]:checked`);

      if (!selected) {
        finalResult.innerText = "Please answer all questions ❌";
        return;
      }

      totalScore += Number(selected.value);
    }

    if (totalScore <= 10) {
      finalResult.innerText = "Result: Beginner level 🚀";
    } else if (totalScore <= 18) {
      finalResult.innerText = "Result: Intermediate level 💪";
    } else {
      finalResult.innerText = "Result: Expert level 🔥";
    }
  });

});*/

document.addEventListener("DOMContentLoaded", function () {

  const submitBtn = document.getElementById("submitQuiz");
  const finalResult = document.getElementById("finalResult");

  // Disable submit initially
  submitBtn.disabled = true;

  // ✅ Check if all questions are answered
  function checkAllAnswered() {
    for (let i = 1; i <= 5; i++) {
      const selected = document.querySelector(`input[name="q${i}"]:checked`);
      if (!selected) {
        submitBtn.disabled = true;
        return;
      }
    }
    submitBtn.disabled = false;
  }

  function scrollToFirstUnanswered() {
  const questions = document.querySelectorAll(".question");

  for (let i = 0; i < questions.length; i++) {
    const qNumber = i + 1;
    const checked = document.querySelector(`input[name="q${qNumber}"]:checked`);

    if (!checked) {
      questions[i].scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
      break;
    }
  }
}


  // 👂 Listen for radio changes
  document.querySelectorAll('input[type="radio"]').forEach(radio => {
    radio.addEventListener("change", () => {
      checkAllAnswered();
      highlightUnanswered();
    });
  });

  // 🎯 Highlight unanswered questions
  function highlightUnanswered() {
    document.querySelectorAll(".question").forEach((question, index) => {
      const qNumber = index + 1;
      const checked = document.querySelector(`input[name="q${qNumber}"]:checked`);

      if (!checked) {
        question.style.border = "2px solid red";
        question.style.background = "#ffecec";
      } else {
        question.style.border = "none";
        question.style.background = "transparent";
      }
    });
  }

  // 🚀 Submit logic
  submitBtn.addEventListener("click", function () {
    let totalScore = 0;
    let unanswered = [];

    for (let i = 1; i <= 5; i++) {
      const selected = document.querySelector(`input[name="q${i}"]:checked`);
      if (!selected) {
        unanswered.push(i);
      } else {
        totalScore += Number(selected.value);
      }
    }

    if (unanswered.length > 0) {
      highlightUnanswered();
      scrollToFirstUnanswered();
      finalResult.innerText =
        "Please answer question(s): " + unanswered.join(", ");
      return;
    }

    if (totalScore <= 10) {
      finalResult.innerText = "Result: Beginner Level 🚀";
    } else if (totalScore <= 18) {
      finalResult.innerText = "Result: Intermediate Level 💪";
    } else {
      finalResult.innerText = "Result: Expert Level 🔥";
    }
  });

});



        
    