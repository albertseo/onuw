// All the constants needed to send to the server for different roles

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

// Role descriptions
const villagerDescription = "You are just a normal villager";
const werewolfDescription = "The other werewolves are ";
const loneWerewolfDescription = "Pick a center card to reveal";
const seerDescription = "You may look at another person's card, or two of the center cards";
const robberDescription = "You may exchange your card with another player's card, and view your new card";
const troublemakerDescription = "You may exchanage cards between two other players";
const tannerDescription = "You only win if you die at the end of the day";
const drunkDescription = "You must exchange your card with a center card but do not look at your new card";
const hunterDescription = "If you die, then the person you point at will also die";
const masonDescription = "The masons in this game are";
const insomniacDescription = "You may look at your card at the end of the night";
const dopplegangerDescription = "not implemented yet";

module.exports.roles = baseSetRoles;

module.exports.descriptions = {
    villagerDescription,
    werewolfDescription,
    loneWerewolfDescription,
    seerDescription,
    robberDescription,
    troublemakerDescription,
    tannerDescription,
    drunkDescription,
    hunterDescription,
    masonDescription,
    insomniacDescription,
    dopplegangerDescription
}