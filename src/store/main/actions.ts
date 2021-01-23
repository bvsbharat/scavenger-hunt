import { ActionTree, ActionContext } from "vuex";
import { State as RootState } from "@/store";
import { State as LocalState } from "./state";
import { Mutations } from "./mutations";
import { ActionTypes } from "./action-types";
import { MutationTypes } from "./mutation-types";

// Actions context
type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<LocalState, RootState>, "commit">;

// Actions contracts
export interface Actions {
  [ActionTypes.SET_DARK_MODE](
    { commit }: AugmentedActionContext,
    darkMode: boolean
  ): void;
}

// Define actions
export const actions: ActionTree<LocalState, RootState> & Actions = {
  [ActionTypes.SET_DARK_MODE]({ commit }, darkMode: boolean) {
    commit(MutationTypes.SET_DARK_MODE, darkMode);
  },
};
