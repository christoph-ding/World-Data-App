# World Data Viewer

The World Data Viewer is an app for viewing data about the countries of the 
world.  

## Installation

Install the World Data Viewer using git.
,,,
$ git clone https://github.com/ironpup/World-Data-App.git
,,,

## Configuring the app
By default, the app will make a call to get all European countries from the 
[Rest Countries Api](https://restcountries.eu), and group the data by
Region and sort on Population.

The user can change these options in options.json

## Using the data
The user can group and sort the data on different fields, and filter the data.
Clicking on an individual country will reveal all the data for that row.

## Future features to implement
 * An option to show full details for all rows at once.
 * More tests
 * Clicking on a group name will expand and contract countries for that group.
