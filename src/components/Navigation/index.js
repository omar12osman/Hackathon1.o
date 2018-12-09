import React from "react";
import { Link } from "react-router-dom";
import SignOutButton from "../SignOut";
import * as ROUTES from "../../constants/routes";
import "react-mdl/extra/material.js";
import { Header, Layout, Navigation } from "react-mdl";

const navigation = ({ authUser }) => (
  <div>{authUser ? <NavigationAuth /> : <NavigationNonAuth />}</div>
);

const NavigationAuth = () => (
  <Layout>
    <Header className="header-color" title="Hackthon1.o" scroll>
      <Navigation>
        <Link to={ROUTES.LANDING}>Landing</Link>

        <Link to={ROUTES.HOME}>Home</Link>

        <Link to={ROUTES.ACCOUNT}>Account</Link>
      </Navigation>
      <SignOutButton />
    </Header>
  </Layout>
);

const NavigationNonAuth = () => (
  <Header className="header-color" title="Hackthon1.o" scroll>
    <Navigation>
      <Link to={ROUTES.LANDING}>Landing</Link>

      <Link to={ROUTES.SIGN_UP}> Sign up </Link>
    </Navigation>
  </Header>
);

export default navigation;
