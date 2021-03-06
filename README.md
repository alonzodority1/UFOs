# UFOs
Module 11

## Overview of Project

### Purpose
The UFO webpage and dynamic table need to provide a more in-depth analysis of UFO sightings by allowing users to filter for multiple criteria at the same time. In addition to the date, I added table filters for the city, state, country, and shape.

## Analysis and Challenges

Refactoring the previous code toallow for multiple filter criteria required an enhanced comprehension of JavaScript syntax including terms forEach, object, if and =>


### Results

The refactored webpage now allows the user to use multiple criteria to filter information on UFO sitings.  It also no longer requires them to clik a filter button, once they hit enter the information will fillter will be applied, meaning they can filter as one criteria at a time and continue to filter if the results are too broad. Illustrations are below:

![alt text](https://github.com/alonzodority1/UFOs/blob/main/Static/Images/No%20filters.PNG "No filter")

![alt text](https://github.com/alonzodority1/UFOs/blob/main/Static/Images/filter-state.PNG "filter State")

![alt text](https://github.com/alonzodority1/UFOs/blob/main/Static/Images/filter-state%20and%20shape.PNG "filter State and Shape")

![alt text](https://github.com/alonzodority1/UFOs/blob/main/Static/Images/filter-state%2C%20shape%20and%20date.PNG "filter State, Shape and Date")


## Summary
This upgrade allows the user to easily find UFO siting info relative to his interest or needs. One draw back however is that the filters are case and form sensitive, meaning if theuser does not use the exact case or form of date or state as in the data they will not recieve thier desired information.  I recommend:
  1-Refactor filter criteria to be case insensitve and to accept various forms of date and state
  2-Refactor the shape filter criteria to be a drop down list with available shapes 
