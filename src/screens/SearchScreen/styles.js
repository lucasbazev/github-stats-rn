import styled from 'styled-components/native';

export const ScreenContainer = styled.SafeAreaView`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: #121212;
`;

export const ContentContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 100%;
  height: 50%;
  padding: 24px;
`;

export const TopContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const BottomContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
