const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8019

app.use(cors())

const tea = {
    'oolong': {
        'type': 'black',
        'origin': 'haiti',
        'waterTemp': 200,
        'steepTimeSeconds': 180,
        'caffinated': 'true',
        'flavor': 'mint'

    },
    'matcha': {

        'type': 'green',
        'origin': 'asia',
        'waterTemp': 100,
        'steepTimeSeconds': 200,
        'caffinated': 'false',
        'flavor': 'peppermint'

    },
    'unknown': {

        'type': 'unknown',
        'origin': 'unknown',
        'waterTemp': 'unknown',
        'steepTimeSeconds': 'unknown',
        'caffinated': 'unknown',
        'flavor': 'unknown'

    }

}


app.get('/', (request, response) => {
    //when we get a request coming in ., the CALL BACK  will respond with HTML
    response.sendFile(__dirname + '/index.html')
})

//query parameter is the :name
app.get('/api/:name', (request, response) => {
    //when we get a request coming in ., the CALL BACK  will respond with HTML
    response.json(tea)
    const teaName = request.params.name.toLowerCase();

    //using [] instead of dot notation because they can be space in our names so want to prevent error
    if (tea[teaName]) {
        //respond with the valuse of the tea
        response.json(tea[teaName])
    } else {
        response.json(tea['unknown'])

    }
})
//run on the environement port if not our port
app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}`)

})

