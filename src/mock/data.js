import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Vasu Negi', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: 'Hi! I am ',
  name: 'Vasu Negi',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1_PBhgakMOXMg_liZZ1nMKakRraF8ll6q/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'facialImage.jpg',
    title: 'REAL TIME FACIAL EXPRESSION DETECTION AND EMOTION RECOGNITION USING CONVNET',
    info:
      'Machine Learning Application for detecting facial expressions of the user and recognize emotions using' +
      'Convolutional Neural Networks and OpenCV. \n Implemented the modules using Keras to create and train ConvNet while' +
      'using techniques such as Dropout and Batch Normalization to improve the performance of' +
      'the model, and OpenCV to track facial expressions and display the emotions on the screen in Real Time. \n The models were trained' +
      'on Kaggle to take advantage of much larger RAM and GPU, and the performances were plotted and compared.',
    info2: '',
    url: 'https://www.youtube.com/watch?v=UpqIkwKOAPc',
    repo: 'https://github.com/vasu-negi/Pattern-Recognition', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'DeepFake.jpg',
    title: 'FAKE IMAGE DETECTION USING FINELY TUNED CONVNET WITH EXPLANATION',
    info:
      'Machine Learning program for detecting image manipulation using finely tuned Convolutional Neural Networks.' +
      '\n Implemented the program using PyTorch to create and finely tune the ConvNet on the dataset (140k Real and Fake' +
      'images - 70k real faces (from Flickr) and 70k fake' +
      'faces (GAN-generated)). \n Used LIME (Local Interpretable Model-Agnostic Explanations) to present the contribution of each feature in the predictions of the data samples.',
    info2: '',
    url: '',
    repo: 'https://www.kaggle.com/vasunegi1995/fakeimage-detection-using-convnet-with-explanation', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'gossip_dos.jpg',
    title: 'ASYNCHRONOUS goSIMULATION USING ACTOR MODEL',
    info:
      'Used AKKA.NET’s Actor modeling in F# to implement Gossip and Push-Sum algorithms used for group communication and for aggregate computation.' +
      'The algorithm was tested on Full Network, 2D Grid, Line, and Imperfected 2D Grid topologies and interesting finds were presented in the output file.' +
      'Implemented a failure model and a fault tolerant model to handle the faulty nodes and observe the convergence of the network.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'lucassquare.jpg',
    title: 'LUCAS SQUARE PYRAMID',
    info:
      'Used AKKA.NET’s Actor modeling in F# to build a distributed system solution to solve the Lucas Square Pyramid while utilizing concurrent computation.' +
      'The application distributed the jobs among various actors where each actor task was to solve a bunch of problems and report the results back to the supervisor.' +
      'The application used multiple cores on a single machine as well as on multiple machines when connected to a LAN to solve the problem much faster than a traditional program.',
    info2: '',
    url: '',
    repo: '', // if no repo, the button will not show up
  },

  {
    id: nanoid(),
    img: 'project.jpg',
    title: 'RISING CITY',
    info:
      'Java application for tracking the construction of all buildings under construction in a new city.' +
      'Implemented Min-Heap and Red-Black Tree for efficiently storing, retrieving, and updating the data in our system.',
    info2: '',
    url: '',
    repo: 'https://github.com/vasu-negi/RisingCity', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'vasu.negi@ufl.edu',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'facebook',
      url: 'https://www.facebook.com/negi.vasu/',
    },

    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/vasunegi/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/vasu-negi',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
