// All the constants needed to send to the server for different roles

// All of the roles that are available in the base set
const baseSetRoles = [
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

// Roles
const villager = "Villager";
const werewolf = "Werewolf";
const loneWerewolf = "Lone Werewolf";
const seer = "Seer";
const robber = "Robber";
const troublemaker = "Troublemaker";
const tanner = "Tanner";
const drunk = "Drunk";
const hunter = "Hunter";
const mason = "Mason";
const insomniac = "Insomniac";
const doppleganger = "Doppleganger";

// Descriptions
const villagerDescription = "You are just villager, you do not have a night role";
const werewolfDescription = "The werewolves in this game are: ";
const loneWerewolfDescription = "Pick a center card to reveal";
const seerDescription = "You may look at another person's card, or two of the center cards";
const robberDescription = "You may exchange your card with another player's card, and view your new card";
const troublemakerDescription = "You may exchanage cards between two other players";
const tannerDescription = "You only win if you die at the end of the day";
const drunkDescription = "You must exchange your card with a center card but do not look at your new card";
const hunterDescription = "If you die, then the person you point at will also die";
const masonDescription = "The masons in this game are: ";
const insomniacDescription = "You may look at your card at the end of the night";
const dopplegangerDescription = "not implemented yet";

module.exports.roles = baseSetRoles;

module.exports.descriptions = {
    "Villager 1": villagerDescription,
    "Villager 2": villagerDescription,
    "Werewolf 1": werewolfDescription,
    "Werewolf 2": werewolfDescription,
    "Lone Werewolf": loneWerewolfDescription,
    "Seer": seerDescription,
    "Robber": robberDescription,
    "Troublemaker": troublemakerDescription,
    "Tanner": tannerDescription,
    "Drunk": drunkDescription,
    "Hunter": hunterDescription,
    "Mason 1": masonDescription,
    "Mason 2": masonDescription,
    "Insomniac": insomniacDescription,
    "Doppleganger": dopplegangerDescription
}