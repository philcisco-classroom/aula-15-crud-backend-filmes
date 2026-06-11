import { prisma } from "../prisma/client";

export class FilmeService{

    async create(dados: {titulo: string; nota: number; imagem: string; })
    {
        await prisma.filme.create({
            data: dados,
        });
    }

    // delete();

    // findAll();

    // findById();

    // update();

}