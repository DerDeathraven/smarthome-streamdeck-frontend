import { io } from "socket.io-client";
import { IS_DEV } from "../const";

const adress = IS_DEV ? location.href + "/socket" : location.href;

export const socket = io();
