interface Order {
  id: string;
  amount: number;
  currency: string;
}

interface Stripe {
  card: string;
  cvc: string;
}

interface PayPal {
  email: string;
}

type CheckoutCard = Order & Stripe;
type CheckoutPayPal = Order & PayPal;
// type CheckoutABC = Order & { name: string };

const order: Order = {
  id: 'xj28s',
  amount: 100,
  currency: 'USD'
};

const orderCard: CheckoutCard = {
  ...order,
  card: '1000 2000 3000 4000',
  cvc: '123'
};

const orderPayPal: CheckoutPayPal = {
  ...order,
  email: 'abc@def.com'
};

const assigned = Object.assign({}, order, orderCard);