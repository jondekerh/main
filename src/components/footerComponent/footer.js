import React, { Component } from 'react';
import {
  Button
} from 'react-bootstrap';
const request = require('request');


class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      outputValue: <br></br>,
      isOpen: true,
      minMax: 'minimize'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.changeIsOpenState = this.changeIsOpenState.bind(this);
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

    request.post(options, function(err, res) {
      console.log('ERROR: \n', err);
      console.log('JSON OBJ SENT: \n', options.json);
      console.log('RESPONSE: \n', res);

      //var story = body.intent.storyId;
      var sResponse = res.body.speechResponse;
      this.setState({outputValue: sResponse});
    }.bind(this));

  }

  changeIsOpenState() {
    this.setState({isOpen: !this.state.isOpen}, this.handleMinMax);
  }

  handleMinMax() {
    if (this.state.isOpen) {
      this.setState({minMax: 'minimize'});
    }
    else {
      this.setState({minMax: 'maximize'});
    };
    console.log(this.state.isOpen);
  }

//  componentWillUpdate() {
//    this.handleMinMax1;
//    console.log(this.state.isOpen);
//  }

  //need a way of checking the change or something every time the component updates

  render() {
    return (
      <footer>

        <div className='chatWrapper'>
          <Button className='chatMinMax' onClick={this.changeIsOpenState} block>{this.state.minMax}</Button>
          <div className='chatInput'>
            <form onSubmit={this.handleSubmit}>
              You: <input type='text' value={this.state.inputValue} placeholder='Type your question' onChange={this.handleChange}></input>
              <button type='button' onClick={this.handleSubmit}>submit</button>
            </form>
          </div>
          <div className='chatOutput'>
            {this.state.outputValue}
          </div>
          <a className='shoutOut' href='https://github.com/alfredfrancis/ai-chatbot-framework'>
            Shout out to alfredfrancis for the framework this bot runs on!
          </a>
        </div>

      </footer>
    );
  }
}

export default Footer;
