// お店のデータ
// APIが作成されたらこのファイルごと削除

type Plan = {
  name: string;
  price: number;
};

type ShopData = {
  shopId: string;
  name: string;
  address: string;
  plans: Plan[];
};

const shopData: Readonly<ShopData[]> = [
  {
    shopId: '1',
    name: 'ショップ１',
    address: '東京都',
    plans: [
      {
        name: 'プラン1',
        price: 1000,
      },
      {
        name: 'プラン2',
        price: 3000,
      },
      {
        name: 'プラン3',
        price: 5000,
      },
    ],
  },
  {
    shopId: '2',
    name: 'ショップ2',
    address: '東京都',
    plans: [
      {
        name: 'プラン1',
        price: 1000,
      },
      {
        name: 'プラン2',
        price: 3000,
      },
      {
        name: 'プラン3',
        price: 5000,
      },
    ],
  },
  {
    shopId: '3',
    name: 'ショップ2',
    address: '東京都',
    plans: [
      {
        name: 'プラン1',
        price: 1000,
      },
      {
        name: 'プラン2',
        price: 3000,
      },
      {
        name: 'プラン3',
        price: 5000,
      },
    ],
  },
];

export default shopData;
