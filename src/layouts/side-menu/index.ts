import { RouteLocationNormalizedLoaded as Route, Router } from "vue-router";
import Velocity from "velocity-animate";

// Setup side menu
type Menu = {
  icon: string;
  pageName: string;
  title: string;
  active?: boolean;
  activeDropdown?: boolean;
  ignore?: boolean;
  subMenu?: Menu[];
};

const findActiveMenu = (subMenu: Array<Menu>, route: Route): boolean => {
  let match = false;
  subMenu.forEach((item) => {
    if (item.pageName === route.name && !item.ignore) {
      match = true;
    } else if (!match && item.subMenu) {
      match = findActiveMenu(item.subMenu, route);
    }
  });
  return match;
};

const nestedMenu = (
  menu: Array<Menu | string>,
  route: Route
): Array<Menu | string> => {
  menu.forEach((item, key) => {
    if (typeof item !== "string") {
      let menuItem = menu[key] as typeof item;
      menuItem.active =
        (item.pageName === route.name ||
          (item.subMenu && findActiveMenu(item.subMenu, route))) &&
        !item.ignore;

      if (item.subMenu) {
        menuItem.activeDropdown = findActiveMenu(item.subMenu, route);
        menuItem = {
          ...item,
          ...nestedMenu(item.subMenu, route),
        };
      }
    }
  });

  return menu;
};

const linkTo = (menu: Menu, router: Router): void => {
  if (menu.subMenu) {
    menu.activeDropdown = !menu.activeDropdown;
  } else {
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

export { Menu, nestedMenu, linkTo, enter, leave };
