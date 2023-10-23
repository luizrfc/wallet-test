import React from 'react';
import { View } from 'react-native';

import Button, { IconsList } from '../Button/buttonComponent';
import { stylesInput } from './inputsStyle';

interface InputIconProps {
    icon?: IconsList;
}

const InputIcon = (props: InputIconProps): JSX.Element => {
    return <View style={stylesInput.icon}>
        <Button type="rounded" handleClick={() => { return }} icon={props.icon} />
    </View>
}

export default InputIcon;