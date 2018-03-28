import React, { Component } from 'react';
import {
  Button,
  Collapse
} from 'react-bootstrap';
const request = require('request');


class ChatBot extends Component {
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

  //it is necessary to pass the second part of this func as a callback for after the component updates.
  //this is because the actual state doesnt update until the component updates, so we need to set the
  //state and then update in order to use the altered state.
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

  render() {
    return (
      <chatBot>

        <Button bsStyle='primary' className='chatMinMax' onClick={this.changeIsOpenState} block>{this.state.minMax}</Button>
        <Collapse in={this.state.isOpen}>
        <div className='chatWrapper'>
          <div className='chatInput'>
            <form onSubmit={this.handleSubmit}>
              <button type='button' onClick={this.handleSubmit}>submit</button>
              <span className='inputSpan'><input type='text' value={this.state.inputValue} placeholder='Type your question' onChange={this.handleChange}></input></span>
            </form>
          </div>
          <div className='chatOutput'>
            {this.state.outputValue}
          </div>
          <a className='shoutOut' href='https://github.com/alfredfrancis/ai-chatbot-framework'>
            Shout out to alfredfrancis for the framework this bot runs on!
          </a>
        </div>
        </Collapse>

      </chatBot>
    );
  }
}

export default ChatBot;
