import { createSlice } from "@reduxjs/toolkit";
import { productData } from "../../Services/Utils/Data/data";

const initialState: any = {
  compareList: [],
  category: "",
};

const compareSlice = createSlice({
  name: "compare",
  initialState,
  reducers: {
    addToCompareList(state, action) {
      const id = action.payload;
      const product = productData.find((item) => item.id === +id);

      if (state.compareList.length === 0) {
        state.compareList.push(product);
        state.category = product?.category;
      } else if (
        product?.category === state.category &&
        product?.id !== state.compareList[0].id &&
        state.compareList.length < 2
      ) {
        state.compareList.push(product);
      }
    },
    removeFromCompareList(state, action) {
      const id = action.payload;
      state.compareList = state.compareList.filter(
        (product: any) => product.id !== +id
      );
    },
  },
});

export const { addToCompareList, removeFromCompareList } = compareSlice.actions;
export default compareSlice.reducer;
