const router = require('koa-router')()

router.get('/', ctx => ctx.render('index'))
module.exports = router
