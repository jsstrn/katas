const calculatePointsForOneMatch = match => {
  const [homeTeam, awayTeam] = match.split(":");

  const homeTeamHasWon = homeTeam > awayTeam;
  const homeTeamHasLost = homeTeam < awayTeam;
  const bothTeamsDrew = homeTeam === awayTeam;

  if (homeTeamHasWon) {
    return 3;
  }

  if (homeTeamHasLost) {
    return 0;
  }

  if (bothTeamsDrew) {
    return 1;
  }
};

const calculatePointsForAllMatches = matches => {
  return matches
    .map(match => calculatePointsForOneMatch(match))
    .reduce((acc, points) => acc + points, 0);
};

module.exports = {
  calculatePointsForOneMatch,
  calculatePointsForAllMatches
};
