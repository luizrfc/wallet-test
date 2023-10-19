import React from 'react';

import Button, { IconsList } from '../Button/ButtonComponent';
import { stylesInput } from './inputsStyle';
import { View } from 'react-native';

interface InputIconProps {
    icon?: IconsList;
}

const InputIcon = (props: InputIconProps): JSX.Element => {
    return <View style={stylesInput.icon}>
        <Button type="rounded" handleClick={() => { return }} icon={props.icon} />
    </View>
}

export default InputIcon;