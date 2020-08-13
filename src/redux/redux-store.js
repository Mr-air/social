import {createStore,combineReducers, applyMiddleware, compose} from 'redux'
import MessagePagereducer from './MessagePage-reducer';
import ContentPagereducer from './ContentPage-reducer';
import UsersPagereducer from './UsersPage-reducer';
import Authreducer from './auth-reducer';
import thunkMiddleware from 'redux-thunk';
import Appreducer from './app-reducer';



let redusers = combineReducers({
    messagepagereducer: MessagePagereducer,
    contentpagereducer: ContentPagereducer,
    userspagereducer: UsersPagereducer,
    Authreducer: Authreducer,
    Appreduscer: Appreducer
})



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(redusers,composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;

