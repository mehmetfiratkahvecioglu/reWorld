import create from 'zustand';

const useBearStore = create((set, get) => ({
  bears: 0,
  role: 'değişmedi',
  increasePopulation: () => set(state => ({bears: state.bears + 1})),
  changeRole: payload => set({role: payload}),
}));

export default useBearStore;
