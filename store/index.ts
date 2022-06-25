import { GetterTree, ActionTree, MutationTree } from 'vuex'

const initialState = () => {
  return {
    hueValue: 0
  }
}

export const state = initialState()

export type RootState = ReturnType<typeof initialState>

export const getters: GetterTree<RootState, RootState> = {
  hueValue: (state) => state.hueValue
}

export const mutations: MutationTree<RootState> = {
  countHueValue(state) {
    if (state.hueValue > 359) return state.hueValue = 0;
    state.hueValue = state.hueValue + 1;
  }
}

export const actions: ActionTree<RootState, RootState> = {

}
