export const baseSetRoles = [
    "Villager 1",
    "Villager 2",
    "Werewolf 1",
    "Werewolf 2",
    "Seer",
    "Robber",
    "Troublemaker",
    "Tanner",
    "Drunk",
    "Hunter",
    "Mason 1",
    "Mason 2",
    "Insomniac",
    "Minion",
    "Doppleganger"
].reduce((accum, msg) => {
accum[ msg ] = false
return accum
}, {});