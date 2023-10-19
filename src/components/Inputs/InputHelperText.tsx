import React from 'react';
import Text from '../TextComponent';
import { View } from 'react-native';
import { stylesInput } from './inputsStyle';
import { Colors } from '../../styles/themeStyle';

interface InputLabelProps {
    message?: string;
}

const InputHelperText = (props: InputLabelProps): JSX.Element => {
    return <View style={stylesInput.helperText}>
        <Text text={props.message ?? ''} type="small" color={Colors.error} />
    </View>
}

export default InputHelperText;