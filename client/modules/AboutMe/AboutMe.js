import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// Import Style
// import styles from './AboutMe.css';

class AboutMe extends Component {
  render() {
    return (
      <div>
        <img src='https://images.unsplash.com/photo-1507101105822-7472b28e22ac?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e9ae10b6e8d0e8a990d41c7aafd13a78&auto=format&fit=crop&w=1052&q=80' width='250px' height='150px'/>
        <h2>This is a page about me!</h2>
        <p>Lorem Ipsum jest tekstem stosowanym jako przykładowy wypełniacz w przemyśle poligraficznym. Został po raz pierwszy użyty w XV w. przez nieznanego drukarza do wypełnienia tekstem próbnej książki. Pięć wieków później zaczął być używany przemyśle elektronicznym, pozostając praktycznie niezmienionym. Spopularyzował się w latach 60. XX w. wraz z publikacją arkuszy Letrasetu, zawierających fragmenty Lorem Ipsum, a ostatnio z zawierającym różne wersje Lorem Ipsum oprogramowaniem przeznaczonym do realizacji druków na komputerach osobistych, jak Aldus PageMaker</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

AboutMe.propTypes = {
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutMe);
