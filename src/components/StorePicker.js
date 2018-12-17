import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this)
  // }

  myInput = React.createRef();

  goToStore = event => {
    event.preventDefault();
    // get the text from that input
    const storeId = this.myInput.value.value;
    // change the page to /store/whaterver
    this.props.history.push(`/store/${storeId}`);
  };

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input
          type="text"
          placeholder="Store Name"
          ref={this.myInput}
          defaultValue={getFunName()}
          required
        />
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePicker;
