import io from "socket.io-client";
import { messageTypes } from "./types";
const socket = io("http://localhost:8000");

const init = store => {
  // add listeners to socket messages so we can re-dispatch them as actions
  Object.keys(messageTypes).forEach(type =>
    socket.on(type, payload => store.dispatch({ type, payload }))
  );
};

const emit = (type, payload) => {
  console.log("sending");
  socket.emit(type, payload);
};

export { init, emit };
