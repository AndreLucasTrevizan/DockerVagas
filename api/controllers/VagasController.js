const VagasService = require('../services/VagasService');

class VagasController {
    async findAll() {
        return await VagasService.findAll();
    }

    async cadastrar(body) {
        try {
            let vaga = await VagasService.cadastrar(body);
            
            return {vaga};
        } catch (error) {
            throw new Error(error);
        }
    }
}

module.exports = new VagasController();