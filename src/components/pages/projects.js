import React, { Component } from 'react';

class Projects extends Component {
  render() {
    return (
      <div className = 'container-fluid'>

        <div className = 'projectEntry'>
        <h1>
          <a href = 'https://github.com/jondekerh/comfyBot'>comfyBot</a>
        </h1>

        <p>
          comfyBot was the first real project I ever saw through to the end. Using Node.js and discord.js I created a mascot for a local Discord server. Although the bot can play basic minigames and respond to some user commands, the most important feature is the conversational mode powered by the <a href='https://github.com/alfredfrancis/ai-chatbot-framework'>IKY</a> Natural Language Understanding framework, effectively making the bot into a basic chatbot. I often had to learn new skills for this project, such as setting up the IKY service on an AWS server and getting the bot and the service to communicate through HTTP requests.<br></br> I ended up running into many bugs as I was working on  this project, but the biggest hurdle to overcome was setting up conversations for the chatbot within the limitations of the IKY framework, which does not allow open ended conversations. To get around this I had to implement code in the bot that would recognize if an HTTP response to an “open ended” conversation (such as “what’s up,” or “how are you”) was received through looking at the ID of the incoming JSON object. Then a response from a local array would be randomly chosen and posted to the chat instead of the response contained in the JSON object. I also added a logging feature which keeps track of any user inputs that the bot is unable to respond to in a locally stored JSON object so the data can be used to give the bot better coverage. Above all I learned is that making a good chatbot takes a lot of work, and I gained a lot of respect for people who program chatbots as a living.
        </p>
        </div>

        <div className = 'projectEntry'>
        <h1>
          <a href = 'https://github.com/jondekerh/Inflationizer'>Inflationizer</a>
        </h1>

        <p>
          The problem: our point-of-sale system didn’t have any way to quickly check our store prices against the warehouse prices and update them accordingly. The quick and simple solution: Inflationizer. At its heart Inflationizer is a Python app with a simple GUI that allows users to select two sets of CSV files (local and warehouse inventory files), compare their values, and create two new files: one containing all items that need updating along with their current and new prices, and another containing any outliers that need human review before being updated. From there, macros in the Epicor Eagle Browser point-of-sale system could be used in conjunction with the new file to update prices and print new labels. <br></br> Development had to work around a series of hurdles from the beginning. First, the warehouse itself has no web API, so I couldn’t pull pricing data from them directly. Luckily Eagle Browser had been configured to regularly receive data from them and store it in CSV format, which was also how it stored our local data. This is why the app reads CSVs instead of trying to pull the data from an API. In addition, trying to sniff out bulk items proved troublesome. Some of our products were sold to us in packs, but when we resold them we did so as singles. This caused a massive discrepancy between our price and the warehouse price in these instances. Unreliable designations for these items in both the local and warehouse data meant I couldn’t use labels to spot them, so I ended up having to settle for an additonal condition which would catch any items that would be marked up too much and put them on a separate file for review. Not only was this my first project using Python, it was also the first time I had ever worked with data manipulation and matrices. I used the Pandas library to make the manipulation easier, and shipped the final product with a bash file and a simple GUI using tkinter that made running it on the store’s Windows OS easy for any employee.
        </p>
        </div>

        <div className = 'projectEntry'>
        <h1>
          <a href = 'https://github.com/jondekerh/main'>This Site (using React.js)</a>
        </h1>

        <p>
          The first time I used React was for an online course offered by University of Pennsylvania. By the time I got around to making this site I had forgotten most of what I learned in that course, so I spent a lot of time looking over the homework for that unit and watching tutorials while working on this project. It was thanks to one of those tutorials that I started using Sass, a CSS extension language which helps add more order and functionality to basic stylesheets. Writing the site as a React app with Sass was a fun process where I learned a lot about React and got more comfortable using it, but hosting the website proved a bit more troublesome than I originally expected. <br></br> I was simply going to deploy the site to an AWS server until I learned about github pages, which allows people to publish sites through github repos and handles most of the backend hassles and maintenance. However when I published my site a critical bug appeared due to the strict HTTPS enforcement on github pages for all requests. The chatbot I have featured on this site uses the same <a href='https://github.com/alfredfrancis/ai-chatbot-framework'>IKY</a> framework as comfyBot, hosted on an AWS server which would only accept HTTP. This meant I couldn't communicate with my AWS server using the platform. But I found a workaround in the fact that pages hosted through github using a custom domain weren’t subject to the same strict enforcement. So I went through the process of buying and setting up my own domain name. But even after that something was still wrong. After I set everything up I found that only the index and some CSS files were loading for the site. Unsure whether this was a bug in my code or due to the cache not updating, I waited the prescribed 48 hours and when the errors persisted I began hacking. It turned out to be an error in how the create-react-app package generated paths to my site’s resources while creating the production build. Normally the paths would point directly to my .js and .css files, but since I was using a custom domain part of the paths had to be removed for it to work. After a quick edit to the index, the site went live.
        </p>
        </div>

      </div>
    );
  }
}

export default Projects;
