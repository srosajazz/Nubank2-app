import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  margin: 0 30px;
  overflow: hidden;
`;

export const Code = styled.View`
  background: #fff;
  padding: 10px;
  align-self: center;
`;

export const Nav = styled.View`
  margin-top: 30px;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: rgba(255, 255, 255, 0.8);
`;
export const NavItem = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255, 255, 255, 0.8);
`;
export const NavText = styled.Text`
  font-size: 15px;
  color: #fff;
  margin-left: 20px;
`;
