const { Router } = require('express')
const router = Router()

//const {db_config, admin} = require('../../config')

router.post('/', (req, res) => {

    try{
        const user = {
            nombre: 'Santiago',
            id: 001,
            age: 19
        }
        res.status(200).send(user)
    }
    catch (error){
        res.status(400).send(error)
    }
})

module.exports = router