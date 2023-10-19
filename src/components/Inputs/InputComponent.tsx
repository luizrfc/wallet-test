import React from 'react';
import { IconsList } from '../Button/ButtonComponent';
import { View } from 'react-native';
import InputLabel from './InputLabel';
import { stylesInput } from './inputsStyle';
import InputIcon from './InputIcon';
import { ControllerRenderProps, FieldError } from 'react-hook-form';
import InputText from './InputText';
import InputMask from './InputMask';
import InputHelperText from './InputHelperText';

type MasksList = "date" | "credit_card" | "cpf";
interface InputsProps {
    field: ControllerRenderProps<any, any>;
    label?: string;
    mask?: MasksList;
    icon?: IconsList;
    maxLength?: number;
    placeholder?: string;
    helperText?: FieldError;
}

const Input = (props: InputsProps): JSX.Element => {
    console.log('FIELD', props.helperText)
    return (
        <View style={stylesInput.grid}>
            <View>
                {props.label && <InputLabel label={props.label} />}
            </View>
            <View style={[stylesInput.default, props.helperText && stylesInput.error]}>
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
            {props.helperText && <InputHelperText message={props.helperText.message} />}
        </View>
    )
}

export default Input