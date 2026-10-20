# IT313 Laboratory 4 — React Components & JSX

## Project Overview

The Student Roster Card Renderer is a simple mobile application created using React Native and Expo. It displays a list of students with their names, course, units enrolled, and full-load status.

The application demonstrates React components, props, JSX expressions, conditional rendering, and the use of keys when displaying lists.

## Features

- Displays the total number of students.
- Shows each student's name, course, and units enrolled.
- Displays the "Full Load" label only for students whose `isFullLoad` value is `true`.
- Uses a reusable student card component.
- Includes a button to reverse the order of the student roster.
- Uses a unique student ID as the key for each card.

## Component Structure

### StudentCard

`StudentCard` is a reusable functional component. It receives `name`, `course`, `units`, and `isFullLoad` through props using destructuring.

It displays the student's information and conditionally shows the "Full Load" label when `isFullLoad` is true.

### StudentRoster

`StudentRoster` is the parent component that contains the student data and renders the student cards using `.map()`.

It displays the total number of students using `students.length` and includes a button to reverse the roster order.

Each card uses `key={student.id}` so React can identify each student consistently when the list changes order.

## Sample Student Data

| Student | Course | Units | Full Load |
|---|---|---:|---|
| Ana Cruz | IT313 | 21 | Yes |
| Bea Santos | IT313 | 15 | No |
| Cid Ramos | IT313 | 18 | Yes |
| Dex Alonzo | IT313 | 12 | No |

## Technologies Used

- React Native
- Expo
- JavaScript
- JSX
- Visual Studio Code

## How to Run the Application

1. Install Node.js and set up an Expo project.
2. Open the project folder in Visual Studio Code.
3. Open the terminal in the project folder.
4. Run the following command:

   ```bash
   npx expo start
   ```

5. Open the application using Expo Go or a supported emulator.

## Key Experiment

The application uses `key={student.id}` in its final version. For the required experiment, the key can temporarily be changed to `key={index}` and the reverse button can be tested.

After the experiment, restore `key={student.id}`. Using a stable, unique ID is safer when a list is reordered or updated.

## Conclusion

This project demonstrates how reusable components and props can display student information from an array. JSX expressions and conditional rendering make the interface dynamic, while stable keys help React identify list items correctly.
