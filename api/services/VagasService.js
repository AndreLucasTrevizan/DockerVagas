const models = require('../models');
const VagasModel = models.sequelize.models.vagas;

class VagasService {
    async findAll() {
        try {
            return await VagasModel.findAll();
        } catch (error) {
            throw new Error(error);
        }
    }

    async cadastrar(body) {
        let {title, description, salary, modality, type, publication} = body;

        return await VagasModel.create({
            title: title,
            job_description: description,
            salary: salary,
            modality: modality,
            job_type: type,
            publication: publication
        });
    }
}

module.exports = new VagasService();