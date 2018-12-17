import React from 'react';
import AddFruitFrom from './AddFruitForm';

class Inventory extends React.Component {
  render() {
    return (
      <div className="inventory">
        <h2>Inventory</h2>
        <AddFruitFrom addFruit={this.props.addFruit} />
        <button onClick={this.props.loadSampleFruits}>
          Load sample fruits
        </button>
      </div>
    );
  }
}

export default Inventory;
