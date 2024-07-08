import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { useState } from 'react';
import Formtext from '../../components/form/form-text';
import FormSelect from '../../components/form/form-select';
import Button from '../../components/button/button';
import { category, subCategory } from '../../datas/tokopedia';
import RadioButtonGroup, { RadioButtonItem } from 'expo-radio-button';
import { router } from 'expo-router';
import { useCalyContext } from '../../store/store';
import { addTokped } from '../../store/actions';
import CustomTabs from '../../components/tabs/tab';
import { addCommas, removeNonNumeric } from '../../utils/utils';

const TokpedTabs = () => {
  const { state, dispatch } = useCalyContext();

  const [active, setActive] = useState(1);
  const [subCat, setSubCat] = useState([]);
  const [error, setError] = useState({
    category: '',
    sub: '',
    price: '',
    profit: '',
    cost: '',
  });
  const [data, setData] = useState({
    category: '',
    sub: '',
    price: null,
    disc: null,
    shipment: null,
    profit: null,
    cost: null,
  });

  const onSubmit = () => {
    if (active === 1) {
      if (data.price && data.category && data.sub) {
        addTokped(dispatch, {
          price: data.price,
          disc: data.disc ? data.disc : 0,
          sub: data.sub?.value,
          extra: data.shipment === 2 ? 5000 : 0,
          shipment: data?.shipment,
        });
        router.push('/tokped-fee');
      } else {
        setError({
          price: data.price ? data.price : 'error',
          sub: data.sub ? data.sub : 'error',
          category: data.category ? data.category : 'error',
        });
      }
    } else {
      if (data.price && data.category && data.sub && data.profit && data.cost) {
        addTokped(dispatch, {
          price: data.price,
          disc: data.disc ? data.disc : 0,
          sub: data.sub?.value,
          profit: data.profit,
          cost: data.cost,
          extra: data.shipment === 2 ? 5000 : 0,
          shipment: data?.shipment,
        });
        router.push('/tokped-price');
      } else {
        setError({
          price: data.price ? data.price : 'error',
          sub: data.sub ? data.sub : 'error',
          category: data.category ? data.category : 'error',
          profit: data.profit ? data.profit : 'error',
          cost: data.cost ? data.cost : 'error',
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
            <Formtext
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
            <Formtext
              label='Diskon/Kupon Toko (Jika Ada)'
              value={data?.disc}
              placeholder='Masukkan Diskon/Kupon Toko'
              handleChangeText={(e) => setData({ ...data, disc: e })}
            />
          </View>
          {active === 2 && (
            <>
              <View className='my-2'>
                <Formtext
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
                <Formtext
                  label='Biaya Operasional (Packaging, dll)'
                  value={data?.cost}
                  placeholder='Masukkan Biaya Operasional'
                  handleChangeText={(e) => {
                    setData({ ...data, cost: e });
                    setError({ ...error, cost: e });
                  }}
                  error={error.cost}
                />
              </View>
            </>
          )}
          <View className='my-2'>
            <RadioButtonGroup
              selected={data?.shipment}
              onSelected={(e) => setData({ ...data, shipment: e })}
              containerOptionStyle={{ marginBottom: 8 }}
              radioBackground='#3d52a0'
            >
              <RadioButtonItem value={4} label='Bebas Ongkir' />
              <RadioButtonItem value={2} label='Bebas Ongkir Extra' />
            </RadioButtonGroup>
          </View>
          <Button
            title='Submit'
            handlePress={onSubmit}
            containerStyles='w-full mt-7 bg-primary'
            textStyle='text-xl'
          />
        </View>

        {/* <StatusBar backgroundColor='' style='light' /> */}
      </ScrollView>
    </>
  );
};

export default TokpedTabs;
