"use client";
import React from "react";

export default function ItemDetails({ params }:any) {

  return (
    <div>
      <h1>Item Details:</h1>
      <h4>Phone Name : {params.itemDetails}</h4>
    </div>
  );
}