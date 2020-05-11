const warriorsGames = [
  {
    awayTeam: {
      team: 'Golden State',
      points: 119,
      isWinner: true
    },

    homeTeam: {
      team: 'Houston',
      points: 106,
      isWinner: false
    }
  },

  {
    awayTeam: {
      team: 'Golden State',
      points: 105,
      isWinner: false
    },

    homeTeam: {
      team: 'Houston',
      points: 127,
      isWinner: true
    }
  },

  {
    homeTeam: {
      team: 'Golden State',
      points: 126,
      isWinner: true
    },

    awayTeam: {
      team: 'Houston',
      points: 85,
      isWinner: false
    }
  },

  {
    homeTeam: {
      team: 'Golden State',
      points: 92,
      isWinner: false
    },

    awayTeam: {
      team: 'Houston',
      points: 95,
      isWinner: true
    }
  },

  {
    awayTeam: {
      team: 'Golden State',
      points: 94,
      isWinner: false
    },

    homeTeam: {
      team: 'Houston',
      points: 98,
      isWinner: true
    }
  },

  {
    homeTeam: {
      team: 'Golden State',
      points: 115,
      isWinner: true
    },

    awayTeam: {
      team: 'Houston',
      points: 86,
      isWinner: false
    }
  },

  {
    awayTeam: {
      team: 'Golden State',
      points: 101,
      isWinner: true
    },

    homeTeam: {
      team: 'Houston',
      points: 92,
      isWinner: false
    }
  }
];

const makeChart = (games, targetTeam) => {
  const ulParent = document.createElement('ul');

  for (let game of games) {
    const gameLI = document.createElement('li');

    gameLI.innerHTML = getScoreLine(game);
    isWinner(game, targetTeam);

    gameLI.classList.add(isWinner(game, targetTeam) ? 'win' : 'loss');
    ulParent.append(gameLI);
  }
  return ulParent;
};

const isWinner = ({ homeTeam, awayTeam }, targetTeam) => {
  const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
  return target.isWinner;
};

const getScoreLine = ({ homeTeam, awayTeam }) => {
  const { team: hTeam, points: hPoints } = homeTeam;
  const { team: aTeam, points: aPoints } = awayTeam;
  const teamNames = `${aTeam} @ ${hTeam}`;
  let scoreLine;

  if (aPoints > hPoints) {
    scoreLine = `<b>${aPoints}</b> - ${hPoints}`;
  } else {
    scoreLine = `${aPoints} - <b>${hPoints}</b>`;
  }

  return `${teamNames} ${scoreLine}`;
};

const chart1 = makeChart(warriorsGames, 'GoldenState');
const chart2 = makeChart(warriorsGames, 'Houston');

const body = document.querySelector('body');
body.prepend(chart1);
