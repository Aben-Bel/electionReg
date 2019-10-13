var Electors = require('./controller');

module.exports = function(router) {
    router.post('/create', Electors.createregister);
    router.get('/get', Electors.getregisters);
    router.get('/get/:name', Electors.getregister);
    router.put('/update/:id', Electors.updateregister);
    router.delete('/remove/:id', Electors.removeregister);
}