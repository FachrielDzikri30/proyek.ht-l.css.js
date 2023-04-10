const menu = document.querySelector(".header_right");

menu.addEventListener('click', (e) => {
  const targetMenu = e.target;

  if (targetMenu.classList.contains('menu_link')) {
    const menuLinkActive = document.querySelector("header_right a.active");

    if (menuLinkActive !== null && targetMenu.getAttribute('href') !== menuLinkActive.getAttribute('href')) {
      menuLinkActive.classList.remove('active');
    }
    targetMenu.classList.add('active');
  }
})