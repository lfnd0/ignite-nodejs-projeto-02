import fastify from 'fastify'
import { knex } from './database'
// import crypto from 'node:crypto'

const app = fastify()
const port = 3333

app.get('/hello', async () => {
  // const transaction = await knex('transactions')
  //   .insert({
  //     id: crypto.randomUUID(),
  //     title: 'Transação de teste',
  //     amount: 1000,
  //   })
  //   .returning('*')
  // return transaction

  const transactions = await knex('transactions')
    .where('amount', 500)
    .select('*')

  return transactions
})

app
  .listen({
    port,
  })
  .then(() => {
    console.log(`Active app at: http://localhost:${port}`)
  })
