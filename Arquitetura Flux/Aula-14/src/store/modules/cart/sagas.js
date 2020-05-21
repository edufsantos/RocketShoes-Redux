// o  * depois do function é uma funcionalidade do java script chamada generetor
//como se fosse async
import { call, put,all, takeLatest } from 'redux-saga/effects'
import api from '../../../services/api';
import { addToCartSuccess} from './actions'

function* addToCart({ id  }){
  const response = yield call(api.get, `/products/${id}`);
  yield put(addToCartSuccess(response.data));

} 

export default all([
  // takeLatest execulta a ultima funcao caso haja varias requisicoes simultanes
  takeLatest('@cart/ADD_REQUEST', addToCart),
]);