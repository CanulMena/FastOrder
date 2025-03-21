import { User } from "../../entities";
import { OrderRepository } from '../../repositories/order.repository';
import { Order } from '../../entities/order.entity';
import { DishRepository } from "../../repositories";
import { CreateOrderDetailsDto, UpdateDishDto } from "../../dtos";
import { CustomError } from "../../errors";


interface CreateOrderDetailUseCase {
    execute(orderDetail: CreateOrderDetailsDto ): Promise<object>;
}

export class CreateOrderDetail implements CreateOrderDetailUseCase {
    constructor(
        private orderRepository: OrderRepository,
        private dishRepository: DishRepository,
    ) {}

    async execute(orderDetail: CreateOrderDetailsDto): Promise<object> {
        await this.orderRepository.getOrderById(orderDetail.orderId!);
        
        const dish = await this.dishRepository.getDishById(orderDetail.dishId);

        const requestServings = (orderDetail.fullPortion ?? 0) + (orderDetail.halfPortion ?? 0) * 0.5;

        if (requestServings > dish.availableServings) {
            throw CustomError.badRequest('Dish does not have enough available servings');
        }

        const orderDetailCreated = await this.orderRepository.createOrderDetail(orderDetail);
        return {
            orderDetail: orderDetailCreated
        }
    }
}