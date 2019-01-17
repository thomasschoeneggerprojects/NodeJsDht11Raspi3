/*
 * GET users listing.
 */
import express = require('express');
const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    res.send("respond with a resource");
});



router.post('/',(req: express.Request, res: express.Response) => {
    res.status(200).send({
        message: 'POST request successfulll!!!!'
    })
})

export default router;