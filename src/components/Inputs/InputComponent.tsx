import React from 'react';
import { IconsList } from '../Button/ButtonComponent';
import { View } from 'react-native';
import InputLabel from './InputLabel';
import { stylesInput } from './inputsStyle';
import InputIcon from './InputIcon';
import { ControllerRenderProps } from 'react-hook-form';
import InputText from './InputText';
import InputMask from './InputMask';

type MasksList = "date" | "credit_card" | "cpf";
interface InputsProps {
    field: ControllerRenderProps<any, any>;
    label?: string;
    name: string;
    mask?: MasksList;
    icon?: IconsList;
    validate?: (value: string) => boolean;
    maxLength?: number;
    minLength?: number;
    placeholder?: string;
}

const Input = (props: InputsProps): JSX.Element => {
    return (
        <View style={stylesInput.grid}>
            <View>
                {props.label && <InputLabel label={props.label} />}
            </View>
            <View style={stylesInput.default}>
                {props.icon && <InputIcon icon={props.icon} />}
                <View style={{ width: props.icon ? "80%" : "100%" }}>
                    {!props.mask ?
                        (<InputText
                            placeholder={props.placeholder}
                            maxLength={props.maxLength}
                            value={props.field.value}
                            onChangeText={props.field.onChange}
                            onBlur={props.field.onBlur}
                        />) : (<InputMask
                            maskName={props.mask}
                            placeholder={props.placeholder}
                            maxLength={props.maxLength}
                            value={props.field.value}
                            onChangeText={props.field.onChange}
                            onBlur={props.field.onBlur}
                        />)
                    }
                </View>
            </View>
        </View>
    )
}

export default Input