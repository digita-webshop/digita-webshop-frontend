import { IOrder } from "../../Services/Types/user";
import { api } from "../api";

interface GetOrdersResponse {
  code: number;
  message: string;
  data: IOrder[];
  total?: number;
}

interface OrderRequest {
  path: string;
  id: string;
}

export const ordersApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllOrders: build.query<GetOrdersResponse, void>({
      query: () => "orders",
      providesTags: ["Users", "Orders"],
    }),
    getUserOrders: build.query<GetOrdersResponse, OrderRequest>({
      query(data) {
        const { path: role, id } = data;
        const path = role === "user" ? "user" : "admin";
        return {
          url: `${path}s/my-orders/${id}`,
        };
      },
      providesTags: ["User", "Orders"],
    }),
    addOrder: build.mutation<any, { path: string; order: any }>({
      query(data) {
        const { path: role, order } = data;
        const path = role === "user" ? "user" : "admin";
        return {
          url: `${path}s/order`,
          method: "POST",
          body: order,
        };
      },
      invalidatesTags: ["User"],
    }),
    deleteOrder: build.mutation<any, OrderRequest>({
      query(data) {
        const { path, id } = data;
        return {
          url: `${path}s/orders/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Users", "User"],
    }),
  }),
});

export const {
  useGetAllOrdersQuery,
  useGetUserOrdersQuery,
  useAddOrderMutation,
  useDeleteOrderMutation,
} = ordersApi;
