import create from "zustand";

export const usePricesStore = create((set) => ({
  res: [],
  setRes: (res) =>
    set({
      res,
    }),
}));
