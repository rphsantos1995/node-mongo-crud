import { Router, Request, Response } from 'express';
import { universityService }from '../services/universityService';


export class UnvController {

  protected async getUniversities (req: Request, res: Response) {
    const { code, data } = await universityService.getAll();
    return res.status(code).json(data);
  }

  protected async getUniversityById (req: Request, res: Response) {
    const { id } = req.params;
    const { code, data } = await universityService.getOne(id);
    return res.status(code).json(data);
  }

  protected async createUniversity (req: Request, res: Response) {
    const {alpha_two_code, web_pages, name, country, domains  } = req.body;
    const university = { alpha_two_code, web_pages, name, country, domains };

    const { code, data } = await universityService.create(university);
    return res.status(code).json(data);
  }

  protected async updateUniversity (req: Request, res: Response) {
    const { id } = req.params;
    const {name, domains, web_pages}  = req.body;
    const { code, data } = await universityService.update(id, {name, domains, web_pages} )
    return res.status(code).json(data);
  }

  protected async deleteUniversity (req: Request, res: Response) {
    const { id } = req.params;
    const { code, data } = await universityService.delete(id)
    return res.status(code).json(data);
  }

};

export class UnvRouter extends UnvController {

  public router: Router;

  constructor() {
    super();
    this.router = Router();
    this.routes();
  }

  private routes(): void {
    
    this.router.get('/', super.getUniversities);
    this.router.get('/:id', super.getUniversityById);
    this.router.post('/', super.createUniversity);
    this.router.put('/:id', super.updateUniversity);
    this.router.delete('/:id',super.deleteUniversity);
  }

}


