import React from 'react'
import { countriesData } from '/countries.jsx';
import { countries_data } from '/countries2.jsx';
import "./styles/styles.css";

class Header extends React.Component {
  render() {
    const {
      title,
      instruction,
    } = this.props.data

    return (
      <header>
        <div className='header-wrapper'>
          <h2>{title}</h2>
          <h3>{instruction}</h3>
        </div>
      </header>
    )
  }
}

class RandomCountry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomIndex: 0,
    };
  }

  getRandomCountry = () => {
    const newIndex = Math.floor(Math.random() * countriesData.length);
    this.setState({ randomIndex: newIndex });
  };

  render() {
    const country = countriesData[this.state.randomIndex];
    const countryData = countries_data.find(data => data.name === country.name);

    return (
      <div>    
        {country && countryData && (
          <div className='wrapper'>
            <img className='flag' src={countryData.flag} alt={`Flag of ${country.name}`} />
            <h3>{country.name}</h3>
            <p>Capital: {country.capital}</p>
            <p>Languages: {country.languages.join(', ')}</p>
            <p>Population: {country.population}</p>
            <p>Currency: {country.currency}</p>
            <p>Region: {countryData.region}</p>
            <p>Area: {countryData.area}</p>
          </div>
        )}
        <button onClick={this.getRandomCountry}>Select Country</button>
      </div>
    );
  }
}

class Main extends React.Component {
  render() {
return (
  <main>
    <div className='main-wrapper'>
          <RandomCountry />         
        </div>
      </main>
    )
  }
}

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className='footer-wrapper'>
          <p>Created by Ariana Spretz</p>
        </div>
      </footer>
    )
  }
}

class App extends React.Component {
  render() {
    const data = {
      title: 'Country to Travel',
      instruction: 'Select a Random Country for your next holiday',
    }
    
    return (
      <div className='app'>
        <Header data={data} />
        <Main />
        <Footer />
      </div>
    )
  }
}
  
export default App;
