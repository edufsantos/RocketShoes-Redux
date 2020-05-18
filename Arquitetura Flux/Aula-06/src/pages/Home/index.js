import React from 'react';
import { ProductList } from './styles';
import { MdAddShoppingCart} from 'react-icons/md'
function Home() {
  return(
    <ProductList>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ts=1586961574&" alt=""/>
        <strong>Tenis Bâo</strong>
        <span>R$: 120,0</span>
        
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
            3
          </div>
          <span>Add to cart</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ts=1586961574&" alt=""/>
        <strong>Tenis Bâo</strong>
        <span>R$: 120,0</span>
        
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
            3
          </div>
          <span>Add to cart</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ts=1586961574&" alt=""/>
        <strong>Tenis Bâo</strong>
        <span>R$: 120,0</span>
        
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
            3
          </div>
          <span>Add to cart</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ts=1586961574&" alt=""/>
        <strong>Tenis Bâo</strong>
        <span>R$: 120,0</span>
        
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
            3
          </div>
          <span>Add to cart</span>
        </button>
      </li>
      <li>
        <img src="https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_zoom1.jpg?ts=1586961574&" alt=""/>
        <strong>Tenis Bâo</strong>
        <span>R$: 120,0</span>
        
        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" />
            3
          </div>
          <span>Add to cart</span>
        </button>
      </li>
    </ProductList>  
  );
}

export default Home;