import React from 'react';
// import {useSelector} from 'react-redux';
import ApplicationNavigator from './Application';
import AuthNavigator from './AuthNavigator';
//import {RootState} from 'types';

const Index: React.FC = () => {
  // const {userInfo, userToken} = useSelector((state: RootState) => state.user);
  // if (userInfo && userToken) {
  //return <ApplicationNavigator />;
  // }
  return <AuthNavigator />;
};

export default Index;
