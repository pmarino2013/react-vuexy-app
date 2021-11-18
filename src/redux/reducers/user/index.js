// **  Initial State
const initialState = {
 username:'',
 role:'',
 avatar:''
 }
  
  const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'addUser':
        return { 
          username:action.value.username,
          role:action.value.role,
          avatar:action.value.avatar 
        
        }
        case 'clearUser':
        return { 
          username:'',
          role:'',
          avatar:'' 
        
        }
     
      default:
        return state
    }
  }
  
  export default userReducer