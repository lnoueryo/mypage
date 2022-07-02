import { GetterTree, ActionTree, MutationTree } from 'vuex'

const initialState = () => {
  return {
    hueValue: 0,
    hueHalfValue: 0,
    brightnessSwitch: true,
    brightnessValue: 0,
    selectTool: {},
    navigationItems: [
      {title: 'TOP', href: 'top'},
      {title: 'ABOUT ME', name: 'ViewsAboutMe', href: 'about-me'},
      {title: 'SKILL', name: 'ViewsSkill', href: 'skill'},
      {title: 'LANGUAGES TOOLS', name: 'ViewsLanguagesTools', href: 'languages-tools'},
      {title: 'HISTORY', name: 'ViewsHistory', href: 'history'},
      {title: 'CURRICULUM VITAE', name: 'ViewsCurriculumVitae', href: 'curriculum-vitae'},
      {title: 'PORTFOLIO', name: 'ViewsPortfolio', href: 'portfolio'},
      {title: 'OTHER CONTENTS', name: 'ViewsOtherContents', href: 'other-contents'},
      {title: 'FOLLOW ME', href: 'follow-me'},
    ]
  }
}

export const state = initialState()

export type RootState = ReturnType<typeof initialState>

export const getters: GetterTree<RootState, RootState> = {
  hueValue: (state) => state.hueValue,
  hueHalfValue: (state) => state.hueHalfValue,
  brightnessValue: (state) => state.brightnessValue,
  selectTool: (state) => state.selectTool,
  navigationItems: (state) => state.navigationItems,
  components: (state) => state.navigationItems.filter((item) => 'name' in item),
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
  },
  selectTool(state, selectTool) {
    state.selectTool = selectTool;
  },
}

export const actions: ActionTree<RootState, RootState> = {

}
