import { NextFunction, Request, Response } from 'express';



export class TypeMiddleware {


  static validTypes( validTypes: string[] ) {

    return ( req: Request, res: Response, next: NextFunction ) => {

      // const type = req.url.split('/').at(2) ?? '';
      const type = req.params.type;

      if ( !validTypes.includes( type ) ) {
        res.status( 400 ).json( { error: `Invalid type: ${ type }, valid ones ${ validTypes }` } );
        return;
      }

      next();

    };


  }



}