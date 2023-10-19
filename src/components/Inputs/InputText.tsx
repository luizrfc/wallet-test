import React, { ComponentProps } from 'react';
import { TextInput } from 'react-native';
import { Colors } from '../../styles/themeStyle';

type InputTextProps = ComponentProps<typeof TextInput>;

const InputText = (props: InputTextProps): JSX.Element => {
    return <TextInput
        placeholderTextColor={Colors.grey}
        {...props}
    />
}

export default InputText;