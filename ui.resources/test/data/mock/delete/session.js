
module.exports = {
    path: '/mycare/pay-bill/v1/session',
    cache: false,
    template: function(params, query, body, cookie) {
        //return proxies to test
        //console.log('Post called');
        return {message: 'Delete-Testing123'};
    },
    status: (req, res, next) => {
        //
        res.status(204);
        next();
    }
}
