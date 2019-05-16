import React from "react";

import _ from "lodash";
import Table from "./Table";
import { listItems, titleCase } from "./utils";

// This is the component that builds the list of everything thats
// not a general information item.
const NonGeneralTable = props => {
  const itemIndex = props.match.params.id;
  const item = Object.entries(listItems)[itemIndex][1];
  const items = _.has(item, "containing_object")
    ? item.containing_object.properties
    : item.properties;
  const title = titleCase(item.name);

  return <Table {...{ title, items }} />;
};

export default NonGeneralTable;
