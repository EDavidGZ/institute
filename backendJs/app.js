const express = require('express')

const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const cors = require('cors');
const app = express()

app.use(express.json())

app.use(cors({
  origin: '*'
}));

app.get('/', (req, res) => {
  res.send('Hi world!')
})

app.get('/user', async (req, res) => {
  const posts = await prisma.user.findMany()
  res.json(posts)
})

app.get('/user/find-id/:id', async (req, res) => {
  const { id } = req.params
  const posts = await prisma.user.findFirstOrThrow({
    where: { id: Number(id) }
  })
  res.json(posts)
})

app.get('/user/login/:email/:password', async (req, res) => {
  const { email, password } = req.params
  const posts = await prisma.user.findMany({
    where: { email, password }
  })
  res.json(posts)
})


app.post(`/user/create`, async (req, res) => {
  const { email, fullname, password } = req.body
  const result = await prisma.user.create({
    data: {
      email,
      fullname,
      password
    },
  })
  res.json(result)
})



// PUT

app.put('/user/update/:id', async (req, res) => {
  const { id } = req.params
  const { email, fullname, password } = req.body
  const post = await prisma.user.update({
    where: { id: Number(id) },
    data: { email, fullname, password }
  })
  res.json(post)
})

// DELETE

app.delete(`/user/delete/:id`, async (req, res) => {
  const { id } = req.params
  const post = await prisma.user.delete({
    where: {
      id: Number(id),
    },
  })
  res.json(post)
})


app.listen(3000, () => console.log('listening on port: http://localhost:3000'))