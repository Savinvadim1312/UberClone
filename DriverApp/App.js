/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import Amplify, {
  Auth,
  API,
  graphqlOperation,
} from 'aws-amplify';
import config from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react-native';
import { getCarId } from './src/graphql/queries';
import { createCar } from './src/graphql/mutations';


Amplify.configure(config);

const App: () => React$Node = () => {

  useEffect(() => {
    const updateUserCar = async () => {
      // Get authenticated user
      const authenticatedUser = await Auth.currentAuthenticatedUser({ bypassCache: true });
      if (!authenticatedUser) {
        return;
      }

      // Check if the user has already a car
      const carData = await API.graphql(
        graphqlOperation(
          getCarId,
          { id: authenticatedUser.attributes.sub }
        )
      )

      if (!!carData.data.getCar) {
        console.log("User already has a car assigned");
        return;
      }

      // If not, create a new car for the user
      const newCar = {
        id: authenticatedUser.attributes.sub,
        type: 'UberX',
        userId: authenticatedUser.attributes.sub,
      }
      await API.graphql(graphqlOperation(
        createCar, { input: newCar }
      ))
    };

    updateUserCar();
  }, [])

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>
    </>
  );
};

export default withAuthenticator(App);
