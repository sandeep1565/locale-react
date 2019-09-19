const defaultLanguage = "en";

import hi_locale from '../../data/hi.json';
import en_locale from '../../data/en.json';

export default function localeReducer(state={
    locale:defaultLanguage,
    localeData:en_locale
},action){
    switch(action.type){
        case 'UPDATE_LOCALE':
            switch(action.payload){
                case 'hi':
                     return {...state, locale:'hi', localeData: hi_locale};
                default:
                    return {...state, locale:'en', localeData: en_locale}
            }
        default:
            return state;
    }

}