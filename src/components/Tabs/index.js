import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container, TabsContainer, TabItem, TabText,
} from './styles';

export default function Tabs() {
  return (
    <Container>
      <TabsContainer>
        <TabItem>
          <Icon name="person-add" size={24} color="#FFF" />
          <TabText>Recommend a Friends</TabText>
        </TabItem>
        {/* 2-tab */}
        <TabItem>
          <Icon name="chat-bubble-outline" size={24} color="#FFF" />
          <TabText>Billed</TabText>
        </TabItem>
        {/* 3-tab */}
        <TabItem>
          <Icon name="arrow-downward" size={24} color="#FFF" />
          <TabText>Deposit</TabText>
        </TabItem>
        {/* 4th-tab */}
        <TabItem>
          <Icon name="arrow-upward" size={24} color="#FFF" />
          <TabText>Transfer</TabText>
        </TabItem>
        {/* 5th-tab */}
        <TabItem>
          <Icon name="lock" size={24} color="#FFF" />
          <TabText>Block your card</TabText>
        </TabItem>
      </TabsContainer>
    </Container>
  );
}
