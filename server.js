// for azure - why are you so inflexible?
const serve = require('micro')
const handler = require('./index')
const port = process.env.PORT || 3001

serve(handler).listen(port, () => {
    console.log(`up on ${port}`)
})