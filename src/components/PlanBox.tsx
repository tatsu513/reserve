import { Box, Typography } from '@mui/material';
import React, { useCallback } from 'react';

type Plan = {
  name: string;
  price: number;
};

type PlanBoxProps = {
  plan: Plan;
  onClick: (plan: Plan) => void;
};

const PlanBox: React.VFC<PlanBoxProps> = ({ plan, onClick }) => {
  const handleClick = useCallback(() => {
    onClick(plan);
  }, [plan, onClick]);
  return (
    <Box onClick={handleClick}>
      <Typography>{plan.name}</Typography>
      <Typography>{plan.price}</Typography>
    </Box>
  );
};

export default PlanBox;
