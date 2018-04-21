import styled, {css} from 'styled-components';

export interface OptionsWrapperProps {
  disabled: boolean;
}

export const AppWrapper = styled.div`
  display: flex;
  max-height: 80vh;
  max-width: 90vw;
  box-shadow: 1px 5px 5px 1px rgba(0,0,0,.3);
  background: white;
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const OptionsWrapper = styled.div`
  ${(props: OptionsWrapperProps) => props.disabled ? css`
  opacity:.4;
  pointer-events: none;
  ` : ''
}
`;

export const CircleWrapper = styled.div`
  width: 70%;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:6em;
`;

export const OptionsSidebar = styled.div`
  width:30%;
  display:flex;
  flex-direction:column;
  padding:3em;
  border-right: 1px solid #e2e2e2;
  overflow: auto;
`;

export const TextFieldsWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  display:flex;
  flex-direction:column;
`;

export const CheckBoxWrapper = styled.div`
  padding-top:20px;
`;