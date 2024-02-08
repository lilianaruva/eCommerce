import { create } from 'zustand'
import dummy from '../dummy.json'

export const useProductsStore = create((set) => ({
  productList: dummy,
  addProduct: (product) => set((state) => ({ productList: [...state.productList, product] })),
}))

