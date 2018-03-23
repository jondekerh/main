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
          comfyBot was the first real project I ever saw through to the end. Using Node.js and discord.js I created a sort of “mascot” bot for a local Discord server. Although the bot can play basic minigames and respond to some user commands the most important feature is the conversational mode powered by the <a href='https://github.com/alfredfrancis/ai-chatbot-framework'>IKY</a> Natural Language Understanding framework, effectively making the bot into a basic chatbot. I did a lot in this project that went outside my comfort zone at the time, such as setting up the IKY service on an AWS server and having the bot and the service communicate through HTTP requests.<br></br> I ended up running into many bugs as I was working on  this project, but the biggest hurdle to overcome was setting up conversations for the chatbot to run through and working with the limitations of the IKY framework, like the linear nature of the conversations. To get around this I had to implement some code in the bot itself that would recognize if an HTTP response to an “open ended” conversation (such as “what’s up,” or “how are you”) was being received by looking at the ID of the incoming JSON object. Then a random response from a local array would be posted to the chat as opposed to the response contained in the JSON object. I also added a logging feature which keeps track of any user inputs that the bot is unable to respond to in a local JSON object so the data can be used to give the bot better coverage. Overall I learned that making a good chatbot takes a lot of tedious work, and I gained a lot of respect for people who do this as a living.
        </p>
        </div>

        <div className = 'projectEntry'>
        <h1>
          <a href = 'https://github.com/jondekerh/Inflationizer'>Inflationizer</a>
        </h1>

        <p>
          The problem was that our point-of-sale system didn’t have any way to quickly check our store prices against the warehouse prices and update them accordingly. The quick and simple solution was Inflationizer. At its heart Inflationizer is a Python app with a simple GUI that allows users to select two sets of CSV files (local and warehouse inventory files), compare their values, and create two new files: one containing all items that need updating along with their current and new prices, and another containing any outliers that need human review before being updated. From there, macros in the Epicor Eagle Browser point-of-sale system could be used in conjunction with the new file to update prices and print new labels. <br></br> Development had to work around a series of hurdles from the beginning. First, the warehouse itself has no web API, so I couldn’t pull pricing data from them directly. Luckily Eagle Browser had been configured to regularly receive data from them and store it in CSV format, which was also how it stored our local data. This is why the app reads CSVs instead of trying to pull the data from somewhere. It also means that before using the app one has to manually extract the files and move them to the app’s directory. In addition, trying to sniff out bulk items proved troublesome. Some of our products were sold to us in packs, but when we resold them we did so as singles. This caused a massive discrepancy between our price and the warehouse price in these instances. Unreliable designations for these items in both the local and warehouse data meant I couldn’t use labels to spot them, so I ended up having to settle for adding a condition which would catch any items with prices increasing too much and put them on a separate file for review. Not only was this my first attempt at doing anything in Python, it was also the first time I had ever worked with data manipulation and matrices like this. I used the Pandas library to make the manipulation easier, and shipped the final product with a bash file and a simple GUI using tkinter that made running it on the store’s Windows OS easy for any employee.
        </p>
        </div>

        <div className = 'projectEntry'>
        <h1>
          <a href = 'https://github.com/jondekerh/main'>This Site (using React.js)</a>
        </h1>

        <p>
          The first time I used React was for an online course offered by University of Pennsylvania. By the time I got around to making this site I had forgotten most of what I learned in that course, so I spent a lot of time looking over the homework for that unit and watching tutorials while working on this project. It was thanks to one of those tutorials that I started using Sass, a CSS extension language which helps add more order and functionality to basic stylesheets. Writing the site as a React app with Sass was a fun process where I learned a lot about React and got more comfortable using it, but hosting the website proved a bit more troublesome than I originally expected. <br></br> I was going to just deploy the site to an AWS server until I learned about github pages, which allows people to publish sites through github repos and handles most of the back-end hassles and maintenance. However when I published my site a critical bug appeared due to the strict HTTPS enforcement github pages uses for incoming and outgoing requests. The chatbot I have featured on the site uses the same <a href='https://github.com/alfredfrancis/ai-chatbot-framework'>IKY</a> framework as comfyBot, hosted on an AWS server which would only accept HTTP. This meant I couldn't communicate with my AWS server using the platform. But I found a workaround in the fact that pages hosted through the platform using a custom domain weren’t subject to the same strict enforcement. So I went through the process of buying and setting up my own domain name. But something was still wrong. After I set everything up I found that only the index and some CSS was loading for the site. Unsure whether this was a bug in my code or due to the cache not updating, I waited the prescribed 48 hours and when the errors were still there I began hacking. It turned out to be an error in how create-react-app generated paths to my site’s resources when it was building everything. Normally the paths would point where they were supposed to, but since I was using a custom domain they had to be altered for it to work. After a quick edit to the index the site you see now was live.
        </p>
        </div>

      </div>
    );
  }
}

export default Projects;
