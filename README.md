# UFO  
  
### Overview of project:  

The goal of the project is to add functionality to a webpage created to show a brief article on UFOs along with a table of documented UFO sightings.  The data in the original webpage was filterable by observation date.  
  
The added functionality is filtering by multiple criteria.  THe filter criteria are:  

- Date  
- City  
- State  
- Country  
- Shape of the UFO  
  
The additional functionality is added using the d3 JavaScript library to detect changes in the filter list and JavaScript to update the table filter with the entered data.  
  
### Results:  

The UFO Sightings webpage was styled using bootstrap.  It creates a nice visual that stands out.  
[UFO Sightings webpage](UFP_Sightings.png)  
  
The first task was to create additional data entry fields for the filters.    The filters are created in an unordered list using the <label> and <input> tags.  
  
[Data entry fields for filters](data_entry_fields.png)
  
The selectAll.on('change') function from the d3 library listens for any changes to the filter input boxes.  With each detected filter change a filter criteria is added to an object and a function is called that loops through the filters object and uses a series of if statements to appropriately filter the raw data.  
  
To perform a filter simply click in the appropriate input field, type in your filter criteria (making sure to match the format of the default value) and press enter.  THe figure below shows sightings in Texas.  
  
[tx_sightings_filter_results](tx_sightings_filter_results.png)  
  
To add another search criteria click in another filter and enter an appropriate text string.  The example below adds a filter for light as the shape of the UFO.  
  
[added shape filter](state_and_shape_filters.png)  
  
### Summary:  
  
The current solution only allows you to select 1 value for each filter.  This makes it difficult to compare data from different areas.  
  
It would be nice to add the option for multiple selections for each filter field.  For example, you might want to compare the UFO sightings in Fresno and La Mesa California and see the results in a single table.  

Adding the ability to aggregate data could also be a helpful addition.  A summary table of number of sightings per state could help guide exploration of the data.        
