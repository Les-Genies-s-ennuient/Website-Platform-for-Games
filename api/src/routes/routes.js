'use strict';
module.exports = function (app) {
    const db = require('../controllers/db');

    // db Routes
    app.route('/games')
        .get(db.getGames);

    app.route('/players')
        .get(db.getPlayers);

    app.route('/game')
        .post(db.createGame);

    app.route('/player')
        .post(db.createPlayer);
};
