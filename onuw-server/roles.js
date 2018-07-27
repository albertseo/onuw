// All of the roles that are available in the base set
const baseSetRoles = [
      "Villager",
      "Villager",
      "Werewolf",
      "Werewolf",
      "Seer",
      "Robber",
      "Troublemaker",
      "Tanner",
      "Drunk",
      "Hunter",
      "Mason",
      "Mason",
      "Insomniac",
      "Minion",
      "Doppleganger"
].reduce((accum, msg) => {
  accum[ msg ] = msg
  return accum
}, {});

module.exports.roles = baseSetRoles;