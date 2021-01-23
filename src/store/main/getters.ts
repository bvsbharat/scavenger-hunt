import { State as RootState } from "@/store";
import { GetterTree } from "vuex";
import { State as LocalState } from "./state";

// Getters types
export type Getters = {
  darkMode(state: LocalState): boolean;
};

// Getters
export const getters: GetterTree<LocalState, RootState> & Getters = {
  darkMode: (state) => {
    return state.darkMode;
  },
};
