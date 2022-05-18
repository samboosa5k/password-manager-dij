import styled, { CSSProperties } from 'styled-components';

type Container = Pick<CSSProperties, 'position' | 'zIndex' | 'display' | 'padding' | 'margin'>
type Flex = Pick<CSSProperties, 'flexDirection' | 'flexWrap' | 'justifyContent' | 'alignItems' | 'alignContent' | 'flex'>

const Default = styled.div<Container>`
  position: relative;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 1em;
  box-sizing: border-box;
`;

const Container = styled(Default)<Container>`
  position: ${(props: Container) => props.position || 'relative'};
  z-index: ${(props: Container) => props.zIndex || '100'};
  display: ${(props: Container) => props.display || 'flex'};
  padding: ${(props: Container) => props.padding || '1em'};
  margin: ${(props: Container) => props.margin || '0'};
`;

const Flex = styled(Default)<Flex>`
  flex-direction: ${(props: Flex) => props.flexDirection || 'column'};
  flex-wrap: ${(props: Flex) => props.flexWrap || 'nowrap'};
  justify-content: ${(props: Flex) => props.justifyContent || 'flex-start'};
  align-items: ${(props: Flex) => props.alignItems || 'center'};
  align-content: ${(props: Flex) => props.alignContent || 'flex-start'};
`;

export { Container, Flex };