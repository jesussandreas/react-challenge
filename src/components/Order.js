import React from 'react';
import { formatPrice } from '../helpers';

class Order extends React.Component {
  renderOder = key => {
    const fruit = this.props.fruits[key];
    const count = this.props.order[key];
    const isAvailable = fruit.status === 'available';
    if (!isAvailable) {
      return (
        <li key={key}>
          Sorry {fruit ? fruit.name : 'fruit'} is no longer available
        </li>
      );
    }
    return (
      <li key={key}>
        {count} lbs {fruit.name}
        {formatPrice(count * fruit.price)}
      </li>
    );
  };
  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fruit = this.props.fruits[key];
      const count = this.props.order[key];
      const isAvailable = fruit && fruit.status === 'available';
      if (isAvailable) {
        return prevTotal + count * fruit.price;
      }
      return prevTotal;
    }, 0);
    return (
      <div className="order-wrap">
        <h2>Order</h2>
        <ul className="order">{orderIds.map(this.renderOder)}</ul>
        <div className="total">
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
