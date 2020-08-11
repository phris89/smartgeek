import React, {Component} from 'react';
import { TextInput } from 'react-native';

//import InputStyles from 'inputForReg_Style';

export const InputForm = ({ placeholder }) => <TextInput placeholder={placeholder} /> //style={InputStyles.inputFormat}/>

/*export const InputStyles = StyleSheet.create({
    inputFormat: {
        height: 30,
        width: '94%',
        borderBottomColor: '#999999',
        borderBottomWidth: 0.5,
        marginTop: '5%',
        fontWeight: '500',
        fontSize: 17
    }
})*/

/*export default class InputForm extends Component {
    render(){
        const InputStyles = StyleSheet.create({
            inputFormat: {
            height: 30,
            width: '94%',
            borderBottomColor: '#999999',
            borderBottomWidth: 0.5,
            marginTop: '5%',
            fontWeight: '500',
            fontSize: 17
            }
        })

        return (
            <TextInput placeholder={placeholder} style={InputStyles.inputFormat}/>
        )
    }
 
}*/