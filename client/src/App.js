import React, { useEffect } from "react";
import { connect } from "react-redux";
import "./App.css";
import useRoutes from "./routes";
import { checkAuth } from "./store/auth-reducer";
import Header from "./components/Header/Header";
import { Layout } from "antd";

const { Content, Footer } = Layout;

function App(props) {
  const routes = useRoutes();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      console.log("useEffect");
      props.checkAuth();
    }
  }, []);

  return (
    <Layout>
      <Header />
      <Content className="App">{routes}</Content>
      <Footer className="App-footer">Footer</Footer>
    </Layout>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuth: state.authReducer.isAuth,
  };
};

export default connect(mapStateToProps, { checkAuth })(App);
