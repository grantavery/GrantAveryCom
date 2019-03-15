import React from 'react'
import axios from 'axios'

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
    this.setState({ isLoaded: false})

    let a = this.fetchPiDigits(0,1000);
    let b = this.fetchPiDigits(1000,1000);
    let c = this.fetchPiDigits(2000,1000);
    let d = this.fetchPiDigits(3000,142);

    let fullString = "";

    Promise.all([a,b,c,d]).then((resolved) => {
      console.log(resolved);

      for (var i = 0;i < resolved.length; i++)
      {
        fullString += resolved[i].data.content;
      }

      this.setState({
        isLoaded: true,
        content: fullString
      })
    })
    .catch((error) => {
      this.setState({
        isLoaded: true,
        content: error
      })
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

  fetchPiDigits = (start, numberOfDigits) => {
    return axios.get('http://api.pi.delivery/v1/pi', {
      params: {
        start: start,
        numberOfDigits: numberOfDigits
      }
    })
  }
}

export default PiComponent
