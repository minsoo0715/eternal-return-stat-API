const axios = require('axios');

const getHtml =  (countryCode, season, user_name, team_mode) => {
    return new Promise(resolve => {
        resolve(axios({
            method: 'post',
            url: `https://matchhistory.playeternalreturn.com/stats${countryCode}_${season}`,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: `user_name=${encodeURIComponent(user_name)}&season=${encodeURIComponent(season)}&team_mode=${encodeURIComponent(team_mode)}`
        }));
    })
}

module.exports = getHtml;