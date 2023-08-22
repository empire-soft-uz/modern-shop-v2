import { io } from "socket.io-client";

const URL = process.env.NEXT_PUBLIC_LOCAL_API;

// @ts-ignore
export const socket = io(URL, { autoConnect: false });
