import { REQUEST_GET_USER } from "../actions/UserAction";

const initialState = {
   id: "",
   name: "",
   email: "",
   listToDo: [],
};

export default (state = initialState, { type, payload }) => {
   switch (type) {
      case REQUEST_GET_USER:
         return payload;
      default:
         return state;
   }
};
