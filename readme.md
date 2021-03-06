![Logo](https://user-images.githubusercontent.com/22653056/132664833-3cf4c46c-9e41-4600-b355-53fbeedec05b.png)


# JATAYU 🦅	 (An ordinary Tool for an ordinary Developer)

Jatayu is a command line interface (CLI) tool which helps to generate production ready hand-made React templates for the App (web-app) or Library (components) development. 🚀	

## What is the purpose of JATAYU ? 💁

Did you ever tried setting up your own `react` environment without `create-react-app` ? Then you know the pain behind it. Adding `testing support | webpack | typescript | docker` will just increases that pain. 😪	

`JATAYU` is that pain killer 💊. If you want to have custom template setup for your react web app or component library without the need of CRA or it's alternatives, `JATAYU` to the rescue. 🥳	

We provide you the skeleton template structure and sky is the limit for it's tuning.

At its very core `JATAYU` offers below described templates with both Typescript & Javascript support as template supporting languages and Docker setup (for web apps).

```
  1.React Component Library
  2.React Web App
  3.React Web App with Redux
  4.React Web App with Redux Toolkit
  5.React Web App with Context
```

When you choose any one of the above projects, we provide you the ready-made template structure.

## Features

|       Template Type/Support      | Webpack | Testing (@testing-library) | Storybook | Typescript | State Management | Lint | Build | Docker |
|:--------------------------------:|:-------:|:--------------------------:|:---------:|:----------:|:----------------:|:----:|:-----:|--------|
| React Component Library          | ✅       | ✅                          | ✅         | ✅          | No               | ✅    | ✅     | No     |
| React Web App                    | ✅       | ✅                          | No        | ✅          | ✅                | ✅    | ✅     | ✅      |
| React Web App with Redux         | ✅       | ✅                          | No        | ✅          | ✅                | ✅    | ✅     | ✅      |
| React Web App with Redux Toolkit | ✅       | ✅                          | No        | ✅          | ✅                | ✅    | ✅     | ✅      |
| React Web App with Context API   | ✅       | ✅                          | No        | ✅          | ✅                | ✅    | ✅     | ✅      |

## Installation 🔨	

Use the package manager [npm](https://www.npmjs.com/) to install jatayu globally.

```bash
npm install -g jatayu
```


  
## Usage ⚠️	✅

After installation, create an empty directory anywhere you want and type `jatayu` in the terminal of the newly created folder. Voila! you will be prompted to answer two basic questions go ahead and answer them !

```
  1. Please enter directory name where your react template will reside

  2. Please select template type  (Use arrow keys)

    React Component Library  
    React Web App  
    React Web App with Redux 
    React Web App with Redux Toolkit
    React Web App with Context  

  3. Please select template support 

     Javascript(JS)
     Typescript(TS) 
     
  4. Do you want to add docker to the Template ? (if you select app template)

      Yes
      No
```

Enter the directory name where you want to `setup` react app and select the `type of project` you want.

### Steps after installing the project 	📌

#### If you select Web App or Library template without Docker support:

Now `cd` to the newly created folder by `jatayu` and do npm install. It's good to update your newly created `node_modules` by `npm outdated` you will get list of outdated `node_modules`, update them by `npm update`.

Start the template by `npm run start` (if you have chosen webapp template) or `npm run storybook` (if it is library template)

```bash
cd `your-newly-created-folder`

npm install

run -> npm run start (if you have chosen webapp template)

       or

       npm run storybook (if it is library template)
```

#### If you chose to add Docker to the App template

```bash
cd `your-newly-created-folder`

dev-run -> docker compose up --build (starts dev server, please navigate to http:localhost:5200 to see your App up and rolling!)

build -> docker compose -f docker-compose.prod.yml up --build (to build and run on dist folder, please navigate to http:localhost:1337 to see your App up and rolling!)
```

## What's next in the store?

We have plans to make `JATAYU` library/framework independent. So that `JATAYU` can offer custom templates to Angular, Vue, Svelte etc.

#### Upcoming templates:

```
  React with GraphQL
  
  Full stack MERN combo (MongoDB+Express+React+Node)

  Basic Node Typescript app
```
  
## Documentation 📝	

Please find the [dev.to](https://dev.to/manureddy94/introducing-jatayu-3no) and [medium](https://medium.com/@manureddy.g94/jatayu-4ca69463686e) links for Jatayu in live action.

  
## Authors 👨‍🚀

- [@ManojKumar](https://github.com/manjureddy7)

## Tech Stack 	🧑‍💻

**Client:** React, Material UI, React-Router, Styled-Components, Storybook, Webpack, Docker

**Server:** Node

  
## Screenshots	💣

Screenshots of the flow

![image](https://user-images.githubusercontent.com/22653056/133246794-51cca84e-4798-48ca-990b-93d474892ad1.png)

Enter directory name

![image](https://user-images.githubusercontent.com/22653056/133246843-aca54d67-a711-4efe-9750-1cff05aa60ea.png)


Select template type

![image](https://user-images.githubusercontent.com/22653056/133246938-0ddbc77f-0abd-4876-9d37-22a333498c96.png)

Select template supporting language type

![image](https://user-images.githubusercontent.com/22653056/133998744-c6b5dbef-d5b9-44b5-88fb-19c82b4d7a16.png)


Need docker support?

![image](https://user-images.githubusercontent.com/22653056/133998644-d3ed8942-1759-4a74-aae7-12550e0007da.png)


Successful template creation without docker

![image](https://user-images.githubusercontent.com/22653056/133447935-46b3e6ac-41b1-4f18-85f3-3f61031e9de4.png)


Successful template creation with docker

![image](https://user-images.githubusercontent.com/22653056/133998921-b9b6f506-2826-42bd-9632-06a4867071b6.png)





  
## License 🦔

[MIT](https://choosealicense.com/licenses/mit/)

  
## Feedback  📣

If you have any feedback, please reach out to us at manoj.gangavarapuu@gmail.com

  

  
