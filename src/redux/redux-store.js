import {createStore,combineReducers} from 'redux'
import MessagePagereducer from './MessagePage-reducer';
import ContentPagereducer from './ContentPage-reducer';
import UsersPagereducer from './UsersPage-reducer';
import Authreducer from './auth-reducer';

let redusers = combineReducers({
    messagepagereducer: MessagePagereducer,
    contentpagereducer: ContentPagereducer,
    userspagereducer: UsersPagereducer,
    Authreducer: Authreducer
})

let store = createStore(redusers);

export default store;

