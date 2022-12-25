// 1. Кнока для считывания события
const buttons = document.querySelectorAll(".btn_sort");

// 2. Объект подвергаемый событию
const items = document.querySelectorAll(".group_5_sort_content_block");

// 3.1. Выполнение события при клике
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const sort = e.target.dataset.filter;
    console.log(sort);

    // 3.2 Сортировка
    items.forEach((item) => {
      if (sort == "all") {
        item.style.display = "flex";
      } else {
        if (sort == item.dataset.filter) {
          item.style.display = "flex";
        } else {
          item.style.display = "none";
        }
      }
    });
  });
});
