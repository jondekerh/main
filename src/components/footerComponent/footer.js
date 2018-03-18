import React, { Component } from 'react';
const request = require('request');

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      outputValue: <br></br>
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({inputValue: e.target.value});
  }

  handleSubmit(e) {

    e.preventDefault();

    this.setState({inputValue: ''});
    this.setState({outputValue: <p><font color='#cacaca'><i>x is typing really fast...</i></font></p>});

    var payload = {
      "currentNode": "",
      "complete": null,
      "context":{},
      "parameters": [],
      "extractedParameters": {},
      "speechResponse": "",
      "intent": {},
      "input": '',
      "missingParameters": []
    }

    payload["input"] = this.state.inputValue;

    var options = {
      uri: 'http://18.217.237.104:8001/api/v1',
      headers: {
        'Content-Type': 'application/json'
      },
      json: payload
    }

    request.post(options, function(err, res, body) {
      console.log('ERROR: \n', err);
      console.log('JSON OBJ SENT: \n', options.json);
      console.log('RESPONSE: \n', body);

      //var story = body.intent.storyId;
      var sResponse = body.speechResponse;
      this.setState({outputValue: sResponse});
    }.bind(this));

  }

  render() {
    return (
      <footer>

        <div className='chatWrapper'>
          <div className='chatInput'>
            <form onSubmit={this.handleSubmit}>
              You: <input type='text' value={this.state.inputValue} placeholder='placeholder' onChange={this.handleChange}></input>
              <button type='button' onClick={this.handleSubmit}>submit</button>
            </form>
          </div>
          <div className='chatOutput'>
            {this.state.outputValue}
          </div>
        </div>

      </footer>
    );
  }
}

export default Footer;
