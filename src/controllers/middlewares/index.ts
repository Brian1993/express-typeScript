import { Request, Response, NextFunction, RequestHandler } from 'express'

export function requireAuth (req: Request, res: Response, next: NextFunction) {
  if (req.session &&  req.session.loggedIn) return next()

  res.status(403)
  res.send('Not permitted')
}

export function bodyValidator (keys: string[]): RequestHandler {
  return function (req: Request, res: Response, next: NextFunction) {
    if (!req.body) { 
      res.status(422).send()
      return
    }
    
    for (let key of keys) {
      if (!req.body[key]) {
        res.status(422).send(`Missing property ${key}`)
        return
      }
    }

    next()
  }
}