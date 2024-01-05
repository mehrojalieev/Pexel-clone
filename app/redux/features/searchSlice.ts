import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { SearchData } from "@/app/types";

const searchFetch = createAsyncThunk("search", async (value, {rejectWithValue}) =>{
    try {
        const response = await fetch(` https://api.pexels.com/v1/search?query=Ocean&per_page=15`, {
            headers: {
                "Content-type": "application/json",
                "Authorization": "18vbdmk2H5xloXcJ2itWwg4fbSLxUAqYYteQo3EfukpIcsLUccclFPi7"
            }
            
        })
        if(response.status === 200){
                return response.json()
        }
        throw new Error("Something went wrong !")
    } 
    catch (error) {
        return rejectWithValue(error.message)
    }
})
const initialState: SearchData = {
    data:  [],
    isLoading: false,
    isSuccess: false,
    isError: false,
    message: null,
    value:  null
}

export const searchSlice = createSlice({
    name: "search",
    initialState,
    extraReducers: (builder) => {
        builder.addCase(searchFetch.pending, (state, action: PayloadAction<object>) => {
            state.isLoading = true
        })
        builder.addCase(searchFetch.fulfilled, (state, action: PayloadAction<object>) => {
            state.data = action.payload
            state.isLoading = false
            state.isSuccess = true
            state.message = "Successfully searched"
        })
        builder.addCase(searchFetch.rejected, (state, action: PayloadAction<object>) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
       
        })
    }
})


export {searchFetch};
export default searchSlice.reducer