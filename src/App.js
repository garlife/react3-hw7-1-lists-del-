import React from 'react';
import './style.css';

// const Item = ({id, name, price }) => {
//   return(
//     <>
//     <tr key={id}>
//       <td>{id}</td>
//       <td>{name}</td>
//       <td>{price}</td>
//       <td>
//         <button onClick={() => delete(id)}>delete</button>
//       </td>
//     </tr>
//     </>
//   )
// }

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  componentDidMount(props) {
    this.setState({
      products: [
        { id: 1, name: 'Товар 1', price: 1000 },
        { id: 2, name: 'Товар 2', price: 2000 },
        { id: 3, name: 'Товар 3', price: 3000 },
        { id: 4, name: 'Товар 4', price: 4000 },
      ],
    });
  }

  delete = (targetId) => {
    this.setState({
      products: this.state.products.filter(({ id }) => id !== targetId),
    });
  };

  create = () => {
    const count = 10;
    this.setState({
      products: [
        ...this.state.products,
        { id: count, name: 'Новый товар', price: '10000' },
      ],
    });
  };
  // update = (targetId, name, price) => this.setState({
  //   products: this.state.products.map(
  //     product => product.id !== targetId ? product : 
  //     { id: targetId, name: name, price: price }
  //   )
  // })

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>name</th>
              <th>price</th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {this.state.products.map(({ id, name, price }) => (
              //  <Item key={id} id={id} name={name} price={price} delete={this.delete(id)} />
              <tr key={id}>
                <td>{id}</td>
                <td>{name}</td>
                <td>{price}</td>
                <td>
                  <button onClick={() => this.delete(id)}>delete</button>
                  {/* <button onClick={() => this.update(id, name, price)}>update</button> */}
                </td>
              </tr>
            ))}
            <tr>
              <td>
                <td></td>
                <button onClick={() => this.create()}>
                  create
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
