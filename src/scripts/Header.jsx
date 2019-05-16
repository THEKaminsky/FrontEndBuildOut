import React, { Component } from "react";
import styled from "styled-components";

const Header = () => {
  return <StyledHeader>EverTrue Code Assessment</StyledHeader>;
};

const StyledHeader = styled.div`
  color: #36454f;
  font-weight: 400;
  font-size: 2.5rem;
  padding: 1rem 4rem 1rem 0;
  text-align: right;
  border-bottom: solid 1px grey;
  background-color: ##fff;
  box-shadow: 2px 4px 3px 4px grey;
`;

export default Header;
