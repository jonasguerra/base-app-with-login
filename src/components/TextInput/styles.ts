import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Error = styled.Text`
  font-size: ${RFValue(14)}px;
  margin: 5px 0px 10px 0px;
  color: ${({ theme }) => theme.colors.error};
`;
