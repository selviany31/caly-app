import HeaderCard from '../../components/headers/header-card';
import { Stack } from 'expo-router';

const ShopeeLayout = () => {
  return (
    <>
      <HeaderCard title='shopee' />
      <Stack>
        <Stack.Screen name='shopee' options={{ headerShown: false }} />
        <Stack.Screen name='shopee-fee' options={{ headerShown: false }} />
        <Stack.Screen name='shopee-price' options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default ShopeeLayout;
