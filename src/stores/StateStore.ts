import { defineStore } from "pinia";
import { StreamdeckConfig } from "../model/config";
import { getState } from "../service/StreamdeckService";

type StateStoreState = {
  configState: StreamdeckConfig | undefined;
};

export const useStateStore = defineStore("StateStore", {
  state: (): StateStoreState => {
    return {
      configState: undefined,
    };
  },

  getters: {
    getConfigState: async (state) => {
      if (state.configState) return state.configState;
      state.configState = await getState();
      return state.configState;
    },
  },
});
