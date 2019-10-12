import * as Yup from 'yup';

import Material from '../models/Material';
import globalConfig from '../../config/global';

class MaterialController {
  /**
   * Lists materiais
   * @param {Express.Request} req
   * @param {Express.Response} res
   */
  async index(req, res) {
    let { page, size } = req.query;
    page = page || 0;
    size = size || globalConfig.pageSize;

    const materiais = await Material.findAll({
      limit: size,
      offset: size * page,
    });
    res.json(materiais);
  }

  async validate(material) {
    const schema = Yup.object().shape({
      nome: Yup.string('Nome deve ser texto').required('Nome é obrigatório'),
      limiar_estoque: Yup.number(
        'Limiar de estoque deve ser numérico'
      ).required('Limiar de estoque é obrigatório'),
      unidade_medida: Yup.string('Unidade de medida deve ser texto').required(
        'Unidade de medida é obrigatória'
      ),
      estoque_total: Yup.number('Estoque total deve ser numérico').required(
        'Estoque total é obrigatório'
      ),
      quantidade_caixa: Yup.number(
        'Quantidade na caixa deve ser numérica'
      ).required('Quantidade na caixa é obrigatória'),
      identificador_caixa: Yup.string(
        'Identificador da caixa deve ser texto'
      ).required('Identificador da caixa é obrigatório'),
    });

    await schema.validate(material);
  }

  async store(req, res) {
    try {
      await this.validate(req.body);
    } catch (error) {
      return res.status(401).json({ error: error.errors[0] });
    }

    const material = Material.create(req.body);
    return res.json(material);
  }
}

export default new MaterialController();
