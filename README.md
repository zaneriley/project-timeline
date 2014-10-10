# Project Timeline for Clients

**Project Timeline** is a static site to help keep track of digital projects. It's fast and easy to brand and deploy. 

This project is inspired by [Brad Frosts' Project Hub](https://github.com/bradfrost/project-hub). This version seperates the presentation (HTML) from the project data (JSON), and easily rebranded for any client. It deploys as a static site and uses Gulp, SASS & Precompiled Handlebars.

## What is a project timeline and why would I use one?

A project timeline is a tool for keeping track of the progress of a digital project. The timeline lives online so that everyone involved in the team has access to it.

The benefits of using a project timeline:

- Serves as a centralized hub for the project
- Easily and visually view project progress
- Provides an archive for project artifacts
- Keep clients and team members up to speed with design progress
- Lives at a URL that doesn't change

### **Getting Started**

This project uses the command line and requires `Git` and `Node` to be installed. If you need more information, check out [this guide on Git](http://git-scm.com/book/en/Getting-Started-Installing-Git) and [the Node.JS website](http://nodejs.org/) for help. 
#### Installing

- Clone this repo. `$ git clone git://github.com/zaneriley/project-timeline.git`
- Run npm install. `$ [sudo] npm install`

#### Editing the Project Information

- Open up `project-timeline-information.json` in a text editor.
- Edit the JSON data as you'd like. Be careful of the syntax if you haven't used JSON before.
- In the terminal, run `$ gulp templates`. (This takes your data and inserts it into the HTML in `app/index.html`)

#### Editing the Theme

- Open up `dev/_theme.scss` in a text editor.
- Make changes to the variables. 
- In the terminal, run `$ gulp scss`. 

### Code Tree
```
    ├─ app // Final output. Don't edit this folder.
    │  ├─ css
    │  ├─ img
    │  ├─ js
    │  └─ index.html
    │
    ├─ dev
    │  ├─ js
    │  ├─ scss
    │  ├─ templates
    │  └─ _theme.scss // Contains aesthetic variables. Edit this file.
    │
    ├─ project-hub-information.json // Project data. Edit this file.
    ├─ gulpfile.js
    ├─ streams.js
    ├─ package.json
    └─ README.md
```
    
### Limitations and known issues

**Live updating when making edits to JSON data when doing `$ gulp` or `$ gulp watch`**

Running `$ gulp`, which opens up Brower-Sync and Gulp Watch, does not work with our JSON data. This is because Node.js caches require()'s and therefore doesn't see the data update. I haven't found a good way to clear the cache or bring in the JSON data any other way. It should be an easy fix. Pull requests welcome.

