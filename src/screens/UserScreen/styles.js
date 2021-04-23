import styled from 'styled-components/native';

export const ScreenContainer = styled.SafeAreaView`
  height: 100%;
  width: 100%;
  background-color: #121212;
`;

export const ContentContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 48px 24px;
`;

export const TopContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 22%;
  margin-bottom: 40px;
`;

export const BottomContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;
