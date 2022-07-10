import './App.css';
import { BrowserRouter, Route, Routes, useMatch } from "react-router-dom"
import TopNav from "./pages/topNav"
import SideNav from "./pages/sideNav"
import SideNavRight from "./pages/sideNavRight"
import Layout, { Content } from 'antd/lib/layout/layout';
import { routes } from "./router"
import FooterNav from "./pages/footerNav"


const App = () => {
  return (
    <BrowserRouter>
      <TopNav></TopNav>
      <Layout>
        <SideNav></SideNav>
        <Content style={{ marginTop: 100, width: "60%" ,height:"100%"}}>
          <Routes>
            {routes.map((props) => (
              <Route path={props.path} element={props.element}></Route>
            ))}
          </Routes>
        </Content>
        <SideNavRight></SideNavRight>
      </Layout>
      <FooterNav></FooterNav>

    </BrowserRouter>
  );
}
export default App;
