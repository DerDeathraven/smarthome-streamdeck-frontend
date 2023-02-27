import { defineStore } from "pinia";
import { ButtonSetting, StreamdeckConfig } from "../model/config";
import { getState, setState } from "../service/StreamdeckService";

type StateStoreState = {
  configState: StreamdeckConfig | undefined;
  activeIndex?: number;
};

export const useStateStore = defineStore("StateStore", {
  state: (): StateStoreState => {
    return {
      configState: undefined,
      activeIndex: undefined,
    };
  },

  getters: {
    getConfigState: async (state) => {
      if (state.configState) return state.configState;
      state.configState = await getState();
      return state.configState;
    },
    getActiveButton: (state) => {
      if (state.activeIndex === undefined) return undefined;
      return state.configState?.buttonSettings[state.activeIndex];
    },
  },
  actions: {
    async getButtonConfig(index: number): Promise<ButtonSetting> {
      const state = await this.getConfigState;
      const config = state.buttonSettings[index];
      return config;
    },
    async refreshConfig() {
      this.configState = await getState();
    },
    async updateConfig() {
      if (!this.configState) return;
      setState(this.configState);
    },
  },
});
