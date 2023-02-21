const { Router } = require('express')
const router = Router()

const connection = require('../../db');

router.get('/', (req, res) => {

    try {    
        const getSql = "SELECT * FROM `usuarios`";
        connection.query(getSql, function (err, result) {
          if (err) throw err;
          res.status(200).send(result)
          res.end()
        });
      } catch (error) {
        res.status(400).send(error.message)
      }
})

module.exports = router