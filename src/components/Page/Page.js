import React from "react";
import PropTypes from "prop-types";

export class Page extends React.Component {
  onBtnClick = (e) => {
    const year = +e.currentTarget.innerText;
    this.props.getPhotos(year);
    console.dir(this.props);
  };

  render() {
    const { year, photos, isFetching } = this.props;
    return (
      <div>
        <div className="btnContainer">
          <button onClick={this.onBtnClick}>2020</button>{" "}
          <button onClick={this.onBtnClick}>2019</button>{" "}
          <button onClick={this.onBtnClick}>2018</button>{" "}
          <button onClick={this.onBtnClick}>2017</button>{" "}
          <button onClick={this.onBtnClick}>2016</button>{" "}
        </div>
        <p className="page-string first-string">{year} год</p>
        {isFetching ? (
          <p className="page-string second-string">Загрузка...</p>
        ) : (
          <p className="page-string second-string">
            У тебя {photos.length} фото.
          </p>
        )}
      </div>
    );
  }
}

Page.propTypes = {
  year: PropTypes.number.isRequired,
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
};
