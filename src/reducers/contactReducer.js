import uuid from 'uuid';
import { GET_CONTACTS, ADD_CONTACT, DELETE_CONTACT } from '../actions/types';


const initialState = {
    contacts: [
         {
          id: uuid(),
          name: 'Harvey Specter',
          email: 'harveys@gmail.com',
          number: '+61-34242443',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-dk5YL2kHb0umyNafZ_AUdkHX6ByQ2-i6cku4__TPUVNDiVdr'
         },
         {
          id: uuid(),
          name: 'Mike Ross',
          email: 'miker@gmail.com',
          number: '+61-54352544',
          imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTByfULw_Vf_yQH65sZqNy_RCzbPhtYqfJJK4TKMKxKFCdlt6TI'
         },
         {
          id: uuid(),
          name: 'Donna',
          email: 'donna@gmail.com',
          number:'+61-452454533',
          imageUrl: 'https://www.usanetwork.com/sites/usanetwork/files/styles/629x720/public/2018/07/suits_cast_donna_s8.jpg?itok=7HTuJK5W'
         }
       ]
}

export default function(state = initialState, action) {
    switch (action.type) {
        case GET_CONTACTS: 
        return {
            ...state
        };
        case DELETE_CONTACT: 
        return {
            ...state,
            contacts: state.contacts.filter(contact => contact.id !== action.payload)
        };
        case ADD_CONTACT:
        return {
            ...state,
            contacts: [action.payload, ...state.contacts]
        };
        default:
            return state;
    }
}