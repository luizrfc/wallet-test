import { Masks, MaskArray } from "react-native-mask-input";

interface IInputHook {
    selectMask: (maskName: string) => MaskArray
}

const useInput = (): IInputHook => {
    const selectMask = (maskName: string): MaskArray => {
        switch (maskName) {
            case "date":
                return [/\d/, /\d/, "/", /\d/, /\d/];
            case "cpf":
                return Masks.BRL_CPF;
            default:
                return Masks.CREDIT_CARD
        }
    }
    return {
        selectMask
    }
}

export default useInput;