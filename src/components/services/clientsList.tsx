import React from "react";
import { ResponseFetchUsers } from "./Services";

export const clientList: ResponseFetchUsers[] = [
  {
    id: 1,
    page: "Account",
    description: "Sales Ledger",
    status: "active",
    start: " 2023-09-19",
    end: " 2023-09-19",
  },
  {
    id: 2,
    page: "Administration",
    description: "HR training",
    status: "pending",
    start: " 2023-09-19",
    end: " 2023-09-19",
  },
  {
    id: 3,
    page: "Procurement",
    description: "Lists of items",
    status: "complete",
    start: " 2023-09-19",
    end: " 2023-09-19",
  },
];
