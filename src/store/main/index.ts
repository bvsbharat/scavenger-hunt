import {
  Store as VuexStore,
  CommitOptions,
  DispatchOptions,
  Module,
} from "vuex";
import { State as LocalState, state } from "./state";
import { Mutations, mutations } from "./mutations";
import { State as RootState } from "@/store";
import { Actions, actions } from "./actions";
import { Getters, getters } from "./getters";

// State type
export type State = LocalState;

type Namespaced<T, N extends string> = {
  [P in keyof T & string as `${N}/${P}`]: T[P];
};

type NamespacedMutations = Namespaced<Mutations, "main">;
type NamespacedActions = Namespaced<Actions, "main">;

// Setup store type
export type Store<S = LocalState> = Omit<
  VuexStore<S>,
  "getters" | "commit" | "dispatch"
> & {
  getters: {
    [K in keyof Getters]: ReturnType<Getters[K]>;
  };
} & {
  commit<K extends keyof NamespacedMutations>(
    key: K,
    payload: Parameters<NamespacedMutations[K]>[1],
    options?: CommitOptions
  ): ReturnType<NamespacedMutations[K]>;
} & {
  dispatch<K extends keyof NamespacedActions>(
    key: K,
    payload: Parameters<NamespacedActions[K]>[1],
    options?: DispatchOptions
  ): ReturnType<NamespacedActions[K]>;
};

export const main: Module<LocalState, RootState> = {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
