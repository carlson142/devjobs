import { createSlice } from "@reduxjs/toolkit";
import data from "../data.json";

interface IData {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirements: {
    content: string;
    items: string[];
  };
  role: {
    content: string;
    items: string[];
  };
}

interface InStProps {
  originalData: IData[];
  filteredData: IData[];
  mainSearch: string;
  locationSearch: string;
}

const initialState: InStProps = {
  originalData: data,
  filteredData: data,
  mainSearch: "",
  locationSearch: "",
};

export const searchSlice = createSlice({
  name: "searchSlice",
  initialState,
  reducers: {
    setMainSearch: (state, action) => {
      state.mainSearch = action.payload;
    },

    setLocationSearch: (state, action) => {
      state.locationSearch = action.payload;
    },

    setUpdate: (state) => {
      state.filteredData = state.originalData;
    },

    setFiltered: (state, action) => {
      if (action.payload.mainSearch === "")
        state.filteredData = state.originalData;

      if (action.payload.locationSearch === "")
        state.filteredData = state.originalData;

      if (action.payload.mainSearch) {
        state.filteredData = state.originalData.filter(
          (el) =>
            el.company
              .toLowerCase()
              .includes(action.payload.mainSearch.toLowerCase()) ||
            el.position
              .toLowerCase()
              .includes(action.payload.mainSearch.toLowerCase())
        );
      }

      if (action.payload.locationSearch) {
        state.filteredData = state.originalData.filter((el) =>
          el.location.toLowerCase().includes(action.payload.locationSearch)
        );
      }

      if (action.payload.fullTime) {
        state.filteredData = state.filteredData.filter(
          (el) => el.contract === "Full Time"
        );
      }
    },
  },
});

export const { setFiltered, setMainSearch, setLocationSearch, setUpdate } =
  searchSlice.actions;
export default searchSlice.reducer;
