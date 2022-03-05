import React from 'react';
import { useTheme } from 'styled-components/native';

import * as S from './styles';

const SignIn: React.FC = () => {
  const theme = useTheme();

  return (
    <S.Container>
      <S.StatusBar
        barStyle={theme.colors.barStyle}
        backgroundColor={theme.colors.background.light}
      />
      <S.Title>SignIn</S.Title>
    </S.Container>
  );
};

export default SignIn;
