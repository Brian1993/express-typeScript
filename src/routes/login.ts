import { Router, Request, Response } from 'express'

interface RequestWithBody extends Request {
  body: {
    [key: string]: string | undefined
  }
}

const router = Router()



export default router
