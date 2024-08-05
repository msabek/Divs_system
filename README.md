# Disaster Information Verification System (DIVS)

## Overview

The Disaster Information Verification System is a web-based application designed to help verify and manage disaster-related information. The system allows users to search for disaster-related information, add filters, verify the accuracy of the information, and report incidents on an interactive map.

## Features

* Search for disaster-related information using a simple search bar
* Add and remove filters to narrow down search results
* Verify the accuracy of disaster-related information using a verification process
* Interactive map component to display incident locations with multiple layer options:
  - OpenStreetMap
  - Satellite imagery
  - Topographic map
  - Humanitarian map
* Toggle labels on the map for better location identification
* Incident reporting form to report new incidents with location and image upload
* Auto-centering on newly added map incidents
* Upvoting and downvoting system for pending information
* Critical alerts section for urgent information

## Technical Requirements

* Node.js 14.17.0 or higher
* React 18.0.0 or higher
* Next.js 14.2.5 or higher
* Leaflet.js 1.9.4 or higher
* React Leaflet 4.2.0 or higher
* Tailwind CSS 3.4.1 or higher

## Getting Started

1. Clone the repository using `git clone https://github.com/your-username/disaster-information-verification-system.git`
2. Install dependencies using `npm install`
3. Start the development server using `npm run dev`
4. Open the application in your web browser using `http://localhost:3000`

## Map Functionality

The interactive map component offers the following features:

* Multiple base layers: OpenStreetMap, Satellite, Topographic, and Humanitarian
* Toggleable labels layer for clear location identification
* Incident markers with popup information
* Ability to add new incidents by clicking on the map
* Auto-centering on newly added incidents

## Contributing

Contributions are welcome! If you'd like to contribute to the project, please create a new issue or pull request.

## License

This project is licensed under the MIT License.

## Acknowledgments

This project was inspired by the need for a reliable and efficient way to verify disaster-related information. We would like to thank the following organizations for their support and guidance:

* University of Alberta
* AWS services - Amazon

## Contact

If you have any questions or would like to get in touch, please email [sabek@ualberta.ca].

## Changelog

* [Version 1.0.0] - Initial release
* [Version 1.1.0] - Added interactive map component
* [Version 1.2.0] - Improved search functionality
* [Version 1.3.0] - Added incident reporting form
* [Version 1.4.0] - Implemented verification process with upvoting/downvoting
* [Version 1.5.0] - Added multiple map layers (OpenStreetMap, Satellite, Topographic, Humanitarian)
* [Version 1.6.0] - Implemented toggleable labels layer on the map
* [Version 1.7.0] - Added auto-centering on newly added map incidents
* [Version 1.8.0] - Integrated image upload for incident reporting
* [Version 1.9.0] - Improved UI with Tailwind CSS
* [Version 2.0.0] - Migrated to Next.js for improved performance and SEO
