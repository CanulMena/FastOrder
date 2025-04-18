import { CreateOrderDetailsDto, CreateOrderDto, PaginationDto, UpdateOrderDto } from "../dtos";
import { Order, OrderDetail } from "../entities";

export abstract class OrderRepository {
  abstract createOder(order: CreateOrderDto): Promise<Order>;
  abstract updateOrder(order: UpdateOrderDto, orderDetailsEntity: OrderDetail[]): Promise<Order>;
  abstract getOrderById(orderId: number): Promise<Order>;
  abstract getOrderDetailById(orderDetailId: number): Promise<OrderDetail>;
  abstract deleteOrder(orderId: number, orderDetails: OrderDetail[]): Promise<Order>;
  abstract getOrderDetailsByOrderId(orderId: number,): Promise<OrderDetail[]>
  abstract getOrders(pagination: PaginationDto): Promise<Order[]>;
  abstract getOrdersCount(): Promise<number>;
  abstract getOrdersByKitchenIdCount(kitchenId: number): Promise<number>;
  abstract getOrdersByKitchenId(kitchenId: number, pagination: PaginationDto): Promise<Order[]>;

  // orderDetail
  abstract createOrderDetail(orderDetail: CreateOrderDetailsDto): Promise<OrderDetail>;
  abstract deleteOrderDetail(orderDetailId: number): Promise<OrderDetail>;
}