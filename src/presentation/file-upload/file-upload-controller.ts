import { Request, Response } from 'express';
import { FileUploadSingle, FileUploadMultiple } from '../../domain/use-cases/index';
import { UploadedFile } from 'express-fileupload';
import { FileUploadRepository } from '../../domain/repositories/file-upload.repository';
import { CustomError } from '../../domain/errors';

export class FileUploadController {
  constructor(
    private readonly FileUploadRepository: FileUploadRepository,
  ){}
  
  private handleError(error: unknown, res: Response) {
    if (error instanceof CustomError) {
    return res.status(error.statusCode).json({ error: error.message });
    }
    console.log(`${error}`);
    return res.status(500).json({ error: 'Internal Server Error' });
  }

  public fileUploadSingle = (req: Request, res: Response) => {
    
    //agarramos el archivo subido y el tipo de archivo
    const file = req.body.files.at(0) as UploadedFile;
    const type = req.params.type;

    new FileUploadSingle(
      this.FileUploadRepository
    )
    .execute( file, `kitchen1/${type}` )
    .then( uploaded => res.json(uploaded) )
    .catch( error => this.handleError(error, res));
  }

  public fileUploadMultiple = (req: Request, res: Response) => {
    new FileUploadMultiple();
  }
}