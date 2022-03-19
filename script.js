const team = {
   _players: [
      {
      firstName: 'Pete', 
      lastName: 'Wheeler', 
      age: 54,
      },

     {
      firstName: 'Shelly', 
      lastName: 'Ham', 
      age: 34,
     },

     {
      firstName: 'Jake', 
      lastName: 'Bike', 
      age: 43,
      }
   ],

   
  _games: [
    {
  opponent: 'Broncos',
  teamPoints: 42,
  opponentPoints: 37
    },

    {
   opponent: 'Sharks',
  teamPoints: 52,
  opponentPoints: 27
    },

    {
   opponent: 'hair', 
  teamPoints: 48,
  opponentPoints: 37
    }

  ],
get players() {
       return this._players;
   },
   get games() {
       return this._games;
   },
   
    addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    };
 
  this.players.push(player);
    },

      addGame(opp, myPts, oppPts) {
    const game = {
      opponent: opp,
      teamPoints: myPts,
      opponentPoints: oppPts
    };
    this.games.push(game);
  }
};


team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);


 // console.log(team.players);

   
team.addGame('Cats', 50, 28);
team.addGame('Minions', 88, 44);
team.addGame('Bugs', 76, 76);


    console.log(team.games);


