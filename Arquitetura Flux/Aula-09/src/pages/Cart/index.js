import React from 'react';
import {MdAddCircleOutline, MdRemoveCircleOutline, MdDelete} from 'react-icons/md'
import { Container, ProductTable, Total } from './styles';

function Cart() {
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
          <tr>
            <td>
              <img src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ts=1586961574&" alt=""/>

            </td>
            <td>
              <strong>Tenis Bâo</strong>
              <span>120</span>
            </td>
            <td>
              <div>
                  <button>
                    <MdRemoveCircleOutline size={20} color="#7159c1"/>
                  </button>
                  <input type="number" readOnly value={1}/>
                  <button>
                    <MdAddCircleOutline size={20} color="#7159c1"/>
                  </button>
              </div>
            </td>
            <td>
              <strong>R$ 150,00</strong>
            </td>
            <td>
              <button type="button">
                <MdDelete size={20} color="red"/>
              </button>
            </td>
          </tr>
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

export default Cart;