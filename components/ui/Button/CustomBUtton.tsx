import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import { purple } from '@mui/material/colors';

// #FF009B

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: 'white',
  backgroundColor: '#FF009B',
  '&:hover': {
    backgroundColor: 'black', // 호버 상태에서의 배경색을 검정색으로 설정
    borderColor: '#FF009B', // 호버 상태에서의 테두리 색상을 #FF009B로 설정
    borderWidth: 1,
    borderStyle: 'solid'
  },
}));

export default function CustomizedButtons() {
  return (
      <ColorButton variant="contained">검색</ColorButton>  
  );
}
