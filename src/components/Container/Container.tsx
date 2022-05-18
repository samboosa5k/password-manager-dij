import styled, { CSSProperties } from 'styled-components';

type Dimensions = Pick<
  CSSProperties,
  | 'width'
  | 'height'
  | 'minHeight'
  | 'minWidth'
  | 'minHeight'
  | 'maxHeight'
  | 'maxWidth'
>;
type StyleBases = Dimensions & Pick<CSSProperties, 'backgroundColor'>;
type Container = StyleBases &
  Pick<CSSProperties, 'position' | 'zIndex' | 'display' | 'padding' | 'margin'>;
type Flex = Container &
  Pick<
    CSSProperties,
    | 'flexDirection'
    | 'flexWrap'
    | 'justifyContent'
    | 'alignItems'
    | 'alignContent'
    | 'flex'
  >;

const Default = styled.div<Container>`
  position: ${(props: Container) => props.position};
  z-index: ${(props: Container) => props.zIndex};
  display: ${(props: Container) => props.display};
  background-color: ${(props: Container) => props.backgroundColor};
  width: ${(props: Container) => props.width};
  height: ${(props: Container) => props.height};
  max-width: ${(props: Container) => props.maxWidth};
  max-height: ${(props: Container) => props.maxHeight};
`;

const Container = styled(Default)<Container>`
  position: ${(props: Container) => props.position || 'relative'};
  z-index: ${(props: Container) => props.zIndex || '0'};
  display: ${(props: Container) => props.display || 'flex'};
  padding: ${(props: Container) => props.padding || '0'};
  margin: ${(props: Container) => props.margin || '0'};
`;

const Flex = styled(Container)<Flex>`
  flex-direction: ${(props: Flex) => props.flexDirection || 'column'};
  flex-wrap: ${(props: Flex) => props.flexWrap || 'nowrap'};
  justify-content: ${(props: Flex) => props.justifyContent || 'flex-start'};
  align-items: ${(props: Flex) => props.alignItems || 'center'};
  align-content: ${(props: Flex) => props.alignContent || 'flex-start'};
  flex: ${(props: Flex) => props.flex || '0'};
`;

export { Container, Flex };
