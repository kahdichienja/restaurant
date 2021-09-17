import { Router } from "express";

import Restaurant from "../model";



export default({config, db}) => {
    let api = Router()

    /**
     * 
     * "v1/restaurant/add" create
     */

    api.post('/add', async (req, res) => {
        let newRest = new Restaurant()

        newRest.name = await req.body.name

        await newRest.save(err => {
            if(err){
                res.send(err)
            }
            res.json({message: "restaurant created successfully"})
        })
    })



    /**
     * 
     * "v1/restaurant/" read
     */
    /**
     * 
     * "v1/restaurant/:id" read 1
     */
    /**
     * 
     * "v1/restaurant/:id" update 1
     */

    /**
     * 
     * "v1/restaurant/:id" delete 1
     */
}