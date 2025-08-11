import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './src/module/main/MainScreen';
import { MainNavigation, TabsNavigator } from './src/navigation/MainNavigation';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <NavigationContainer>
          <MainNavigation/>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
