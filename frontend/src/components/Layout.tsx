import Contents from "./Contents";
import Header from "./Header";
import SideBar from "./SideBar";
import styled from "styled-components";

const Layout = () => {
  return (
    <>
      <SHeader>
        <Header></Header>
      </SHeader>

      <SBody>
        <SSideBar>
          <SideBar />
        </SSideBar>

        <SContents>
          <Contents />
        </SContents>
      </SBody>
    </>
  );
};

export default Layout;

const SHeader = styled.div`
  width: 100%;
  height: 32px;
  box-shadow: 0px 4px 4px #aaaaaa;
`;

const SBody = styled.div`
  width: 100%;
  height: calc(100vh - 32px);
  display: flex;
  flex-direction: row;
`;

const SSideBar = styled.div`
  border-right: 1px solid #222222;
  width: 30%;
  height: 100%;
`;

const SContents = styled.div`
  width: 100%;
  height: 100%;
`;
