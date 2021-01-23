import { MutationTree } from "vuex";
import { MutationTypes } from "./mutation-types";
import { State as LocalState } from "./state";

// Mutation contracts
export type Mutations<S = LocalState> = {
  [MutationTypes.SET_DARK_MODE](state: S, darkMode: boolean): void;
};

// Define mutations
export const mutations: MutationTree<LocalState> & Mutations = {
  [MutationTypes.SET_DARK_MODE](state: LocalState, darkMode: boolean) {
    state.darkMode = darkMode;
  },
};
