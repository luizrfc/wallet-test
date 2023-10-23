import React from 'react';
import MaskInput, { MaskInputProps } from 'react-native-mask-input';

import { Colors } from '../../styles/themeStyle';
import useInput from './inputHook';

interface InputMaskProps extends MaskInputProps {
    maskName: string;
}

const InputMask = (props: InputMaskProps): JSX.Element => {
    const { selectMask } = useInput();

    return <MaskInput
        placeholderTextColor={Colors.grey}
        mask={selectMask(props.maskName)}
        {...props}
    />
}

export default InputMask;