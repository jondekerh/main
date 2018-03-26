import React, { Component } from 'react';
import {
  Button,
  Collapse
} from 'react-bootstrap';

//project name here:
const projectName = 'this site';

class SiteArticle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      buttonVal: 'read more about ' + projectName

    };

    this.handleChange = this.handleChange.bind(this);

  }

  //changes the state of 'open' and alters the text of the button whenever it's pressed
  handleChange(e) {
    var open = this.state.open;

    if (open) {
      this.setState({buttonVal: 'read more about ' + projectName});
    }
    else {
    this.setState({buttonVal: 'read less'});
    };

    this.setState({ open: !this.state.open });

  }

  //text in the render differs between components
  render() {
    return (

      <div className = 'projectEntry'>
      <h1>
        <a href = 'https://github.com/jondekerh/main'>This Site</a>
      </h1>

      <p>
        The first time I used React was for an online course offered by University of Pennsylvania. By the time I got around to making this site I had forgotten most of what I learned in that course, so I spent a lot of time looking over the homework for that unit and watching tutorials while working on this project. It was thanks to one of those tutorials that I started using Sass, a CSS extension language which helps add more order and functionality to basic stylesheets. Writing the site as a React app with Sass was a fun process where I learned a lot about React and got more comfortable using it, but hosting the website proved a bit more troublesome than I originally expected. <br></br>

        <Collapse in={this.state.open}><span>
          I was simply going to deploy the site to an AWS server until I learned about github pages, which allows people to publish sites through github repos and handles most of the backend hassles and maintenance. However when I published my site a critical bug appeared due to the strict HTTPS enforcement on github pages for all requests. The chatbot I have featured on this site uses the same <a href='https://github.com/alfredfrancis/ai-chatbot-framework'>IKY</a> framework as comfyBot, hosted on an AWS server which would only accept HTTP. This meant I couldn't communicate with my AWS server using the platform. But I found a workaround in the fact that pages hosted through github using a custom domain weren’t subject to the same strict enforcement. So I went through the process of buying and setting up my own domain name. But even after that something was still wrong. After I set everything up I found that only the index and some CSS files were loading for the site. Unsure whether this was a bug in my code or due to the cache not updating, I waited the prescribed 48 hours and when the errors persisted I began hacking. It turned out to be an error in how the create-react-app package generated paths to my site’s resources while creating the production build. Normally the paths would point directly to my .js and .css files, but since I was using a custom domain part of the paths had to be removed for it to work. After a quick edit to the index, the site went live.
        </span></Collapse>
      </p>

      <Button bsStyle='link' onClick={this.handleChange}>{this.state.buttonVal}</Button>
      </div>

    );
  }
}
export default SiteArticle;
