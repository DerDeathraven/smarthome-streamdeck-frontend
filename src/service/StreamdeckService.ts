import {
  ButtonSetting,
  StreamDeckInfo,
  StreamdeckConfig,
} from "../model/config";
const adress = location.href;

export async function getState() {
  const resp = await fetch(`${adress}api/state`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await resp.json();
  if (isStreamDeckConfig(data)) {
    data.buttonSettings = await normalizeButtonSettings(data.buttonSettings);
    return data;
  }
  throw new Error("StreamDeck config not found");
}

function isStreamDeckConfig(config: object): config is StreamdeckConfig {
  if ("baseSettings" in config) return true;
  return false;
}

export async function getButtonArray() {
  const resp = await fetch(`${adress}api/streamdeck-info`);
  const data = (await resp.json()) as StreamDeckInfo;
  if ("KEY_COLUMNS" in data) {
    const { KEY_COLUMNS, KEY_ROWS } = data;
    const matrix = [] as Array<Array<ButtonSetting | boolean>>;
    for (let i = 0; i < KEY_ROWS; i++) {
      matrix.push([]);
      for (let j = 0; j < KEY_COLUMNS; j++) {
        matrix[i].push(false);
      }
    }
    return matrix;
  }

  throw new Error("StreamDeck config not found");
}

async function normalizeButtonSettings(buttonSettings: ButtonSetting[]) {
  const resp = await fetch(`${adress}api/streamdeck-info`);
  const data = (await resp.json()) as StreamDeckInfo;
  for (let i = 0; i < data.KEY_COLUMNS * data.KEY_ROWS; i++) {
    buttonSettings[i] = buttonSettings[i] || {
      type: "button",
      icons: [],
      protocol: "MQTT",
      typeSpecifigConfig: {},
    };
  }
  return buttonSettings;
}

export async function setState(config: StreamdeckConfig) {
  const resp = await fetch(`${adress}api/state`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(config),
  });
  if (resp.status !== 200) {
    throw new Error("Failed to update config");
  }
}
