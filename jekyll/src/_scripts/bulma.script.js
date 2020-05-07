import Sentry from "./sentry.script";

const burgers = document.querySelectorAll(".burger");

try {
  burgers.forEach((element) => {
    element.addEventListener("click", () => {
      const target = document.querySelector(`#${element.dataset.target}`);

      element.classList.toggle("is-active");
      target.classList.toggle("is-active");
    });
  });
} catch (error) {
  Sentry.captureException(error);
}
