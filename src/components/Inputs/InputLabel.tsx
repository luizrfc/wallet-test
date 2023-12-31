import React from 'react';
import Text from '../TextComponent';
import { View } from 'react-native';
import { stylesInput } from './inputsStyle';
import { Colors } from '../../styles/themeStyle';

interface InputLabelProps {
    label?: string;
    testID?: string;
}

const InputLabel = (props: InputLabelProps): JSX.Element => {
    return <View style={stylesInput.label} testID={props.testID ?? 'input-test-id'}>
        <Text text={props.label ?? ''} type="small" color={Colors.grey} />
    </View>
}

export default InputLabel;