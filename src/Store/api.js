import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosApi } from '../helper/ApiHelper';

// login api
export const CountryCardapi = createAsyncThunk(
    "country/CountryCardapi", async () => {
        const response = await axiosApi.get("/all?fields=name,region,flag,");
        return response
    })

    // export const cartProduct = createAsyncThunk(
    //     "cart/cartProduct", async (data) => {
    //         const response = await axiosApi.post('/cartProduct/new',data.createData);
    //         data.navigate("/user-cart")
    //         return response.data;
    //     })
    //   const initialState = {
    //     value: 0,
    //   }
      