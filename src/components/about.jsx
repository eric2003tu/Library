import React from 'react';
import '../styles/About.css';

const About = () => {
    return (
        <>
        <div className="about-container">
            <div className="about-card">
                <h1 className="about-title">About Us</h1>
                <p className="about-description">
                We are E-library, a big company in charge of  library managemnts .
                we have invested our everything in having all Rwandans with a lot of opportunities to read books from wherever they may be.
                we offer services like borrowing, and magaging borrowed book for all kind of library like school libraries, 
                public library and private libraries! 
                </p>

                <div className="about-grid">
                    <div className="about-box">
                        <h2>Our Mission</h2>
                        <p>We strive to develop innovative solutions that improve people's lives.</p>
                    </div>

                    <div className="about-box">
                        <h2>Our Vision</h2>
                        <p>To be a global Library managements advisors and enhancing quality and proficiency in library managements.</p>
                    </div>
                </div>

                <div className="about-team">
                    <h2>Meet Our Team</h2>
                    <p>We're open 24/7, ready to assist every individual in sharpening their skills, expanding their knowledge, and advancing their research. Our dedicated team is always on standby to provide guidance, ensuring you receive the best support possible</p>
                    <div className="team-images">
                        <img src="https://img.freepik.com/free-psd/contact-icon-illustration-isolated_23-2151903337.jpg" alt="Team Member" className="team-member" />
                        <img src="https://img.freepik.com/free-psd/contact-icon-illustration-isolated_23-2151903337.jpg" alt="Team Member" className="team-member" />
                        <img src="https://img.freepik.com/free-psd/contact-icon-illustration-isolated_23-2151903337.jpg" alt="Team Member" className="team-member" />
                    </div>
                </div>
            </div>
            
        </div>
        <div id='footer'>
        <div className="footer-bottom">
            <p>© 2025 E-library. All Rights Reserved.</p>
        </div>
    </div>
    </>

    );
};

export default About;
