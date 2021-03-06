import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import './styles/FinalScreen.scss';
import allDoneLogo from '../data/assets/alldone.png';

class FinalScreen extends Component {
  render() {
    return (
      <form className="signup-form">
        <div className="form-header">
          <h1>All Done</h1>
          <img src={allDoneLogo} alt="All-Done-Logo" />
        </div>
        <div className="all-done-message">
          <h2>
            Thanks for signing up!
            <br />
            <br /> A dedicated rep will review the data and get back to you
            within 1 hour.
          </h2>
        </div>
        <div className="flex-wrap">
          <Button
            label="CONTACT SALES REP"
            id="contactSales"
            type="button"
            variant="contained"
            color="primary"
          >
            CONTACT SALES REP
          </Button>
        </div>
      </form>
    );
  }
}

export default FinalScreen;
