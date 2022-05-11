import { NodemailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter'
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case'
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository'
import express from 'express'

export const routes = express.Router()

routes.post('/feedbacks', async (req, res) => {
  const { type, comment, screenshot } = req.body

  const prismaFeedbacksRepository = new PrismaFeedbacksRepository()
  const nodeMailAdapter = new NodemailerMailAdapter()

  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeedbacksRepository,
    nodeMailAdapter
  )

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot
  })

  return res.status(201).send()
})
