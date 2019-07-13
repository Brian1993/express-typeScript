# express-typeScript
Implement Controller by using ES7 Decorators and metadata.
The way i implement it:
  1. Create "route binding" decorators like: get, post..., and add route handler infomation through metadata
  2. Create "use" decorator and add middleware to route handler through metadata
  3. Create "controller" decorator to collect all the metadata on each route hanler and add it on the express router
