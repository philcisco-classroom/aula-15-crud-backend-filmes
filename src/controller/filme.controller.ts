import { Request, Response } from "express";
import { FilmeService } from "../services/filme.service";

const filmeService = new FilmeService();

export class FilmeController{

    async create(req: Request,res: Response)
    {
        const dados = req.body;
        await filmeService.create(dados);
        res.status(200).send();
    }

    // delete();

    // update();

    // findAll();

    // findById();

}