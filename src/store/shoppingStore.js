import { create } from 'zustand'

export const useShoppingStore = create((set) => ({
  shopList: [],
  addProductInToCart: (product) => set((state) => ({ shopList: [...state.shopList, product] })),
  removeProductInToCart: (productId) => set((state) =>( { shopList: state.shopList.filter(product => product.id !== productId) })),
}))

