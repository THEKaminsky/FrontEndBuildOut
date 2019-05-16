import Collapsible from "react-collapsible";
import _ from "lodash";
import React, { useState } from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
import styled from "styled-components";

import { listItems, titleCase, gatherGeneralInfoItems } from "./utils";

const Sidebar = () => {
  // React Hooks to handle the opening and closign of the sidebar categories
  const [isCurrentOpen, setCurrentOpen] = useState(null);

  // renderSidebarSubList is the logic for pulling out each item for the
  // sublist of links to the items
  const renderSidebarSubList = (item, parentIndex) => {
    let subLink = [];
    if (_.has(item, "containing_object")) {
      subLink = item.containing_object.properties.map(thing => (
        <SubLink
          key={thing.name}
          smooth
          to={`/${item.name}/${parentIndex}#${thing.name}`}
          activeClassName={"active"}
        >
          {titleCase(thing.name)}
        </SubLink>
      ));
    } else {
      subLink = item.properties.map(thing => (
        <SubLink
          key={thing.name}
          smooth
          to={`/${item.name}/${parentIndex}#${thing.name}`}
          activeClassName={"active"}
        >
          {titleCase(thing.name)}
        </SubLink>
      ));
    }
    return subLink;
  };

  // Using a separate function than renderSidebarSubList because the logic for
  // General Information Items is a bit different than gathering the other
  // sub list items.
  const renderGeneralInfoList = () => {
    const generalList = gatherGeneralInfoItems.map((thing, index) => (
      <SubLink
        key={index}
        smooth
        to={`/general#${thing.name}`}
        activeClassName={"active"}
      >
        {titleCase(thing.name)}
      </SubLink>
    ));
    return generalList;
  };

  return (
    <Wrapper>
      <SidebarTitle>Field Groups</SidebarTitle>
      <StyledSidebar>
        <Collapsible
          trigger={
            <Link to={"/general"} activeClassName={"active"}>
              General Info
            </Link>
          }
          onOpening={() => {
            isCurrentOpen != "general"
              ? setCurrentOpen("general")
              : setCurrentOpen(null);
          }}
          open={isCurrentOpen === "general"}
        >
          {renderGeneralInfoList()}
        </Collapsible>
        {listItems.map((item, index) => {
          return (
            <Collapsible
              key={index}
              trigger={
                <Link to={`/${item.name}/${index}`} activeClassName={"active"}>
                  {titleCase(item.name)}
                </Link>
              }
              onOpening={() => {
                isCurrentOpen != item.name
                  ? setCurrentOpen(`${item.name}`)
                  : setCurrentOpen(null);
              }}
              open={isCurrentOpen === `${item.name}`}
            >
              {renderSidebarSubList(item, index)}
            </Collapsible>
          );
        })}
      </StyledSidebar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100%;
  padding: 0 2rem;
`;

const SidebarTitle = styled.div`
  color: #fff;
  background: #45a8e3;
  text-transformation: uppercase;
  padding: 1rem;
  border-top-right-radius: 4px;
  border-top-left-radius: 4px;
`;

const StyledSidebar = styled.div`
  background-color: white;
  border-bottom-right-radius: 4px;
  border-bottom-left-radius: 4px;
`;

const Link = styled(NavLink)`
  padding: 0.5rem 1rem;
  text-decoration: none;
  font-size: 25px;
  color: black;
  display: block;
  border-left: solid 0.25rem darkGrey;

  &:hover,
  &.active {
    color: #45a8e3;
    border-left: solid 0.25rem #45a8e3;
    font-weight: 600;
  }
`;

const SubLink = styled(Link)`
  padding-left: 4rem;
`;

export default Sidebar;
