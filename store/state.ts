import create from "zustand";

interface InputValue {
  email: string;
  name: string;
  phone: string;
  country: string;
  message: string;
}

type State = {
  inputValue: InputValue;
  setInputValue: (newInputValue: Partial<InputValue>) => void;
};

export const useStore = create<State>((set) => ({
  inputValue: {
    email: "",
    name: "",
    phone: "",
    country: "",
    message: "",
  },
  setInputValue: (newInputValue) =>
    set((state) => ({
      inputValue: { ...state.inputValue, ...newInputValue },
    })),
}));
