import React from 'react';
import { connect } from 'react-redux'
import {MdAddCircleOutline, MdRemoveCircleOutline, MdDelete} from 'react-icons/md'
import { Container, ProductTable, Total } from './styles';
import {bindActionCreators} from 'redux'
import * as CartActions from '../../store/modules/cart/actions'
function Cart({cart , removeFromCart, updateAmount}) {

  function increment(carrinho){
    updateAmount(carrinho.id, carrinho.amount + 1);
  }
  
  function decrement(carrinho){
    updateAmount(carrinho.id, carrinho.amount - 1);
  }
  
  return (
   <Container>
     <ProductTable>
        <thead>
          <tr>
            <th></th>
            <th>Produto</th>
            <th>Quantidade</th>
            <th>Subtotal</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {cart.map(carrinho => (     
            <tr key={carrinho.id}>
              <td>
                  <img src={carrinho.image} alt=""/>
              </td>
              <td>
                <strong>Tenis Bâo</strong>
                <span>120</span>
              </td>
              <td>
                <div>
                    <button>
                      <MdRemoveCircleOutline onClick={() => decrement(carrinho)} size={20} color="#7159c1"/>
                    </button>
                    <input type="number" readOnly value={carrinho.amount}/>
                    <button>
                      <MdAddCircleOutline onClick={() => increment(carrinho)} size={20} color="#7159c1"/>
                    </button>
                </div>
              </td>
              <td>
                <strong>R$ 150,00</strong>
              </td>
              <td>
                <button type="button">
                  <MdDelete size={20} color="red" onClick={ () => removeFromCart(carrinho.id)}/>
                </button>
              </td>
            </tr>

          ))}
        
        </tbody>
     </ProductTable>

     <footer>
       <button type="Button"> finalizar pedido</button>
      <Total>
        <span>Total</span>
        <strong>R$: 120,00</strong>
      </Total>
     </footer>
   </Container>
  );
}
const mapStateToProps = state =>({
  cart: state.cart
})
const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Cart);