const Animal = require('../../models/animal')


module.exports = {
    create,
    index,
    show,
    update,
    destroy,
    jsonAnimal,
    jsonAnimals
}


function jsonAnimal (_, res) {
    res.json(res.locals.data.animal)
}



function jsonAnimals (_, res) {
    res.json(res.locals.data.animals)
}

//Create
async function create(req, res, next){
    try {
        const animal = await Animal.create(req.body)
        res.locals.data.animal = animal
        next()
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}


//index (ALL)
async function index(req, res, next) {
    try {
        const animals = await Animal.find({})
        res.locals.data.animals = animals
        next()
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}

//show (SINGLE)
async function show(req, res, next) {
    try {
        const animal = await Animal.findById(req.params.id)
        res.locals.data.animal = animal
        next()
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}


//update

async function update(req, res, next) {
    try {
        const animal = await Animal.findByIdAndUpdate(req.params.id, req.body, {new: true})
        res.locals.data.animal = animal
        next()
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}


//Destroy

async function destroy(req, res, next) {
    try {
        const animal = await Animal.findByIdAndUpdate(req.params.id)
        res.locals.data.animal = animal
        next()
    } catch (error) {
        res.status(400).json({msg: error.message})
    }
}