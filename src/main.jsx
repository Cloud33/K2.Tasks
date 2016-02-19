/**
 * App entry point
 */

// Polyfill
import "babel-core/polyfill";

// Libraries
import React from "react";
import ReactDOM from 'react-dom';
import Router from "react-router";
import injectTapEventPlugin from 'react-tap-event-plugin';

// Common utilities
//import Session from "./common/session";

// Base styling
import "./common/base.css";

// Routers
import LoggedOutRouter from "./routers/logged_out";
import LoggedInRouter from "./routers/logged_in";

injectTapEventPlugin();
// ID of the DOM element to mount app on
const DOM_APP_EL_ID = "app";
if (!window.sessionStorage.TasksUser) {
  let getQueryString=function(name){
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  let r = window.location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]); return null;
}
let account=getQueryString('uc_account');
let token=getQueryString('uc_token');
// Initialize routes depending on session
if (account||token) {
  window.sessionStorage.Account=account;
  window.sessionStorage.Token=token;
}
};

let routes;
//console.log("Login info account:"+account+",token:"+token);
if (window.sessionStorage.TasksUser) {
  routes = LoggedInRouter.getRoutes();
} else {
  if (window.sessionStorage.Account||window.sessionStorage.Token) {
    routes = LoggedInRouter.getRoutes();
  }
  else{
    routes = LoggedOutRouter.getRoutes();
  };
  
}

/**
 * Given a set of routes and params associated with the current active state,
 * call #fetchData(params) on all Route Handlers that define that static method.
 *
 * This is the main mechanism by which a route handler (page)
 * requests its data.
 *
 * @example Defining a route handler that requests data
 *
 *  var SomePage = React.createClass({
 *    statics: {
 *      fetchData(params) {
 *        return getData({
 *          data: {...}
 *        })
 *      }
 *    }
 *  })
 *
 *  Given a Route handler:
 *    <Route name="some-page" handler={SomePage} />
 *
 *  when it becomes activated, it will be passed a {data} prop containing the response:
 *    <SomePage data="..." />
 *
 *
 * @param  {[Route]} routes list of activated routes
 * @param  {[Param]} params route params
 *
 * @return {Promise}        data containing responses mapped by route name

let fetchData = function(routes, params) {
  let data = {};

  return Promise.all(routes
    .filter(route => route.handler.fetchData)
    .map(route => {
      return route.handler.fetchData(params).then(resp => {
        data[route.name] = resp;
      })
    })
  ).then(() => data);
}
 */
// Start the router
Router.run(routes, Router.HistoryLocation, function(Handler, state) {
    ReactDOM.render(<Handler/>, document.getElementById(DOM_APP_EL_ID));
});
