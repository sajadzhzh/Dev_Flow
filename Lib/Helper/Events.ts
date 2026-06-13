export const hiddenMenu = () => {
  const menuCon = document.getElementById("hidden_menu_con");
  const menu = document.getElementById("hidden_menu");

  if (menuCon?.classList.contains("w-full")) {
    menu?.classList.replace("w-2/3", "w-0");
    setTimeout(() => {
      menuCon.classList.replace("w-full", "hidden");
    }, 150);
  } else {
    menuCon?.classList.replace("hidden", "w-full");
    setTimeout(() => {
      menu?.classList.replace("w-0", "w-2/3");
    }, 25);
  }
};
