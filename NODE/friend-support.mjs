import { createServer } from 'node:http'
import { readFile } from 'fs/promises'

const PORT = 5000

const server = createServer(async (req, res) => {
  res.setHeader('Content-Type', 'application/json')

  try {
    if (req.method !== 'GET') {
      res.statusCode = 404
      return res.end(JSON.stringify({ error: 'guest not found' }))
    }
    const guestFileName = `${req.url.slice(1)}.json`

    try {
      const data = await readFile(guestFileName)
      const guestInfo = JSON.parse(data)
      
      res.statusCode = 200
      res.end(JSON.stringify(guestInfo))
    } catch (err) {
      res.statusCode = 404
      res.end(JSON.stringify({ error: 'guest not found' }))
    }

  } catch (err) {
    res.statusCode = 500
    res.end(JSON.stringify({ error: 'server failed' }))
  }
})

// Start server and log message
server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})