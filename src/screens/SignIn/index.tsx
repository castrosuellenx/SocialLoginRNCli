/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from 'styled-components/native';

import ButtonWithText from '@/components/ButtonWithText';
import SocialButtonsLeaf from '@/components/SocialButtonsLeaf';
import Header from '@/components/Header';
import * as S from './styles';

const SignIn: React.FC = () => {
  const theme = useTheme();

  return (
    <S.Container>
      <S.StatusBar
        barStyle={theme.colors.barStyle}
        backgroundColor={theme.colors.background.secondary}
      />

      <Header title="Login" />

      <S.Content>
        <ButtonWithText
          title="Sign in with email"
          onPress={() => {
            console.log('Sign in with email flux');
          }}
        />

        <S.Divisor>Or</S.Divisor>

        <SocialButtonsLeaf />

        <S.WrapperWithoutAccount>
          <S.TextWithoutAccount>Don't have an account?</S.TextWithoutAccount>

          <S.Button>
            <S.ButtonText>Sign Up</S.ButtonText>
          </S.Button>
        </S.WrapperWithoutAccount>
      </S.Content>
    </S.Container>
  );
};

export default SignIn;
