import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './slide.css'; 
const SlideExample = () => {
    const images = [
        "https://assets.contenthub.wolterskluwer.com/api/public/content/2cf0e6ac7ba44a309413b0f3445ade15?v=a351a4ac",
        'https://psrihospital.com/wp-content/uploads/2023/07/Treatments-available-for-Heart-Diseases.jpg',
        'https://www.zeiss.com/content/dam/med-hcp/reference-master/specialties/neurosurgery/images/stage-neurosurgery-page.jpg',
    ];

    return (
        <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                </div>
            </div>
        </Slide>
    );
};

export default SlideExample;