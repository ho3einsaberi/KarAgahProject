const answers = document.querySelectorAll(".answer");
const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    answers.forEach((answer) => {
      if (answer.dataset.id === question.dataset.id)
        answer.classList.toggle("active");
    });
  });
});
