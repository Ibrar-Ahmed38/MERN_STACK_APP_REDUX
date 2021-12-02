import * as api from "../api/Index";

export const getPost = () => async (dispatch) => {
  try {
    const { data } = await api.fetchpost();
    console.log("getpost", data);
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (err) {
    console.log(err.message);
  }
};

