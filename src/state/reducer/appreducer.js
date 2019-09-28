const appreducer = (state, action) => {
    switch (action.type) {
      case "CODE_FAILURE":
        return {
            ...state,
            myname: 'FAILED'
        };
      case "CODE_SUCCESS":
        return {
          ...state,
          myname: action.payload
        };
      case "CHANGE_CODE_SUCCESS":
        return {
          ...state,
          myname:action.payload
        };
      default:
        return state;
    }
  };

  export default appreducer;