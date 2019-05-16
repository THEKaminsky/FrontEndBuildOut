import _ from "lodash";

const data = require("../../schema.json");

export const listItems = data.filter(
  item => _.has(item, "containing_object") || _.has(item, "properties")
);

export const gatherGeneralInfoItems = data.filter(
  item =>
    item.data_type == "string" ||
    item.data_type == "boolean" ||
    item.data_type == "number"
);

export const titleCase = arrayOfStrings =>
  _.startCase(arrayOfStrings.split("_").join(" "));

export const stringifyAppKeys = appKeys =>
  appKeys.map((string, index) =>
    appKeys.length - 1 == index
      ? _.startCase(string.split("_").join(" "))
      : _.startCase(string.split("_").join(" ")) + ` / `
  );
