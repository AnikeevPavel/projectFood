function tabs(
  tabsSelector,
  tabsContentSelector,
  tabsParentSelector,
  activeClass
) {
  const tabs = document.querySelectorAll(tabsSelector), //! строка меню / получаем все надписи из меню
    tabsContent = document.querySelectorAll(tabsContentSelector), //! Получаем все картинки слева от надписи
    tabsParent = document.querySelector(tabsParentSelector); //! Подложка под надписями для ловли нажатия

  function tabContentHide() {
    tabsContent.forEach((item) => {
      item.classList.add("hide");
      item.classList.remove("show", "fade");
    });
    tabs.forEach((item) => {
      item.classList.remove(activeClass);
    });
  }

  function tabShowContent(i = 0) {
    tabs[i].classList.add(activeClass);
    tabsContent[i].classList.remove("hide");
    tabsContent[i].classList.add("show", "fade");
  }
  tabContentHide();
  tabShowContent();

  tabsParent.addEventListener("click", (event) => {
    const target = event.target;
    if (target && target.classList.contains(tabsSelector.slice(1))) {
      tabs.forEach((item, i) => {
        if (target == item) {
          tabContentHide();
          tabShowContent(i);
        }
      });
    }
  });
}

export default tabs;
