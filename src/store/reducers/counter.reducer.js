import {COUNTRUP,COUNTRDOWN,COUNTRCLEAR,COUNTRMULTI} from '../actions/counter.action'
export function appReducer(state , action){
  switch(action.type){
    case COUNTRUP.type:
    return state+1
    case COUNTRDOWN.type:
      return state-1
    case COUNTRCLEAR.type:
      return 0
    case COUNTRMULTI:
      return state * 2
    default:
      return state
  }

}