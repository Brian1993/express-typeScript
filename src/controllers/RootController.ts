import { Request, Response } from 'express'
import { get, use, controller } from './decorators'
import { requireAuth } from './middlewares'

@controller('')
class RootController {
  @get('/')
  getRoot (req: Request, res: Response) {
    const isLoggedIn = req.session && req.session.loggedIn 
    res.send(`
      <div>
        <div>${isLoggedIn ? 'You are logged in' : 'You are not logged in'}</div>
        ${
          isLoggedIn
            ?  '<a href="/auth/logout">Log out</a>'
            : '<a href="/auth/login">Log in</a>'
        }
      </div>
    `) 
  }

  @get('/protected')
  @use(requireAuth)
  getProtected (req: Request, res: Response) {
    res.send('Welcome to protected route, loggedIn user')
  }
}

export default RootController
