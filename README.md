# UFOs

##### IMPORTANT NOTE: With the help of AskBCS Learning Assistants, I got the JavaScript and HTML files working as intended. However, the naming conventions may not match the names as exactly stated in the Challenge requirements. I don't want to risk renaming files and messing up what is working. 

##### Therefore, the working Javascript file is app2.js, and the working HTML file is index_new.html. If I need to change these names, then please let me know and I will do that, and resubmit.

#### Overview of Project: Explain the purpose of this analysis.

###### The purpose of this analyis is to write a JavaScript module to filter UFO data observations by the following criteria, as selected by the user:

• Date of observation</p>
• City or town where observation made</p>
• State or province where city or town is located</p>
• Country of observations (us for USA or ca for Canada)</p>
• Shape of the UFO as noted by observer (i.e. circle, triangle, sphere, disk, cigar, etc.)</p>

#### Results: How to use the webpage

The home page features a panoramic banner at the top, followed by a written summary of the project. Below the written summary is a list of all of the UFO sightings in the database. Each line of UFO data includes the following column headers:

• Date</p>
• City</p>	
• State</p>	
• Country</p>	
• Shape</p>
• Duration</p>
• Comments</p>

There are over 100 observations recorded in the database, as shown below. To make it easier to find data, the home page is linked to a JavaScript program to enable the user to select only those records that match relevant criteria.

![Full_webpage](images/Full_webpage.png)

To the left of the data table is a column titled "Filter Search." In these data fields, the user can filter by relevant criteria by entering values in one or more of the search boxes. Placeholder data (in grey) is initially placed in the boxes, as shown here:

![Filter_Search](images/Filter_Search.png)

When the user enters data in a search box, that data entry turns red to show that it is user input. For example, to find all of the UFO observations on 1/4/2010, the user enters that date in the first search box, and clicks the button or hits the "Enter" key. This returns eight observations recorded on that day:

![Jan_4](images/Jan_4.png)

If the user wants to select only those observations on that day in a single state - i.e. California (ca), then the user enters the two-letter state abbreviation in the appropriate box:

![Jan_4_ca](images/Jan_4_ca.png)

This reduces the original eight observations of 1/4/2010 to the three recorded in California. The user can continue refining the search by adding additional criteria - in this example, adding "light" to the filter by shape, which returns two records:

![Jan_4_ca_light](images/Jan_4_ca_light.png)

If one selects only the "City" data, the JavaScript returns all observations recorded in the city of that name, even if they are different cities with the same name in two or more different states. In this example, there are two observations made in cities with the name "Cleveland," one in Ohio and the other in Tennessee:

![Cleveland](images/Cleveland.png)

To return to the original full database listing, clear the Filter Search boxes and refresh the home page.

#### Summary

One drawback of this design is that data entry is case-sensitive. All of the data in the database is in lower-case, including city names and state abbreviations. It is the standard in the English language that city names begin with a capital letter (i.e. Phoenix, Cleveland). If the city name consists of two of more words, then each word is capitalized (i.e. San Diego, Salt Lake City).  Two-letter postal abbreviations for states and provinces consist of two capital letters (i.e. CA: California; ON: Ontario). Thus, the design should be improved by removing the case-sensitivity of the data input, so one can enter data all in lower case (i.e. cleveland), capitalizing the first letter (i.e. Cleveland), capitalizing all letters (i.e. CLEVELAND), or any other capitalization format.

One way to improve the program would be to replace the data entry box for state with a drop-down menu. Users would select from the list of existing state or province abbreviations to avoid the errors that result when users enter a two-letter combination that does not exist for any state or province. This can be applied to other fields, such as shape, avoiding errors resulting when users misspell words or enter "nonsense" words that do not correspond to any shape.

Another more advanced improvement would be to include a lookup table where if users types a commonly-misspelled word for a well-known city, then the program can offer suggestons to the user to determine the actual city that the user intended. For example, Tucson is commonly misspelled as "Tuscon," so if a user enters "Tuscon," the program could ask the user if he or she actually intended that the city be "Tucson."  Many misspell the city of Pittsburgh, PA as "Pittsburg", although entering "Pittsburg" would return data from an actual city named "Pittsburg" in a different state (Pittsburg, KS). 
