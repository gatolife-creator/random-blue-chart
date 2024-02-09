document.getElementById("selectButton").addEventListener("click", function () {
  const problems = {
    I: 185,
    A: 144,
    II: 251,
    B: 169,
  };

  const selectedProblems = selectRandomProblems(problems, 5);
  const questionList = document.getElementById("questionList");
  questionList.innerHTML = "";

  selectedProblems.forEach(function (problem) {
    const li = document.createElement("li");
    li.textContent = problem;
    questionList.appendChild(li);
  });
});

function selectRandomProblems(problems, num) {
  const problemArray = [];
  for (const problem in problems) {
    for (let i = 0; i < problems[problem]; i++) {
      problemArray.push(problem + ": " + (i + 1));
    }
  }

  const selectedProblems = [];
  for (let i = 0; i < num; i++) {
    const randomIndex = Math.floor(Math.random() * problemArray.length);
    selectedProblems.push(problemArray[randomIndex]);
    problemArray.splice(randomIndex, 1);
  }

  return selectedProblems;
}
