import { defineStore } from "pinia";
import { ButtonSetting } from "../model/config";

type ModalStoreState = {
  visible: boolean;
  activeButton?: ButtonSetting;
  activeIconIndex: number;
  returnString?: string;
};

export const useModalStore = defineStore("ModalStore", {
  state: (): ModalStoreState => {
    return {
      visible: false,
      activeButton: undefined,
      activeIconIndex: 0,
    };
  },
  getters: {
    getActiveIconSettings(state) {
      return state.activeButton!.icons[state.activeIconIndex];
    },
  },
});

export function openModal(buttonSettings: ButtonSetting, iconIndex: number) {
  const store = useModalStore();
  store.activeButton = buttonSettings;
  store.activeIconIndex = iconIndex;
  store.visible = true;

  return new Promise<string>((resolve, reject) => {
    const listner = store.$subscribe((state) => {
      if (store.returnString || !store.visible) {
        const returnString = String(store.returnString);
        listner();
        store.$reset();
        resolve(returnString);
      }
    });
  });
}
