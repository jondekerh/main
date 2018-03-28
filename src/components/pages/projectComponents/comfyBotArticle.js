import React, { Component } from 'react';
import {
  Button,
  Collapse
} from 'react-bootstrap';

//project name here:
const projectName = 'comfyBot';

class ComfyBotArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      buttonVal: 'read more about ' + projectName

    };

    this.handleOpenChange = this.handleOpenChange.bind(this);

  }

  //changes the state of 'open' and alters the text of the button whenever it's pressed
  handleOpenChange(e) {
    this.setState({ open: !this.state.open }, this.handleArticleChange);
  }

  handleArticleChange() {
    if (this.state.open) {
      this.setState({buttonVal: 'read less'});
    }
    else {
    this.setState({buttonVal: 'read more about ' + projectName});
    };
  }

  //text in the render differs between components
  render() {
    return (

      <div className = 'projectEntry'>
      <h1>
        <a href = 'https://github.com/jondekerh/comfyBot'>comfyBot</a>
      </h1>

      <p>
        comfyBot was the first real project I ever saw through to the end. Using Node.js and discord.js I created a mascot for a local Discord server. Although the bot can play basic minigames and respond to some user commands, the most important feature is the conversational mode powered by the <a href='https://github.com/alfredfrancis/ai-chatbot-framework'>IKY</a> Natural Language Understanding framework, effectively making the bot into a basic chatbot. I often had to learn new skills for this project, such as setting up the IKY service on an AWS server and getting the bot and the service to communicate through HTTP requests.<br></br>

        <Collapse in={this.state.open}><span>
          I ended up running into many bugs as I was working on  this project, but the biggest hurdle to overcome was setting up conversations for the chatbot within the limitations of the IKY framework, which does not allow open ended conversations. To get around this I had to implement code in the bot that would recognize if an HTTP response to an “open ended” conversation (such as “what’s up,” or “how are you”) was received through looking at the ID of the incoming JSON object. Then a response from a local array would be randomly chosen and posted to the chat instead of the response contained in the JSON object. I also added a logging feature which keeps track of any user inputs that the bot is unable to respond to in a locally stored JSON object so the data can be used to give the bot better coverage. Above all I learned is that making a good chatbot takes a lot of work, and I gained a lot of respect for people who program chatbots as a living.
        </span></Collapse>
      </p>

      <Button bsStyle='link' onClick={this.handleOpenChange}>{this.state.buttonVal}</Button>
      </div>

    );
  }
}
export default ComfyBotArticle;
