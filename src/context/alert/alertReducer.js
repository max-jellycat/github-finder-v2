 import {
   SET_ALERT,
   CLEAR_ALERT
 } from '../types'

 export default (state, action) => {
   switch (action.type) {
     case SET_ALERT:
       return {
         message: action.payload.message,
         type: action.payload.type
       }
      case CLEAR_ALERT:
        return null
     default:
       return state
   }
 }