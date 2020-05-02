import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { User } from "./components/User";
import { Page } from "./components/Page";

class App extends Component {
  render() {
    const { name, year, photos } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Мой топ фото</h1>
        </header>
        <p className="App-intro">Здесь будут мои самые залайканые фото</p>
        <User name={name} />
        <Page year={year} photos={photos} />
      </div>
    );
  }
}

const mapStateToProps = (store) => {
  const { user, page } = store;
  return {
    name: user.name,
    year: page.year,
    photos: page.photos,
  };
};

export default connect(mapStateToProps)(App);
