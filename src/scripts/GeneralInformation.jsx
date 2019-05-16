import React from "react";

import Table from "./Table";
import { gatherGeneralInfoItems } from "./utils";

//This is just the Table component for the General Information list
const GeneralInformation = () => (
  <Table title="General Information" items={gatherGeneralInfoItems} />
);

export default GeneralInformation;
