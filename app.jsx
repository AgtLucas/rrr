var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var Link = Router.Link;

var About = React.createClass({
  render: function () {
    return <h2>About</h2>;
  }
});

var Inbox = React.createClass({
  render: function () {
    return <h2>Inbox</h2>;
  }
});

var Home = React.createClass({
  render: function () {
    return (
      <div>
        <h2>Home</h2>
        <Link to="inbox">Inbox</Link>
      </div>
    );
  }
});

var Message = React.createClass({
  render: function () {
    return <h3>Message</h3>;
  }
});

var routes = (
  <Route handler={App}>
    <Route handler={Home}/>
    <Route path="about" handler={About}/>
    <Route path="inbox" handler={Inbox}>
      <Route path="messages/:id" handler={Message}/>
    </Route>
  </Route>
);

var App = React.createClass({
  render () {
    return (
      <div>
        <h1>App</h1>
        <RouteHandler/>
      </div>
    );
  }
});

Router.run(routes, Router.HistoryLocation, (Root) => {
  React.render(<Root />, document.getElementById('main-content'));
});