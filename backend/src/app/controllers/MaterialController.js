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
}

export default new MaterialController();
