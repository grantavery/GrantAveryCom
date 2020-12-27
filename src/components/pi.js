import React from 'react';
import axios from 'axios';

class PiComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      content: null
    };
  }

  componentDidMount() {
    this.setState({ isLoaded: false});

    axios.get("https://pi-api-bfii5.ondigitalocean.app/pi", {
      params: {
        numberOfDigits: 3142
      }
    })
    .then(response => {
      console.log("Response: " + JSON.stringify(response.data))
      this.setState({
        isLoaded: true,
        content: response.data
      });
    })
    .catch(err => {
      console.log("Error: " + JSON.stringify(err))
      this.setState({
        isLoaded: true,
        error: err
      });
    });
  }

  render() {
    const { error, isLoaded, content } = this.state;

    if (error) {
      return <p>Error: {error.message}</p>;
    } else if (!isLoaded) {
      return <p>Loading...</p>;
    } else {
      return (
        <p>{content}</p>
      )
    }
  }
}

export default PiComponent
