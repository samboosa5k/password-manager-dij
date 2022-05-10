import styled, { CSSProperties } from 'styled-components';

export const BaseContainer = styled.div<Partial<CSSProperties>>`
  ${(props) => props.display && `display: ${props.display};`}
  ${(props) => props.position && `position: ${props.position};`}
  ${(props) => props.width && `width: ${props.width};`}
  ${(props) => props.height && `height: ${props.height};`}
  ${(props) => props.minWidth && `min-width: ${props.minWidth};`}
  ${(props) => props.minHeight && `min-height: ${props.minHeight};`}
  ${(props) => props.maxWidth && `max-width: ${props.maxWidth};`}
  ${(props) => props.maxHeight && `max-height: ${props.maxHeight};`}
  ${(props) => props.margin && `margin: ${props.margin};`}
  ${(props) => props.padding && `padding: ${props.padding};`}
  ${(props) =>
    props.backgroundColor && `background-color: ${props.backgroundColor};`}
  ${(props) => props.border && `border: ${props.border};`}
  ${(props) => props.borderRadius && `border-radius: ${props.borderRadius};`}
  ${(props) => props.boxSizing && `box-sizing: ${props.boxSizing};`}
  ${(props) => props.flexDirection && `flex-direction: ${props.flexDirection};`}
  ${(props) => props.flexWrap && `flex-wrap: ${props.flexWrap};`}
  ${(props) => props.flex && `flex: ${props.flex};`}
  ${(props) =>
    props.justifyContent && `justify-content: ${props.justifyContent};`}
  ${(props) => props.alignItems && `align-items: ${props.alignItems};`}
  ${(props) => props.alignContent && `align-content: ${props.alignContent};`}
  ${(props) => props.inset && `inset: ${props.inset};`}
  ${(props) => props.overflow && `overflow: ${props.overflow};`}
`;

export default BaseContainer;
