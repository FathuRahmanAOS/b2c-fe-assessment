import { takeEvery, all } from 'redux-saga/effects';
import * as ActionTypeWidget from './constants'
import { handleGetWidget} from './sagas'

function *watchAll(){
    yield all([
        takeEvery(ActionTypeWidget.GET_WIDGET_REQUEST,handleGetWidget),
    ])  
}

export default watchAll;