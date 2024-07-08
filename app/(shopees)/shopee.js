import { ScrollView, Text, View } from 'react-native';
import CustomTabs from '../../components/tabs/tab';
import { useState } from 'react';
import FormSelect from '../../components/form/form-select';
import { subCategory, category } from '../../datas/shopee';
import FormText from '../../components/form/form-text';
import Checkbox from '../../components/form/checkbox';
import Button from '../../components/button/button';
import { addData } from '../../store/actions';
import { useCalyContext } from '../../store/store';
import { router } from 'expo-router';

const ShopeeTabs = () => {
  const { dispatch } = useCalyContext();

  const [active, setActive] = useState(1);
  const [subCat, setSubCat] = useState([]);
  const [checked, setChecked] = useState({
    cashback: false,
    shipment: false,
  });
  const [error, setError] = useState({
    category: '',
    sub: '',
    seller: '',
    price: '',
    profit: '',
    cost: '',
  });
  const [data, setData] = useState({
    category: '',
    sub: '',
    seller: '',
    price: null,
    disc: null,
    voucher: null,
    profit: null,
    cost: null,
    cashback: false,
    shipment: false,
  });

  const onSubmit = () => {
    if (active === 1) {
      if (data.price && data.category && data.sub && data.seller) {
        addData(dispatch, {
          price: data.price,
          disc: data.disc ? data.disc : 0,
          sub: data.sub?.value,
          seller: data.seller,
          voucher: data.voucher ? data.voucher : 0,
          cashback: data.cashback,
          shipment: data?.shipment,
        });
        router.push('/shopee-fee');
      } else {
        setError({
          price: data.price ? data.price : 'error',
          sub: data.sub ? data.sub : 'error',
          category: data.category ? data.category : 'error',
          seller: data.seller ? data.seller : 'error',
        });
      }
    } else {
      if (data.price && data.category && data.sub && data.profit && data.cost) {
        addData(dispatch, {
          price: data.price,
          disc: data.disc ? data.disc : 0,
          sub: data.sub?.value,
          seller: data.seller,
          profit: data.profit,
          cost: data.cost,
          voucher: data.voucher ? data.voucher : 0,
          cashback: data.cashback,
          shipment: data?.shipment,
        });
        router.push('/shopee-price');
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
    <ScrollView className='bg-calm h-full'>
      <View className='px-5 py-6'>
        <CustomTabs
          active={active}
          handleTab={(e) => {
            setActive(e);
            setData({
              category: '',
              sub: '',
              seller: '',
              price: null,
              disc: null,
              voucher: null,
              profit: null,
              cost: null,
              cashback: false,
              shipment: false,
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
            data={subCat.map((el) => {
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
            error={error?.sub}
          />
        </View>
        <View className='my-2'>
          <FormSelect
            data={[
              {
                value: 'non-star',
                label: 'Non Star',
              },
              {
                value: 'star',
                label: 'Star/Star+',
              },
            ]}
            label='Seller'
            value={data?.seller}
            handleValue={(e) => {
              setData({ ...data, seller: e });
              setError({ ...error, seller: e });
            }}
            error={error?.seller}
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
            label='Diskon Penjual'
            value={data?.disc}
            placeholder='Masukkan Diskon'
            handleChangeText={(e) => {
              setData({ ...data, disc: e });
              setError({ ...error, disc: e });
            }}
            error={error.disc}
          />
        </View>
        <View className='my-2'>
          <FormText
            label='Voucher Penjual'
            value={data?.voucher}
            placeholder='Masukkan Voucher'
            handleChangeText={(e) => {
              setData({ ...data, voucher: e });
              setError({ ...error, voucher: e });
            }}
            error={error.voucher}
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
                error={error.cost}
              />
            </View>
          </>
        )}
        <View className='my-2'>
          <Checkbox
            checked={data.cashback}
            label='Cashback XTRA'
            handleCheck={() =>
              setData({
                ...data,
                cashback: !data.cashback,
              })
            }
            containerStyles='mb-2'
          />
          <Checkbox
            checked={data.shipment}
            label='Gratis Ongkir XTRA'
            handleCheck={() =>
              setData({
                ...data,
                shipment: !data.shipment,
              })
            }
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
  );
};

export default ShopeeTabs;
