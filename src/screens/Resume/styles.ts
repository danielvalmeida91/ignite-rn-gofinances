import styled from 'styled-components/native';

import { Feather } from '@expo/vector-icons';
import { BorderlessButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex:1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary};

  height: ${RFValue(113)}px;
  align-items: center;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.shape};
  font-family: ${({ theme }) => theme.fonts.regular};
  padding-bottom: 18px;
`;

export const Content = styled.ScrollView``;

export const ChartContainer = styled.View`
  width:100%;
  align-items: center;
`;

export const Month = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size:${RFValue(20)}px;
`;

export const MonthSelect = styled.View`
  width: 100%;

  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 24px;
`;

export const MonthSelectButton = styled(BorderlessButton)``;

export const MonthSelectIcon = styled(Feather)`
  font-size:${RFValue(24)}px;
`;

export const LoadContainer = styled.View`
  flex:1 ;
  align-items: center;
  justify-content: center;
`;
