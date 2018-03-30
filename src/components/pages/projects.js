import React, { Component } from 'react';

//components
import BlurbArticle from './projectComponents/blurb.js';
import ComfyBotArticle from './projectComponents/comfyBotArticle.js';
import InflationizerArticle from './projectComponents/inflationizerArticle.js';
import SiteArticle from './projectComponents/siteArticle.js';

class Projects extends Component {
  render() {
    return (
      <div className = 'container-fluid'>

        <BlurbArticle/>

        <ComfyBotArticle />

        <InflationizerArticle />

        <SiteArticle />

      </div>
    );
  }
}

export default Projects;
