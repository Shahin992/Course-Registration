# Add at least 3 Project features

- Course Selection
- Credit Hour and Price Calculation
- Error Handling with Toast Notifications:

# Discuss how you managed the state in your assignment project.


Initialization of State Variables:
    useState is used to declare state variables for the selected courses, total price, hour credit hours, and remaining credit hours.
    Each state variable is initialized with an initial value, and a corresponding function is provided to update the state.

Updating State:

Inside the selectedBtn function, state is updated based on user actions:
    The newSelected array is created by spreading the existing selected array and adding the newly selected course.
    The code checks if the selected course is already in the cart and displays an error toast if it is.
    State variables like selected, total, remaining, and hour are updated using their corresponding set functions.

Displaying State in Components:

The state variables are used in the components to display relevant information to the user. For example, remaining, hour, and total are passed as props to the Cart component to display the user's selections and calculations.

Error Handling with Toast Notifications:

The code utilizes the react-toastify library to provide user-friendly error messages when certain conditions are met, such as attempting to select a course that is already in the cart or exceeding the available credit hours. 
