import { GetterTree, ActionTree, MutationTree } from 'vuex'

const initialState = () => {
  return {
    hueValue: 0,
    hueHalfValue: 0,
    brightnessSwitch: true,
    brightnessValue: 0,
  }
}

export const state = initialState()

export type RootState = ReturnType<typeof initialState>

export const getters: GetterTree<RootState, RootState> = {
  hueValue: (state) => state.hueValue,
  hueHalfValue: (state) => state.hueHalfValue,
  brightnessValue: (state) => state.brightnessValue,
}

export const mutations: MutationTree<RootState> = {
  countHueValue(state) {
    if (state.hueValue > 359) return state.hueValue = 0;
    state.hueValue = state.hueValue + 1;
  },
  countHueHalfValue(state) {
    if (state.hueHalfValue > 359) return state.hueHalfValue = 0;
    state.hueHalfValue = state.hueHalfValue + 1;
  },
  changeBrightness(state) {
    if(state.brightnessSwitch) state.brightnessValue += 1;
    if(!state.brightnessSwitch) state.brightnessValue -= 1;
    if(state.brightnessValue == 0 || state.brightnessValue == 70) return state.brightnessSwitch = !state.brightnessSwitch;
  }
}

export const actions: ActionTree<RootState, RootState> = {

}
