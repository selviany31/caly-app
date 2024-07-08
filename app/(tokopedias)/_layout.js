import { Stack } from 'expo-router';
import HeaderCard from '../../components/headers/header-card';

const TokpedLayout = () => {
  return (
    <>
      <HeaderCard title='tokopedia' />
      <Stack>
        <Stack.Screen name='tokopedia' options={{ headerShown: false }} />
        <Stack.Screen name='tokped-fee' options={{ headerShown: false }} />
        <Stack.Screen name='tokped-price' options={{ headerShown: false }} />
      </Stack>
    </>
  );
};

export default TokpedLayout;
