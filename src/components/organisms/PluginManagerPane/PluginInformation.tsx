import React from 'react';

import styled from 'styled-components';

import {AnyPlugin} from '@models/plugin';

import Colors from '@styles/Colors';

const Container = styled.div`
  width: 100%;
  display: flex;
`;

const IconContainer = styled.span`
  height: 50px;
  width: 50px;
`;

const InfoContainer = styled.span`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span`
  font-weight: 600;
`;

const Description = styled.span`
  font-weight: 300;
`;

const Footer = styled.span`
  display: flex;
  justify-content: space-between;
`;

const Author = styled.span`
  color: ${Colors.grey500};
`;

const Version = styled.span`
  font-style: italic;
`;

function PluginInformation(props: {plugin: AnyPlugin}) {
  const {plugin} = props;
  return (
    <Container>
      <IconContainer>
        <span />
      </IconContainer>
      <InfoContainer>
        <Name>{plugin.name}</Name>
        <Description>{plugin.description || 'No description'}</Description>
        <Footer>
          <Author>{plugin.author}</Author> <Version>{plugin.version}</Version>
        </Footer>
      </InfoContainer>
    </Container>
  );
}

export default PluginInformation;
