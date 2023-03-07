import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useContext } from 'react'
import { View, Text } from 'react-native'

import Context from '../context';

export const Welcome = () => {
  const value = useContext(Context);

  const logOut = () => {
    console.log('Trying...');
    
    async function removeItemValue() {
        try {
            await AsyncStorage.removeItem('@storage_Key_Kobe');
            value.logOut();
            return true;
        }
        catch(exception) {
            return false;
        }
    }
    removeItemValue();
  }

  return (
    <View>
        <Text>Welcome {value.profile.FName} </Text>
    </View>
   
  )
}

