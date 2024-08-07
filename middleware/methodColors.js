import colors from 'colors'

const methodLogger = (req, res, next) => {
    const methodColors = {
        GET: 'green',
        POST: 'yellow',
        PUT: 'blue',
        DELETE: 'red'
    }

    const color = methodColors[req.method] || white

    console.log(`${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}` [color])
    next()
}

export default methodLogger