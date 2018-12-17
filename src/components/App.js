import React from 'react';
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Fruit from './Fruit';
import sampleFruits from '../sample-fruits';

class App extends React.Component {
  state = {
    fruits: {},
    order: {}
  };

  addFruit = fruit => {
    // take a copy of the exisitng state
    const fruits = { ...this.state.fruits };
    // add our new fruit to the fruits variable
    fruits[`fruit${Date.now()}`] = fruit;
    // set the new fruits object into state
    this.setState({
      fruits
    });
  };

  loadSampleFruits = () => {
    this.setState({
      fruits: sampleFruits
    });
  };

  addToOrder = key => {
    // take a copy of state
    const order = { ...this.state.order };
    // Add to order or increment amount
    order[key] = order[key] + 1 || 1;
    // Call setstate to update our state
    this.setState({ order });
  };

  render() {
    return (
      <div className="pick-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Daily Pick" />
          <ul className="fruits">
            {Object.keys(this.state.fruits).map(key => (
              <Fruit
                key={key}
                index={key}
                details={this.state.fruits[key]}
                addToOrder={this.addToOrder}
              />
            ))}
          </ul>
        </div>
        <Order fruits={this.state.fruits} order={this.state.order} />
        <Inventory
          addFruit={this.addFruit}
          loadSampleFruits={this.loadSampleFruits}
        />
      </div>
    );
  }
}

export default App;
