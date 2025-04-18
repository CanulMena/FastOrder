import { CreateSchedDishDto } from "../dtos";
import { SchedDish, WeekDays } from "../entities";

export abstract class SchedDishRepository {
  abstract createSchedDish( schedDish: CreateSchedDishDto ): Promise<SchedDish>;
  abstract findSchedDish( schedDish: CreateSchedDishDto ): Promise<null>;
  abstract findScheduledDishesByDay( weekDay: WeekDays ): Promise<SchedDish[]>;
  abstract findAllSchedDishByKitchen( kitchenId: number, weekDay: WeekDays ): Promise<SchedDish[]>;
}