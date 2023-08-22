import { io } from "socket.io-client";

const URL = process.env.NEXT_PUBLIC_LOCAL_API;
// @ts-ignore
const socket:any = io(URL, { autoConnect: false });
// @ts-ignore
export {default} from socket
