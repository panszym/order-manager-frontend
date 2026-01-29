export interface Order {
  id?: number;
  orderCode: string;
  client: string;
  dateTime: Date;
  status: string;
}