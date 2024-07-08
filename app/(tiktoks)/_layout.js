import { Stack } from 'expo-router';
import HeaderCard from '../../components/headers/header-card';

const TiktokLayout = () => {
  return (
    <>
      <HeaderCard title='tiktok' />
      <Stack>
        <Stack.Screen
          name='tiktok'
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='tiktok-fee'
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name='tiktok-price'
          options={{
            headerShown: false,
          }}
        />
      </Stack>
    </>
  );
};

export default TiktokLayout;
