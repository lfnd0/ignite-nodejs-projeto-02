import fastify from "fastify";

const app = fastify()
const port = 3333

app.get('/hello', () => {
  return 'Hello world'
})

app.listen({
  port
}).then(() => {
  console.log(`Active app at: http://localhost:${port}`);
})
