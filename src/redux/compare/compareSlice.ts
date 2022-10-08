import { IProduct } from "../../types/product";
import { createSlice } from "@reduxjs/toolkit";

interface State {
  compareList: IProduct[];
  category: string;
}

const initialState: State = {
  compareList: [],
  category: "",
};

const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    addToCompareList(state, action) {
      const product = action.payload;

      if (state.compareList.length === 0) {
        state.compareList.push(product);
        console.log(product?.category);

        state.category = product?.category;
      } else if (
        product?.category === state.category &&
        product?._id !== state.compareList[0]._id &&
        state.compareList.length < 2
      ) {
        state.compareList.push(product);
      }
    },
    removeFromCompareList(state, action) {
      const id = action.payload;
      state.compareList = state.compareList.filter(
        (product) => product._id !== id
      );
      if (state.compareList.length === 0) {
        state.category = "";
      }
    },
  },
});

export const { addToCompareList, removeFromCompareList } = compareSlice.actions;
export default compareSlice.reducer;
