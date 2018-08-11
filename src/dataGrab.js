export function grabTransitData() {
    return {

        const request = require('superagent');
        const nocache = require('superagent-no-cache');
        const prefix = require('superagent-prefix')('/static');

        request
        .get('http://api.translink.ca/rttiapi/v1/buses?apikey=fH8nhLCTC142J3YXmtLC ')
        .use(prefix)
        .use(nocache)
        .end((err, res) => {
            console.log(res);
        });
    }
}