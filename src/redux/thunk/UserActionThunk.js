import axios from "axios";
import { requestGetUser } from "../actions/UserAction";

export const requestGetuser = (id) => {
   return async (dispatch) => {
      try {
         const response = await axios({
            method: "GET",
            url: `https://todo-app-446be-default-rtdb.firebaseio.com/Users/${id}.json`,
         });
         dispatch(requestGetUser(response.data));
      } catch (e) {
         console.log(e);
      }
   };
};
