import express from 'express'
import config from '../config/index'
import middleware from '../middleware/index'
import initializeDb from '../db'
import restaurant from '../controller/restaurant'


let router = express()

initializeDb(db => {

    router.use(middleware({config, db}))

    router.use('/restaurant', restaurant({ config, db }))
})

export default router