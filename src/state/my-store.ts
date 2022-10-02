import create from "zustand/vanilla";
import StoreController from "./storeController";

type MyStore = {
  bears: number;
  addBears: () => void;
};

export const myStore = create<MyStore>((set) => ({
  bears: 0,
  addBears: () =>
    set((state) => ({
      bears: state.bears + 1,
    })),
}));

export const storeController = new StoreController<MyStore>(myStore);
