import { Stack } from 'expo-router';
import HeaderCard from '../../components/headers/header-card';

const ProfileLayout = () => {
  return (
    <>
      <HeaderCard title='Profile' />
      <Stack>
        <Stack.Screen
          name='profile'
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
};

export default ProfileLayout;
