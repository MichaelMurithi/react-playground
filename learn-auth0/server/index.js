import express from "express";
import nodemon from "nodemon";
import jwt from "express-jwt";
import bodyParser from "body-parser";
import cors from "cors";
import jwks from "jwks-rsa";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors);

const port = 1500;
app.listen(port, () => {
  console.log(`Server listening at port ${port}`);
});

app.get("/", (req, res) => {
  let courses = [
    {
      id: 1,
      title: "Building an App with ReactJS and MeteorJS",
      category: "react",
      description:
        "Meteor and React are a powerhouse combination. Meteor gives you a fast, easy-to-use solution for data management across clients and servers, and React gives you a way to structure your app's UI from reusable components. The combination allows you to create your dream apps: dynamic, data driven, and cross-platform.",
      link:
        "https://www.lynda.com/React-js-tutorials/Building-App-React-js-MeteorJS/533228-2.html",
      release_date: "12/21/2016",
      views: "31,266",
      image:
        "https://cdn.lynda.com/course/533228/533228-636179098122239600-16x9.jpg",
    },
    {
      id: 2,
      title: "React Native Ecosystem and Workflow",
      category: "native",
      description:
        "React Native makes it easy to develop applications and then deploy them natively to multiple mobile platforms.",
      link:
        "https://www.lynda.com/React-Native-tutorials/React-Native-Ecosystem-Workflow/560206-2.html",
      release_date: "3/8/2017",
      views: "5,618",
      image:
        "https://cdn.lynda.com/course/560206/560206-636244054803771570-16x9.jpg",
    },
    {
      id: 3,
      title: "From React to React Native",
      category: "react",
      description:
        "With React Native, you can leverage your existing React knowledge to build native iOS and Android apps. In this course, explore the different components that make up a basic React Native application, and learn how to use this platform to build your own native projects.",
      link:
        "https://www.lynda.com/React-Native-tutorials/From-React-React-Native/577371-2.html",
      release_date: "4/11/2017",
      views: "TBD",
      image:
        "https://cdn.lynda.com/course/577371/577371-636271681889296588-16x9.jpg",
    },
    {
      id: 4,
      title: "Framer for UX Design",
      category: "framer",
      description:
        "You can use Framer to create JavaScript-based app prototypes quickly and easily. UX designers, engineers, interaction designers, and more can get refreshed on UX fundamentals in this course, and then dive into navigating Framer.",
      link:
        "https://www.lynda.com/FramerJS-tutorials/UX-Design-Tools-Framer/562923-2.html",
      release_date: "03/16/2017",
      views: "3,570",
      image:
        "https://cdn.lynda.com/course/562923/562923-636250874641759804-16x9.jpg",
    },
    {
      id: 5,
      title: "Migrating to Typescript 2",
      category: "typescript",
      description:
        "TypeScript is a newer Microsoft language built on JavaScript that is finding wide adoption in the Microsoft, Google, and Angular communities. Like many things JavaScript these days, TypeScript is changing rapidly as it grows. This course introduces the latest enhancements of this rapidly evolving language including kinds of types, approaches for interacting with types, and more.",
      link:
        "https://www.lynda.com/JavaScript-tutorials/Migrating-TypeScript-2/585078-2.html",
      release_date: "04/10/2017",
      views: "TBD",
      image:
        "https://cdn.lynda.com/course/585078/585078-636270752903315067-16x9.jpg",
    },
    {
      id: 6,
      title: "Learning Redux",
      category: "react",
      description:
        "Redux is a JavaScript library for managing client data in apps. You can use Redux together with React or with any other view library. Inspired by Flux, Redux attempts to make state mutations predictable by imposing certain restrictions on how and when updates can happen. ",
      link:
        "https://www.lynda.com/React-js-tutorials/Learning-Redux/540345-2.html?srchtrk=index%3a9%0alinktypeid%3a2%0aq%3aReact%0apage%3a1%0as%3arelevance%0asa%3atrue%0aproducttypeid%3a2",
      release_date: "12/23/2016",
      views: "21,833",
      image:
        "https://cdn.lynda.com/course/540345/540345-636178326778026710-16x9.jpg",
    },
    {
      id: 7,
      title: "Building a Web Interface with React.js",
      category: "react",
      description:
        "React is a JavaScript library for creating user interfaces that display dynamic data. Because of its reusable components and unique data rendering approach, the web interfaces you create with React are flexible, fast, and lightweight.",
      link:
        "https://www.lynda.com/React-js-tutorials/Building-Web-Interface-React-js/495271-2.html?srchtrk=index%3a4%0alinktypeid%3a2%0aq%3aReact%0apage%3a1%0as%3arelevance%0asa%3atrue%0aproducttypeid%3a2",
      release_date: "07/26/2016",
      views: "62,462",
      image:
        "https://cdn.lynda.com/course/495271/495271-636051283523699944-16x9.jpg",
    },
    {
      id: 8,
      title: "Building an App with ReactJS and MeteorJS",
      category: "react",
      description:
        "Meteor and React are a powerhouse combination. Meteor gives you a fast, easy-to-use solution for data management across clients and servers, and React gives you a way to structure your app's UI from reusable components. The combination allows you to create your dream apps: dynamic, data driven, and cross-platform.",
      link:
        "https://www.lynda.com/React-js-tutorials/Building-App-React-js-MeteorJS/533228-2.html",
      release_date: "12/21/2016",
      views: "31,266",
      image:
        "https://cdn.lynda.com/course/533228/533228-636179098122239600-16x9.jpg",
    },
    {
      id: 9,
      title: "React Native Ecosystem and Workflow",
      category: "native",
      description:
        "React Native makes it easy to develop applications and then deploy them natively to multiple mobile platforms.",
      link:
        "https://www.lynda.com/React-Native-tutorials/React-Native-Ecosystem-Workflow/560206-2.html",
      release_date: "3/8/2017",
      views: "5,618",
      image:
        "https://cdn.lynda.com/course/560206/560206-636244054803771570-16x9.jpg",
    },
    {
      id: 10,
      title: "From React to React Native",
      category: "react",
      description:
        "With React Native, you can leverage your existing React knowledge to build native iOS and Android apps. In this course, explore the different components that make up a basic React Native application, and learn how to use this platform to build your own native projects.",
      link:
        "https://www.lynda.com/React-Native-tutorials/From-React-React-Native/577371-2.html",
      release_date: "4/11/2017",
      views: "TBD",
      image:
        "https://cdn.lynda.com/course/577371/577371-636271681889296588-16x9.jpg",
    },
    {
      id: 11,
      title: "Framer for UX Design",
      category: "framer",
      description:
        "You can use Framer to create JavaScript-based app prototypes quickly and easily. UX designers, engineers, interaction designers, and more can get refreshed on UX fundamentals in this course, and then dive into navigating Framer.",
      link:
        "https://www.lynda.com/FramerJS-tutorials/UX-Design-Tools-Framer/562923-2.html",
      release_date: "03/16/2017",
      views: "3,570",
      image:
        "https://cdn.lynda.com/course/562923/562923-636250874641759804-16x9.jpg",
    },
    {
      id: 12,
      title: "Migrating to Typescript 2",
      category: "typescript",
      description:
        "TypeScript is a newer Microsoft language built on JavaScript that is finding wide adoption in the Microsoft, Google, and Angular communities. Like many things JavaScript these days, TypeScript is changing rapidly as it grows. This course introduces the latest enhancements of this rapidly evolving language including kinds of types, approaches for interacting with types, and more.",
      link:
        "https://www.lynda.com/JavaScript-tutorials/Migrating-TypeScript-2/585078-2.html",
      release_date: "04/10/2017",
      views: "TBD",
      image:
        "https://cdn.lynda.com/course/585078/585078-636270752903315067-16x9.jpg",
    },
  ];
  res.send("hello world");
});
