import styled from 'styled-components';
import { Button } from 'semantic-ui-react';

export const Container = styled.div`
  width: 32%;
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
  margin-bottom: 20px;
  margin-right: 20px;
  background-color: rgba(238, 236, 236, 0.425);

  :nth-child(3n) {
    margin-right: 0px;
  }
`;

export const Wrapper = styled.div`
  padding: 15px;
`;
export const Title = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 20px;
`;
export const Description = styled.p`
  text-align: justify;
  font-size: 16px;
  line-height: 22px;
  margin-bottom: 20px;
`;
export const Price = styled.p`
  text-align: center;
  font-size: 18px;
  margin-bottom: 20px;
`;
export const StyledButton = styled(Button)`
  display: block !important;
  margin: 0 auto !important;
`;
export const CountContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;
export const Count = styled.p`
  margin: 0;
  text-align: center;
  font-size: 18px;
  font-weight: 600;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 2px;
`;
