import React from "react";
import { ResponseFetchUsers } from "./Services";

export const clientList: ResponseFetchUsers[] = [
  {
    id: 1,
    page: "Marketing",
    description: "This is the marketing team",
    status: "live",
  },
  {
    id: 2,
    page: "Branding",
    description: "This the company's brand",
    status: "draft",
  },
  {
    id: 3,
    page: "Pricing",
    description: "Prices for different subscriptions",
    status: "error",
  },
];
