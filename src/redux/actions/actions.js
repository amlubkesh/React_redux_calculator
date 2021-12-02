import { CLICK_BUTTON } from "./actionTypes";
import { CLEAR } from "./actionTypes";
import { BACK_SPACE } from "./actionTypes";
import { ANSWER } from "./actionTypes";



export const clickButton = (number) =>{
  return {
    type: CLICK_BUTTON,
    payload: number
  }
}
export const answer = (number) =>{
  return {
    type: ANSWER,
    payload: number
  }
}
export const backspace = (number) =>{
  return {
    type: BACK_SPACE,
    payload: number
  }
}


export const clickClear = (number) =>{
  return {
    type: CLEAR,
    payload: number
  }
}
