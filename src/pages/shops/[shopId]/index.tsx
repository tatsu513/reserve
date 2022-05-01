import { Box, Typography } from '@mui/material';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import React, { useCallback, useState } from 'react';
import shopData from '../../../../shopData';
import PlanBox from 'components/PlanBox';

type Plan = {
  name: string;
  price: number;
};

type Props = {
  name: string;
  address: string;
  plans: Plan[];
};

const Index: NextPage<Props> = ({ name, address, plans }) => {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const selectPlan = useCallback((plan: Plan) => {
    setSelectedPlan(plan);
  }, []);
  return (
    <Box>
      <Typography variant='h3'>{name}</Typography>
      <Typography>{address}</Typography>
      {plans.map((plan, index) => (
        <Box
          key={index}
          sx={{
            backgroundColor:
              plan.name === selectedPlan?.name ? 'green' : 'white',
          }}
        >
          <PlanBox plan={plan} onClick={selectPlan} />
        </Box>
      ))}
    </Box>
  );
};

export default Index;

type PathParams = {
  shopId: string;
};

export const getStaticPaths: GetStaticPaths<PathParams> = async () => {
  return {
    paths: shopData.map((shop) => ({ params: { shopId: shop.shopId } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  if (context.params == null) {
    return {
      notFound: true,
    };
  }

  const { shopId } = context.params;
  if (shopId == null || typeof shopId !== 'string') {
    return {
      notFound: true,
    };
  }

  const shop = shopData.find((shop) => shop.shopId === shopId);
  if (shop == null) {
    return {
      notFound: true,
    };
  }
  return { props: shop };
};
