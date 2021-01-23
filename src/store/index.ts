import { createStore } from "vuex";
import { main, Store as MainStore, State as MainState } from "./main";
import {
  sideMenu,
  Store as SideMenuStore,
  State as SideMenuState,
} from "./side-menu";
import {
  simpleMenu,
  Store as SimpleMenuStore,
  State as SimpleMenuState,
} from "./simple-menu";
import {
  topMenu,
  Store as TopMenuStore,
  State as TopMenuState,
} from "./top-menu";

export type State = {
  main: MainState;
  sideMenu: SideMenuState;
  simpleMenu: SimpleMenuState;
  topMenu: TopMenuState;
};

export type Store = MainStore<Pick<State, "main">> &
  SideMenuStore<Pick<State, "sideMenu">> &
  SimpleMenuStore<Pick<State, "simpleMenu">> &
  TopMenuStore<Pick<State, "topMenu">>;

export const store = createStore({
  modules: {
    main,
    sideMenu,
    simpleMenu,
    topMenu,
  },
});

export function useStore(): Store {
  return store as Store;
}

export default store;
