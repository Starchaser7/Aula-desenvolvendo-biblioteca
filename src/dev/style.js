import styled from 'styled-components';

export const Desc = styled.h1 `
  font-weight: bold;
  align-items: center;
  justify-content: center;
  position: relative;
	font-size: 22px;
	border: 2px solid #000;
	margin: 0;
	padding: 0;
	border: 0;
`;

export const Ext = styled.p`
  font-family: Arial, Helvetica, sans-serif;
  align-items: center;
  justify-content: center;
	margin: 0;
	padding: 0;
	border: 0;
`;

export const Container = styled.div`
	margin: 0;
	padding: 0;
	border: 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
	grid-row-gap: 50px;
`;