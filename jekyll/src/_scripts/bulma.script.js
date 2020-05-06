const $burgers = document.querySelectorAll(".burger");

if ($burgers.length > 0) {
  $burgers.forEach(($el) => {
    $el.addEventListener("click", () => {
      const target = $el.dataset.target;
      const $target = document.querySelector(`#${target}`);
      $el.classList.toggle("is-active");
      $target.classList.toggle("is-active");
    });
  });
}
