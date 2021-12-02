import { CLICK_BUTTON } from "../actions/actionTypes";
import { CLEAR } from "../actions/actionTypes";
import { BACK_SPACE } from "../actions/actionTypes";
import { ANSWER } from "../actions/actionTypes";



const initialState = {
    number: '',
    ans: ''
}

const rootReducer = (state = initialState, action) => {
    let {type, payload} = action

    switch(type){
        case CLICK_BUTTON:
            console.log("action payload",typeof(action.payload))
            console.log("Type of number",typeof(state.number))
            return {
                ...state,
                ...payload, 
                number:state.number.concat(action.payload)
            }

            case ANSWER:
            try{ 
                return{
                    ...state, ...payload, 
                    ans: eval(state.number).toString()
                }
            }
            catch(err){
                return{
                    ...state, ...payload, 
                    ans: 'Error'
                }
            }

        case CLEAR:
            return{
                ...state, 
                ...payload, 
                ans:'',
                number: ''
            }

        case BACK_SPACE:
            return{
                ...state, 
                ...payload, 
                number: (state.number).slice(0, -1),
                ans:''
            }
        default:
            return { ...state }
    }
}


export default rootReducer;