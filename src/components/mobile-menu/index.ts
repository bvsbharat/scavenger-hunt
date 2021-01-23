import { ref } from "vue";
import { Menu } from "@/layouts/side-menu";
import { Router } from "vue-router";
import Velocity from "velocity-animate";

// Toggle mobile menu
const activeMobileMenu = ref(false);
const toggleMobileMenu = (): void => {
  activeMobileMenu.value = !activeMobileMenu.value;
};

// Setup mobile menu
const linkTo = (menu: Menu, router: Router): void => {
  if (menu.subMenu) {
    menu.activeDropdown = !menu.activeDropdown;
  } else {
    activeMobileMenu.value = false;
    router.push({
      name: menu.pageName,
    });
  }
};

const enter = (el: HTMLElement, done: () => void): void => {
  Velocity(el, "slideDown", { duration: 300 }, { complete: done });
};

const leave = (el: HTMLElement, done: () => void): void => {
  Velocity(el, "slideUp", { duration: 300 }, { complete: done });
};

export { activeMobileMenu, toggleMobileMenu, linkTo, enter, leave };
