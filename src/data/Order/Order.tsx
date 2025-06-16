export interface Food {
    id: number;
    name: string;
    vietnameseName: string;
    price: number;
}

export interface OrderDetail {
    id: number;
    quantity: number;
    food: Food;
}

export interface Orderr {
    id: number;
    address: string;
    orderDetails: OrderDetail[];
}

export interface OrderHistoryProps {
    orders: Orderr[];
}
