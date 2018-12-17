import React from 'react';

class AddFruitFrom extends React.Component {
  nameRef = React.createRef();
  priceRef = React.createRef();
  statusRef = React.createRef();
  descRef = React.createRef();
  imageRef = React.createRef();

  createFruit = event => {
    // stop default
    event.preventDefault();

    const fruit = {
      nameRef: this.nameRef.value.value,
      priceRef: parseFloat(this.priceRef.value.value), // 1054
      statusRef: this.statusRef.value.value,
      descRef: this.descRef.value.value,
      imageRef: this.imageRef.value.value
    };

    this.props.addFruit(fruit);
    // refesh the form
    event.currentTarget.reset();
  };

  render() {
    return (
      <form className="fruit-edit" onSubmit={this.createFruit}>
        <input name="name" ref={this.nameRef} type="text" placeholder="Name" />
        <input
          name="price"
          ref={this.priceRef}
          type="text"
          placeholder="Price"
        />

        <select name="status" ref={this.statusRef}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>

        <textarea name="desc" ref={this.descRef} placeholder="Desc" />
        <input
          name="image"
          ref={this.imageRef}
          type="text"
          placeholder="Image"
        />
        <button type="submit">+ Add Fruit</button>
      </form>
    );
  }
}

export default AddFruitFrom;
