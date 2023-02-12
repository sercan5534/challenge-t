# Challenge

## Overview
I separated the project into two different parts, the one is the main project which includes the main logic and components and the other is the shared project which includes design components (button,coupon-item) and types.
Also, I prefer NX (more:https://nx.dev/) to create the structure of this project. I gained a lot of time because of the pre-defined project structure and tools in NX. 
I believe that I completed all items defined in the challenge.

## Component Methodology
In general, I prefer to move all logic to a hook specific for a component. So you'll see a hook named "useController"- file name "controller"- in almost for each component.
Also I prefer styled component library for styling and I move all elements to a seperate folder. Beacuse of this technique, the code becomes more readable.

## Test
I added pre-defined unit test for some of component and modified them. 

## Storybook
Run `nx run shared:storybook` for storybook of design component

## Special Note
As you know, it's hard to focus on something because of the natural disaster happening in Turkey.
And I can not added some special things like animation, more unit tests, CI pipeline, deployment to a cloud platform, performance tunning and, cypress tests.

## To run project
Run `nx serve tuttur` for a dev server. Navigate to http://localhost:4200/.

## To run unit test 
Run `nx test` for main project
Run `nx test --project shared` for shared library

## To build  
Run `nx buid`

## To Linting
Run `nx lint --project shared` for shared library

