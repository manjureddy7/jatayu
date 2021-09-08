
![Logo](https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/28c626b0-fa3b-4f3c-9023-32cce0c4df6d/d9hu0go-ecb1aeeb-a9c4-4907-9270-7c8df2b9f78a.jpg/v1/fill/w_1024,h_650,q_75,strp/jatayu_by_elcaide_d9hu0go-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjUwIiwicGF0aCI6IlwvZlwvMjhjNjI2YjAtZmEzYi00ZjNjLTkwMjMtMzJjY2UwYzRkZjZkXC9kOWh1MGdvLWVjYjFhZWViLWE5YzQtNDkwNy05MjcwLTdjOGRmMmI5Zjc4YS5qcGciLCJ3aWR0aCI6Ijw9MTAyNCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.ycEU5tS1rQuQH8FzGSXMtzFpmWVqNm-LjD_zj7BfZJU)

    
# JATAYU

Jatayu is a command line interface (CLI) tool which helps to generate READY-MADE React projects for the App (web-app) or Library (common components) development.

## What is the purpose of JATAYU ?

Did you ever tried setting up your own `react` environment without `create-react-app` ? Then you know the pain behind it. Adding testing support or webpack or typescript will just increases that pain.

`JATAYU` is that pain killer. If you want to have custom setup for your react web app or component library without the need of CRA or it's alternatives, `JATAYU` to the rescue.

We provide you the skeleton structure and sky is the limit for it's tuning.

At its very core `JATAYU` offers four kind of `ready-made` react projects for the end users.

```
  1.WAJS - Web App with JavaScript support
  2.WATS - Web App with Typescript support
  3.CLJS - Component Library with JavaScript support
  4.CLTS - Component Library with Typescript support
```

When you choose any one of the above projects, we provide you the ready-made skeleton structure.

So what do we mean by that? 

You will get below items in your ready-made projects for WebApp react projects

- `config` folder with all the webpack supplements.
- `public` folder with root index.html
- `src` folder with some inbuilt react components with `routing`
- inbuilt `scss`, `react-testing-library`
- some default `lint` rules

For Component Library projects you will get below items out of the box

- `webpack`
- `react-testing-library`
- Inbuilt `storybook`.

```
You can always override the default items provided, you can tune them , refine them into your needs.
```



## Installation

Use the package manager [npm](https://www.npmjs.com/) to install jatayu globally.

```bash
npm install -g jatayu
```


  
## Usage

Create an empty directory and type `jatayu` in the terminal of the newly created folder. Voila! you will be prompted to answer two basic questions go ahead and answer them !

```
  1. Please enter your Directory name where your future project will reside

  2. Select project type (Use arrow keys)

      wajs 
      wats 
      cljs 
      clts 
```

Enter the directory name where you want to `setup` react app and select the type of project you want.

### Steps after installing the project

Now `cd` to the newly created folder by `jatayu` and do npm install. It's good to update your newly created `node_modules` by `npm outdated` you will get list of outdated `node_modules`, update them by `npm update`.

```bash
cd `your-newly-created-folder`

npm install

npm outdated

npm update
```




  
## Documentation

Will update soon.

  
## Authors

- [@ManojKumar](https://github.com/manjureddy7)

## Tech Stack

**Client:** React, Material UI, React-Router, Styled-Components, Storybook, Webpack

**Server:** Node

  
## Screenshots

N/A will update soon!!

![App Screenshot](https://via.placeholder.com/468x300?text=App+Screenshot+Here)

  
## License

[MIT](https://choosealicense.com/licenses/mit/)

  
## Feedback

If you have any feedback, please reach out to us at manoj.gangavarapuu@gmail.com
