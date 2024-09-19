import {create} from "zustand";

// Create a store for managing moreDetails and quote
export const useStore = create((set) => ({
  moreDetails: false, // Default value
  toggleMoreDetails: () => set((state) => ({ moreDetails: !state.moreDetails })),
  
  quote: null, // Default state for quote
  setQuote: (quote) => set({ quote }),

  fetchQuote: async () => {
    const quoteData = await fetch("https://quotes-api-self.vercel.app/quote");
    const quotePayload = await quoteData.json();
    set({ quote: quotePayload });
  }
}));
