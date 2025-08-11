import auth from '@react-native-firebase/auth';

export const registerUser = async props => {
  try {
    const user = await auth().createUserWithEmailAndPassword(
      props.email,
      props.password,
    );
    await user.user.updateProfile({
      displayName: `${props.firstName} ${props.lastName}`,
    });
    return {state: 'success', message:'User registered successfully'};
  } catch(error) {
    if(error.code === 'auth/email-already-in-use') {
      return {state: 'error', message:'That email address is already in use!'};
    } else if(error.code === 'auth/invalid-email') {
      return {state: 'error', message:'That email address is invalid!'};
    }
  }
};
