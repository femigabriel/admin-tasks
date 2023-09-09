import React from "react";
import { ResponseFetchUsers } from "./Services";

export const clientList: ResponseFetchUsers[] = [
  {
    id: 1,
    page: "Account",
    description: "Sales Lledger",
    status: "live",
  },
  {
    id: 2,
    page: "Administration",
    description: "HR training",
    status: "draft",
  },
  {
    id: 3,
    page: "Procurement",
    description: "Lists of items",
    status: "error",
  },
];
