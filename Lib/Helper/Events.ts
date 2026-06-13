export const hiddenMenu = () => {
  const menuCon = document.getElementById("hidden_menu_con");
  const menu = document.getElementById("hidden_menu");
  const body = document.body;

  if (menuCon?.classList.contains("w-full")) {
    menu?.classList.replace("w-2/3", "w-0");
    body.classList.add("overflow-hidden");
    setTimeout(() => {
      menuCon.classList.replace("w-full", "hidden");
    }, 150);
  } else {
    menuCon?.classList.replace("hidden", "w-full");
    body.classList.remove("overflow-hidden");
    setTimeout(() => {
      menu?.classList.replace("w-0", "w-2/3");
    }, 25);
  }
};
