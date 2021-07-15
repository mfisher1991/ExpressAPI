const express = require('express');
let router = express.Router();


router.get('/:id', (req, res) => {
    let id = req.params.id
    if (id) {
        res.json(chripsStore.GetChirp(id));
    }

    res.send(chripsStore.GetChirps());
});

router.post('/', (req, res) => {
    chripsStore.CreateChirp(req.body);
    res.sendStatus(200);
});

module.exports = router;