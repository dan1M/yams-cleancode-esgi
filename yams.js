// rolls: Liste des listes de lancés de 5 dés
// example: rolls = [[6,6,6,6,6] ...]
const calculateYamsScore = (rolls) => {
  if (!Array.isArray(rolls)) {
    throw new Error('rolls is not an array');
  }
  let total = 0;

  rolls.forEach((roll) => {
    if (!Array.isArray(roll)) {
      throw new Error('roll is not an array');
    }
    if (roll.length !== 5) {
      throw new Error('roll length is not 5');
    }
    // handle yams rules

    // full = 30 pts : 1 brelan + 1 paire
    const brelan = roll.find(
      (value) => roll.filter((v) => v === value).length === 3
    );

    const paireFull = roll.find(
      (value) =>
        roll.filter((v) => v === value).length === 2 && value !== brelan
    );
    if (brelan && paireFull) {
      total += 30;
      return;
    }

    // brelan = 28 pts
    if (brelan) {
      total += 28;
      return;
    }

    // carré = 35 pts
    const carre = roll.find(
      (value) => roll.filter((v) => v === value).length === 4
    );

    if (carre) {
      total += 35;
      return;
    }

    // grande suite = 40 pts
    const sortedRoll = roll.sort();
    if (
      sortedRoll[0] === sortedRoll[1] - 1 &&
      sortedRoll[1] === sortedRoll[2] - 1 &&
      sortedRoll[2] === sortedRoll[3] - 1 &&
      sortedRoll[3] === sortedRoll[4] - 1
    ) {
      total += 40;
      return;
    }

    // yams = 50 pts
    const yams = roll.find(
      (value) => roll.filter((v) => v === value).length === 5
    );
    if (yams) {
      total += 50;
      return;
    }

    // chance = sum of all dice
    const rollTotal = roll.reduce((acc, value) => acc + value, 0);
    total += rollTotal;
  });

  return total;
};

module.exports = calculateYamsScore;
