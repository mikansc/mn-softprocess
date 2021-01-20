import React from "react";
import Header from "../Header";
import "./DefaultPage.styles.css";

export default function DefaultPage({ children }) {
  return (
    <main className="default-container">
      <Header />
      {children}
    </main>
  );
}
