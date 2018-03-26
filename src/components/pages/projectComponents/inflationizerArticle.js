import React, { Component } from 'react';
import {
  Button,
  Collapse
} from 'react-bootstrap';

//project name here:
const projectName = 'Inflationizer';

class InflationizerArticle extends Component {
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
        <a href = 'https://github.com/jondekerh/Inflationizer'>Inflationizer</a>
      </h1>

      <p>
        The problem: our point-of-sale system didn’t have any way to quickly check our store prices against the warehouse prices and update them accordingly. The quick and simple solution: Inflationizer. At its heart Inflationizer is a Python app with a simple GUI that allows users to select two sets of CSV files (local and warehouse inventory files), compare their values, and create two new files: one containing all items that need updating along with their current and new prices, and another containing any outliers that need human review before being updated. From there, macros in the Epicor Eagle Browser point-of-sale system can be used in conjunction with the new file to update prices and print new labels. <br></br>

        <Collapse in={this.state.open}><span>
          Development had to work around a series of hurdles from the beginning. First, the warehouse itself has no web API, so I couldn’t pull pricing data from them directly. Luckily Eagle Browser had been configured to regularly receive data from them and store it in CSV format, which was also how it stored our local data. This is why the app reads CSVs instead of trying to pull the data from an API. In addition, trying to sniff out bulk items proved troublesome. Some of our products were sold to us in packs, but when we resold them we did so as singles. This caused a massive discrepancy between our price and the warehouse price in these instances. Unreliable designations for these items in both the local and warehouse data meant I couldn’t use labels to spot them, so I ended up having to settle for an additonal condition which would catch any items that would be marked up too much and put them on a separate file for review. Not only was this my first project using Python, it was also the first time I had ever worked with data manipulation and matrices. I used the Pandas library to make the manipulation easier, and shipped the final product with a bash file and a simple GUI using tkinter that made running it on the store’s Windows OS easy for any employee.
        </span></Collapse>
      </p>

      <Button bsStyle='link' onClick={this.handleChange}>{this.state.buttonVal}</Button>
      </div>

    );
  }
}
export default InflationizerArticle;
