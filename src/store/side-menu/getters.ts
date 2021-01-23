import { State as RootState } from "@/store";
import { GetterTree } from "vuex";
import { State as LocalState } from "./state";

// Getters types
export type Getters = {
  menu(state: LocalState): Array<Record<string, unknown> | string>;
};

// Getters
export const getters: GetterTree<LocalState, RootState> & Getters = {
  menu: (state) => {
    return state.menu;
  },
};
