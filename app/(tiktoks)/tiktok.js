import { ScrollView, Text, View } from 'react-native';
import CustomTabs from '../../components/tabs/tab';
import { useState } from 'react';
import FormSelect from '../../components/form/form-select';
import { category, subCategory } from '../../datas/tiktok';
import FormText from '../../components/form/form-text';
import Checkbox from '../../components/form/checkbox';
import { addTiktok } from '../../store/actions';
import { router } from 'expo-router';
import Button from '../../components/button/button';
import { useCalyContext } from '../../store/store';

const TiktokForm = () => {
  const { state, dispatch } = useCalyContext();

  const [active, setActive] = useState(1);
  const [subCat, setSubCat] = useState([]);
  const [data, setData] = useState({
    category: '',
    sub: '',
    price: null,
    disc: null,
    shipment: false,
    profit: null,
    cost: null,
  });
  const [error, setError] = useState({
    category: '',
    sub: '',
    price: '',
    profit: '',
  });

  const onSubmit = () => {
    if (active === 1) {
      if (data.price && data.category && data.sub) {
        addTiktok(dispatch, {
          price: data.price,
          disc: data.disc ? data.disc : 0,
          sub: data.sub?.value,
          shipment: data?.shipment,
        });
        router.push('/tiktok-fee');
      } else {
        setError({
          price: data.price ? data.price : 'error',
          sub: data.sub ? data.sub : 'error',
          category: data.category ? data.category : 'error',
        });
      }
    } else {
      if (data.price && data.category && data.sub && data.profit && data.cost) {
        addTiktok(dispatch, {
          price: data.price,
          disc: data.disc ? data.disc : 0,
          sub: data.sub?.value,
          profit: data.profit,
          cost: data.cost,
          shipment: data?.shipment,
        });
        router.push('/tiktok-price');
      } else {
        setError({
          price: data.price ? data.price : 'error',
          sub: data.sub ? data.sub : 'error',
          category: data.category ? data.category : 'error',
          profit: data.profit ? data.profit : 'error',
        });
      }
    }
  };
  return (
    <>
      <ScrollView className='bg-calm h-full'>
        <View className='px-5 py-6'>
          <CustomTabs
            active={active}
            handleTab={(e) => {
              setActive(e);
              setData({
                category: '',
                sub: '',
                price: null,
                disc: null,
                shipment: null,
                profit: null,
                cost: null,
              });
            }}
          />
          <View className='my-2'>
            <FormSelect
              data={category?.map((el) => {
                return {
                  label: el,
                  value: el,
                };
              })}
              label='Kategori'
              value={data?.category}
              handleValue={(e) => {
                setData({ ...data, category: e });
                setSubCat(subCategory?.filter((el) => el.category === e));
                setError({ ...error, category: e });
              }}
              error={error?.category}
            />
          </View>
          <View className='my-2'>
            <FormSelect
              data={subCat?.map((el) => {
                return {
                  label: el.label,
                  value: el.label,
                };
              })}
              label='Sub Kategori'
              value={data?.sub?.label}
              handleValue={(e) => {
                setData({
                  ...data,
                  sub: subCat?.filter((el) => el.label === e)?.[0],
                });
                setError({ ...error, sub: e });
              }}
              error={error.sub}
            />
          </View>
          <View className='my-2'>
            <FormText
              label={active === 1 ? 'Harga Produk Awal' : 'Harga Modal'}
              value={data?.price}
              placeholder='Masukkan Harga'
              handleChangeText={(e) => {
                setData({ ...data, price: e });
                setError({ ...error, price: e });
              }}
              error={error.price}
            />
          </View>
          <View className='my-2'>
            <FormText
              label='Diskon/Kupon Toko (Jika Ada)'
              value={data?.disc}
              placeholder='Masukkan Diskon/Kupon Toko'
              handleChangeText={(e) => setData({ ...data, disc: e })}
            />
          </View>
          {active === 2 && (
            <>
              <View className='my-2'>
                <FormText
                  label='Keuntungan (%)'
                  value={data?.profit}
                  placeholder='Masukkan Keuntungan'
                  handleChangeText={(e) => {
                    setData({ ...data, profit: e });
                    setError({ ...data, profit: e });
                  }}
                  error={error.profit}
                />
              </View>
              <View className='my-2'>
                <FormText
                  label='Biaya Operasional (Packaging, dll)'
                  value={data?.cost}
                  placeholder='Masukkan Biaya Operasional'
                  handleChangeText={(e) => {
                    setData({ ...data, cost: e });
                    setError({ ...error, cost: e });
                  }}
                />
              </View>
            </>
          )}
          <View className='my-2'>
            <Checkbox
              checked={data.shipment}
              label='Gratis Ongkir EXTRA'
              handleCheck={() =>
                setData({
                  ...data,
                  shipment: !data.shipment,
                })
              }
              containerStyles='mb-2'
            />
          </View>
          <Button
            title='Submit'
            handlePress={onSubmit}
            containerStyles='w-full mt-7 bg-primary'
            textStyle='text-xl'
          />
        </View>
      </ScrollView>
    </>
  );
};

export default TiktokForm;
