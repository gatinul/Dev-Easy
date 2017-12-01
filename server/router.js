const Router = require('koa-router');
const home = require('./controller/homeController')
const intf = require('./controller/intfController')

const router = new Router();

router.get('/', home.index)
router.post('/addIntf', intf.add)

module.exports = router;