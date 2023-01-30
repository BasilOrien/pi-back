const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {home} = require('./js/home.js')
const {pokemons} = require('./js/pokemons') 

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/', home)
router.get('/pokemons', pokemons)
router.get('/pokemons/:id', pokemons)




module.exports = router;
