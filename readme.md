What is this project about?

This is a simple project idea in which i want to have alternative to CRA's.

This simple npm library gives 4 options to the end user

If the user wants a react web app without CRA that is if he/she wants a custom webpack setup

so this react web app can be JS/TS

Also if the user wants to integrate TS to his setup we will provide that as well

Not just webapp, if we target's on creating a component library then also this package will help



// When the user runs this package for the first time, we will give him a couple of options or all the list of options

// WEB-APP-JS
// WEB-APP-TS
// COMPONENT-LIBRARY-JS
// COMPONENT-LIBRARY-TS

// at the end of the day we are going to provide the bare minimum setup with everything, its up to the user now

// We will give 4 commands to the end user before taking AppName
// CLJS -> A Component Library with JS setup
// CLTS -> A Component Library with TS setup
// WAJS -> A WebApp with JS setup
// WATS -> A WebApp with TS setup

// FLOW
// Take APP Name from the user
// Check if the appName is empty or not
// Then show all the four commands at disposal with clear description
// Based on the command from the user create the app
const map = {

}