const express = require('express');
const cohortsRouter = require('./routers/cohortsRouter')

const server = express();

server.use(express.json())

server.use('/api/cohorts', cohortsRouter)

server.listen(3500, () => {
    console.log('Server is listening on port 3500')
})