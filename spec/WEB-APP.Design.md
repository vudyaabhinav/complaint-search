# Consumer Complaint Search

## Summary
This would be a simple web application for users to browse through existing consumer complaints and filter out search results based on several factors (like company, year, state etc.)

## Technologies
### 1. React
    As this is a heavy data intensive application but a limited number of UI pages React would be a great library to scafold
    and run the application very quickly maintaing performance while handling heavy data
### 2. Node
    For a simple application of this kind with minimum number of endpoints Node js would be a optimal solution. 
### 3. Mongo
    Due to datasets consisting of multiple formats its easier and efficient to handle as documents rather than on a
    relational format. And this data retrieval is faster through mongoDB compared to traditional SQL databases. 
      
## Functional Description

This Application consists of 1 state, with optional query parameters determining the current view as this is a Single Page Application.

The Following would be the UI components present:
  * Textbox as a search bar
  * Dropdowns for filtering options
  * Tabular View for displaying complaints