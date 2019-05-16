import _ from "lodash";
import React from "react";
import styled from "styled-components";

import { titleCase, stringifyAppKeys } from "./utils";

const Wrapper = styled.div`
  border: 1px solid #e4e2db;
  background: #fff;
  border-radius: 4px;
  margin: 2rem 6rem 2rem 6rem;
  padding: 1rem 1.5rem;
`;

const StyledTable = styled.table`
  border: 1px solid #e4e2db;
  border-radius: 2px;
  width: 100%;
  margin: 1rem auto 1rem auto;
`;

const TD = styled.td`
  font-size: 1rem;
  padding: 0.5rem 0 0.5rem 1rem;

  &:not-first-child {
    border-top: 1px solid #787162;
  }

  &:nth-child(odd) {
    background: #f2f4f2;
    width: 30%;
  }
`;

const Caption = styled.caption`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
  text-align: left;
  color: #40799c;
`;

const StyledCode = styled.code`
  color: #c94436;
  font-size: 1.5rem;
  align-text: center;
`;

const Table = ({ items, title }) => {
  return (
    <div>
      <h1>{title}</h1>
      {items.map((item, index) => {
        return (
          <Wrapper key={index}>
            <StyledTable id={item.name}>
              <Caption>{titleCase(item.name)}</Caption>
              <tbody>
                <tr>
                  <TD>Type</TD>
                  <TD>{item.data_type}</TD>
                </tr>
                <tr>
                  <TD>Usage</TD>
                  <TD>{stringifyAppKeys(item.app_keys)}</TD>
                </tr>
                <tr>
                  <TD>EverTrue Field Name</TD>
                  <TD>
                    <StyledCode>{item.name}</StyledCode>
                  </TD>
                </tr>
              </tbody>
            </StyledTable>
          </Wrapper>
        );
      })}
    </div>
  );
};

export default Table;
