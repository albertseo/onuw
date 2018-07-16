import { FETCH_PLAYERS, NEW_PLAYER } from "./types";

function fetchPlayers() {
    return {
        type: FETCH_PLAYERS,
        payload: "fetch"
    }
}

function newPlayer(player) {
    return {
        type: NEW_PLAYER,
        payload: player
    }
}

export default { fetchPlayers, newPlayer };