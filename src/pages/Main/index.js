import React from 'react';
import Header from '~/components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Tabs from '~/components/Tabs';
import Menu from '~/components/Menu';

import {
  Container,
  Content,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Title,
  Description,
  Annotation,
} from './styles';

export default function Main() {
  return (
    <Container>
      <Header />
      <Content>
        <Menu />
        <Card>
          <CardHeader>
            <Icon name="attach-money" size={28} color="777" />
            <Icon name="visibility-off" size={28} color="777" />
          </CardHeader>
          <CardContent>
            <Title>Available to withdraw</Title>
            <Description> $ 5.280.876,65</Description>
          </CardContent>
          <CardFooter>
            <Annotation>
              Transfer of U$25,000 received from Sergio Carlos Rosa today at 06:00pm
            </Annotation>
          </CardFooter>
        </Card>
      </Content>

      <Tabs />
    </Container>
  );
}
