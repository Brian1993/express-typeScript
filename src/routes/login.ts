import { Router, Request, Response } from 'express'

interface RequestWithBody extends Request {
  body: {
    [key: string]: string | undefined
  }
}

const router = Router()

router.get('/login', (req: Request, res: Response) => {
  res.send(`
    <form method="POST">
      <label>Email</label>
      <input nmae='email'/>
      <label>Password</label>
      <input nmae='password' type='password' />
      <button>Submit</button>
    </form>
  `)
})

router.post('/login', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body
  console.log(req.body)
  if (email && password && email=== 'hi@hi.com' && password === 'password') {
    req.session = { loggedIn: true }
    res.redirect('/')
  } else {
    res.send('Invalid email or password')
  }
})

export default router
