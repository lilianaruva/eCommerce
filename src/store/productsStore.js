import { create } from 'zustand'
import dummy from '../dummy.json'

export const useProductsStore = create((set) => ({
  productList: dummy,
  auxProductList: dummy,
  addProduct: (product) => set((state) => ({ productList: [...state.productList, product] })),
  sortProductsByName: () => set((state) => ({
    productList: [...state.productList.sort((a, b) => a.name.localeCompare(b.name))]
  })),
  resetProductList: () => set((state) => ({
    productList: state.auxProductList
  }))
}))

