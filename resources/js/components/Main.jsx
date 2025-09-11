import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../css/app.css';
import ChatBox from "./ChatBox.jsx";
import HomePage from './HomePage.jsx';
import Profile from './Profile.jsx';
import Lesson from './Lesson.jsx';
if (document.getElementById('main')) {
    const rootUrl = "jetcourses.ru"; 

    ReactDOM.createRoot(document.getElementById('main')).render(
        <React.StrictMode>
            <ChatBox rootUrl={rootUrl} />
        </React.StrictMode>
    );
}
if (document.getElementById('main-home')) {

    const component = document.getElementById('main-home');
    const props = Object.assign({}, component.dataset);
        ReactDOM.createRoot(document.getElementById('main-home')).render(
        <React.StrictMode>
            <HomePage/>
        </React.StrictMode>
    );
}

if (document.getElementById('main-profile')) {

    const component = document.getElementById('main-profile');
    const props = Object.assign({}, component.dataset);
        ReactDOM.createRoot(document.getElementById('main-profile')).render(
        <React.StrictMode>
            <Profile stepNumbers={component.getAttribute('stepNumbers')} coursesInfo={component.getAttribute('coursesinfo')}/>
        </React.StrictMode>
    );
}

if (document.getElementById('main-lesson')) {
    const component = document.getElementById('main-lesson');
    const props = Object.assign({}, component.dataset);
    ReactDOM.createRoot(document.getElementById('main-lesson')).render(
        <React.StrictMode>
            <Lesson name={component.getAttribute('name')} courseId={component.getAttribute('courseId')} link={component.getAttribute('link')} videoStep={component.getAttribute('videoStep')} videoNames={component.getAttribute('videoNames')} videoIds={component.getAttribute('videoIds')} />
        </React.StrictMode>
    );
}