import React from "react";
import styled from "styled-components";

const TopSectionContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 13%;
  z-index: 99;
`;

const Name = styled.h1`
  margin: 0;
  color: #fff;
  font-weight: 600;
  font-size: 80px;
`;

const DonateButton = styled.button`
  outline: none;
  border: none;
  background-color: #FE3399;
  color: #fff;
  font-size: 16px;
  font-weight: 700;
  border-radius: 8px;
  padding: 8px 2em;
  margin-top: 3em;
  cursor: pointer;
  border: 2px solid transparent;
  transition: all 350ms ease-in-out;
  &:hover {
    background-color: transparent;
    border: 2px solid #FE3399;
  }
`;
const Paragraph = styled.p`
  margin: 0;
  margin-top: 3em;
  color: #fff;
  font-size: 14px;
  line-height: 1.5;
  font-weight: 500;
  max-width: 30%;
  text-align: center;
`;

export function TopSection() {
  return (
    <TopSectionContainer>
      <Name>Himandri Sharma</Name>
      <Paragraph>Hey, welcome to my first ever threeJS project. <br/>This is a confetti planet!</Paragraph>
      <a href="http://himandrisharma.tk/"><DonateButton>Know more about me</DonateButton></a>
    </TopSectionContainer>
  );
}