// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import linkedinIcon from "./images/linkedin.svg"
import instagramIcon from "./images/instagram.svg"

export default {

  //   Header Details ---------------------
  name: "Natha Ram",
  headerTagline: [
    //Line 1 For Header
    "MERN stack developer",
  ],

  contactEmail: "natharamsoyla701@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "OnjunoClone",
      para:
        "This is cloned web app of onjuno website. In this application I focus on only designing and responsive web app. So there will be no functionality related user's data(inputs)",
      imageSrc:
        "https://images.unsplash.com/photo-1487837647815-bbc1f30cd0d2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Njl8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      url: "https://onjuno-clone.netlify.app",
    },
    {
      title: "BMI Tracker",
      para:
        "React Hooks app to calculate the BMI of a person. It can store the data for 7 days with the help of Local Storage. Standard Body Mass Index calculator. Body mass index (BMI) is a measure of body fat based on height and weight that applies to adult men and women. You just need to submit details and it will calculate BMI according to your given data. It can have up to 7 day's data and will map in a graph to create a graph of counted BMI",
      imageSrc:
        "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",
      url: "https://bmi-tracker.netlify.app",
    },
    {
      title: "Job Search App",
      para:
        "It is react app where user can find jobs available at GitHub. I have implemented GitHub API to get jobs available at GitHub and displayed using react js. User can filter jobs by as full-time jobs or all type jobs",
      imageSrc:
        "https://images.unsplash.com/photo-1605153864431-a2795a1b2f95?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXwyNTY3ODl8fGVufDB8fHw%3D&auto=format&fit=crop&w=400&q=60",
      url: "https://job-searching-react-app.netlify.app",
    },
    {
      title: "Resort App",
      para:
        "It is a react app, Where user can see list of room available and details of each and individual room. User can filter rooms by different types",
      imageSrc:
        "https://images.unsplash.com/photo-1492171983775-a51717616c0d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjB8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      url: "https://reactjs-resort-app.netlify.app",
    },
    {
      title: "Redux Shopping Cart",
      para:
        "Shopping App to adding items into cart. It is built in ReactJS and Redux. In this app user can add item to cart and also can delete item from cart. User can update quantity of items in the cart and can update cart",
      imageSrc:
        "https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      url: "https://redux-shopping-cart-app.netlify.app",
    },
    {
      title: "React Shopping App",
      para:
        "Shopping App to adding items into cart. It is built in ReactJS. In this app user can add item to cart and also can delete item from cart. User can update quantity of items in the cart and can update cart. User can view details of products by clicking on item's image",
      imageSrc:
        "https://images.unsplash.com/photo-1504083898675-c896ecdae86e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
      url: "https://shopping-app-cart.netlify.app",
    },
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "My name is Natha Ram, I'm a Software developer(MERN Stack) at Acuments Studio. I am very passionate and dedicated to my work.",

  aboutParaTwo:
    "I have more than 2 year experience in web development. I have acquired the skills necessary to build great and premium websites.",

  aboutParaThree: "You can hire me by directly reaching out to me.",

  aboutParaFour: "Check out my work on Github.",
  //   End About Section ---------------------

  // Skills Section ---------------

  skills: [
    {
      img: htmlIcon,
    },
    {
      img: cssIcon,
    },
    {
      img: jsIcon,
    },
    {
      img: reactIcon,
    },
    {
      img: designIcon,
    },
    {
      img: codeIcon,
    },
  ],

  // End Skills Section --------------------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    { img: githubIcon, url: "https://github.com/Natharam" },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/natharam123/",
    },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/jaipal_natha_45_/",
    },
  ],

  // End Contact Section ---------------
}
