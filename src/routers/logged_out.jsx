import React from "react";
import { Route} from "react-router";
import ErrorPage from "../Error/page";

export default class LoggedOutRouter extends React.Component {
  render() {
    return <ErrorPage error="没有获取相关的用户信息，请联系管理员。"/>;
  }

  static getRoutes = function() {
    return (
      <Route name="app" path="/" handler={LoggedOutRouter}>
      </Route>
    );
  }
}
