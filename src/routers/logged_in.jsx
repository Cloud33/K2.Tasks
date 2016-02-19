import React from "react";
import { Route, DefaultRoute, RouteHandler, Link } from "react-router";

import TasksPage from "../pages/WorkflowTasks/page";
import TaskInfoPage from "../pages/WorkflowInfo/page";

export default class LoggedInRouter extends React.Component {
  render() {
    return (
      <div id="container">
        <RouteHandler {...this.props} />
      </div>
    );
  }
// 
  static getRoutes = function() {
    return (
      <Route name="app" path="/" handler={LoggedInRouter}>
        <DefaultRoute name="tasks" handler={TasksPage} />
        <Route name="taskInfo" path="task/:SN/?:ProcInstID/?:Destination/?:SharedUser" handler={TaskInfoPage} />
      </Route>
    );
  }

}
