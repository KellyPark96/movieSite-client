import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Navbar from "./Navbar";
import Drawer from "./Drawer";

export default function Layout() {
  return (
    <Wrapper>
      <Navbar />
      <Drawer />
      <ChildrenWrap>
        <Outlet />
      </ChildrenWrap>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: grid;
  gap: 8px;
  grid-template-columns: auto 1fr;
  grid-template-rows: 1fr auto;
  height: 100%;
  min-height: 100%;
  background-color: #000;
  margin-top: 68px;
`;
const ChildrenWrap = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  -ms-flex-direction: column;
  flex-direction: column;
  overflow: hidden;
`;
