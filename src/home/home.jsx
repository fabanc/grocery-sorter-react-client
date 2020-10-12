import React from 'react';

export default function Home() {
  return (
    <>
      <div className="row"><h1>Home page</h1></div>
      <div className="row">
        <p >Welcome to the grocey sorter application. This is application is a pet project designed to sort my grocery during the pandemic. I shop at the Real Canadian SuperStore in Westboro, Ottawa: <a href="https://goo.gl/maps/41beByV9swQ6qx1G7">Click here see in Google Maps</a>  If you shop here, feel free to use that tool</p>

        <p >The map of the store is done using Esri's product, called ArcGIS. The back end is all provided using micro-services hosted in Azure. My goal was to have a tool that allows me to:
        </p>

        <ul>
            <li>Get my grocery done fast, without using Online system (leave availble for the vulnerable folks)</li>
            <li>Experiment with Azure Services</li>
            <li>Practice my skills with the React and Bootstrap APIs</li>
          </ul>
      </div>
    </>
  );
}
