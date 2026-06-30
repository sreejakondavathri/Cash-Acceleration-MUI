export interface Contract {
  id: string;
  name: string;
  type: string;
  perPayment: string;
  termLength: string;
  fee: string;
  paymentAmount: string;
  financedAmount: string;
}

export interface CashKick {
  id: string;
  name: string;
  status: string;
  maturity: string;
  totalReceived: string;
  totalFinanced: string;
}