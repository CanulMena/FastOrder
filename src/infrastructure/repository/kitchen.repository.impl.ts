import { KitchenDatasource } from '../../domain/datasource';
import { CreateKitchenDto, UpdateKitchenDto } from '../../domain/dtos/kitchen/index';
import { Kitchen } from '../../domain/entities/index'; 
import { KitchenRepository } from '../../domain/repositories';

export class KitchenRepositoryImpl implements KitchenRepository {

  constructor(
    private datasource: KitchenDatasource
  ) {}

  createKitchen( kitchen : CreateKitchenDto ) : Promise<Kitchen>{
    return this.datasource.createKitchen(kitchen);
  }
  getKitchens() : Promise<Kitchen[]>{
    return this.datasource.getKitchens();
  }
  getKitchenById( kitchenId: number ) : Promise<Kitchen>{
    return this.datasource.getKitchenById(kitchenId);
  }
  deleteKitchen( kitchenId: number ) : Promise<Kitchen>{
    return this.datasource.deleteKitchen(kitchenId);
  }
  updateKitchen( kitchen: UpdateKitchenDto ) : Promise<Kitchen>{
    return this.datasource.updateKitchen(kitchen);
  }
}