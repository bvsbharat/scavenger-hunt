import { Store as VuexStore, Module } from "vuex";
import { State as LocalState, state } from "./state";
import { State as RootState } from "@/store";
import { Getters, getters } from "./getters";

// State type
export type State = LocalState;

// Setup store type
export type Store<S = LocalState> = Omit<
  VuexStore<S>,
  "getters" | "commit" | "dispatch"
> & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
};

export const topMenu: Module<LocalState, RootState> = {
  namespaced: true,
  state,
  getters,
};
