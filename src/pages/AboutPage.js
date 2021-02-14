import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';
import profile from '../Images/about-profile.png'

function AboutPage(props) {
    return (
       <div className='container-fluid aboutContainer'>
            <Hero title={props.title}/>
           <Content>
                <div className='aboutMe'>
                    <p className='display-4 hello'> Hello!</p> 
                    <p>Welcome to the ABOUT ME portion of this tour. <br/>My name is Taylor Gonzales, and I live everyone's new favorite sea side city Portland Maine. I'm a Web Developer and Photographer, with a passion for eye catching design. I'm currently attending the full stack coding bootcamp through UNH, and hope to land my first full-time job as a front end web developer within the year. </p>
                    <p>I've had a camera in my hand most of my life. My mom's film camera, the old camcorder, those early digital point and shoots that seemed so ground breaking. Photography is my favorite way to document nostalgia, as someone who's so future focused photographs allow me to take time to slow down and enjoy some of my favorite memories. Most of my proffesional work revolves around coffee and branding. I spent 2 years as the social media manager at Bard Coffee in Portland and was able to learn to how to capture new moments in the same space, while also making it feel cohesive with consistent style.</p>

                    <p>I have a tendency to be an open book, I use social media as an open diary, I have very little shame, and will talk about pretty much anything I feel passionate about with little conviction. I plan to add a blog portion to my site soon and hope to share more thought's, writing helps me get thoughts that occupy to much of my brain space out and on to the next thing.</p>

                    <p>Last but not least I'm VERY queer. I'm gay and in a polyamorous throuple with plenty of queer friends all over the spectrum,and always willing and happy to work with lgbtq+ and bipoc humans.</p>

                    <p>If you'd like to chat, check out my contact page or feel free to check reach out to me from one of my socials. <br/>Thanks for stopping by.</p> 
                    <p> Best <br/> Taylor Gonz.</p>

                </div>
            </Content>
       </div>
    )
}

export default AboutPage;