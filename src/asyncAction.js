<<<<<<< HEAD
import {legacy_createStore as createStore} from 'redux'

const redux=require('redux')
//const createStore=redux.createStore
const initialState={
  loading:false,
  users:[],
  error:''
}
const FETCH_USERS_REQUEST='FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS='FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE='FETCH_USERS_FAILURE'

const fetchUsersRequest=()=>{
  return{
    type:FETCH_USERS_REQUEST
  }
}
const fetchUsersSuccess=(users)=>{
  return{
    type:FETCH_USERS_SUCCESS,
    Payload:users
  }
}
const fetchUsersFailure=(error)=>{
  return{
    type:FETCH_USERS_FAILURE,
    payload:error
  }
}
const reducer=(state=initialState,action)=>{
  switch(action.type){
    case FETCH_USERS_REQUEST:return{
      ...state,loading:true
    }
    case FETCH_USERS_SUCCESS:return{
      ...state,loading:false,
      users:action.payload,
      error:''
    }
    case FETCH_USERS_FAILURE:return{
      ...state,loading:false,
      users:[],
      error:action.payload
    }
  }
}
=======
import {legacy_createStore as createStore} from 'redux'

const redux=require('redux')
//const createStore=redux.createStore
const initialState={
  loading:false,
  users:[],
  error:''
}
const FETCH_USERS_REQUEST='FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS='FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE='FETCH_USERS_FAILURE'

const fetchUsersRequest=()=>{
  return{
    type:FETCH_USERS_REQUEST
  }
}
const fetchUsersSuccess=(users)=>{
  return{
    type:FETCH_USERS_SUCCESS,
    Payload:users
  }
}
const fetchUsersFailure=(error)=>{
  return{
    type:FETCH_USERS_FAILURE,
    payload:error
  }
}
const reducer=(state=initialState,action)=>{
  switch(action.type){
    case FETCH_USERS_REQUEST:return{
      ...state,loading:true
    }
    case FETCH_USERS_SUCCESS:return{
      ...state,loading:false,
      users:action.payload,
      error:''
    }
    case FETCH_USERS_FAILURE:return{
      ...state,loading:false,
      users:[],
      error:action.payload
    }
  }
}
>>>>>>> 2536e8cf81f204f59cb24b6aab47eed0c1560bb8
const store=createStore(reducer)