const quiz = document.querySelector("[data-quiz]");

if (quiz) {
  const result = quiz.querySelector(".quiz-result");
  const buttons = quiz.querySelectorAll("[data-answer]");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const isRight = button.dataset.answer === "right";

      buttons.forEach((item) => {
        item.style.borderColor = "transparent";
      });

      button.style.borderColor = isRight ? "#d99b31" : "#b9573e";
      result.textContent = isRight
        ? "答对了。ODS 负责承接接近原始来源的数据，是追溯和重跑的重要基础。"
        : "再想想：原始、可追溯、方便重跑，这些关键词通常指向 ODS。";
    });
  });
}
