import { ReactNode } from "react";
import styled from "@emotion/styled";
import Header from "./header/header.container";

interface LayoutProps {
  children: ReactNode;
}

const Body = styled.div``;

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Header />
      <Body>{props.children}</Body>
    </>
  );
}
