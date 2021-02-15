import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import instagram from '../Images/social-icons/instagram-1.png';
import youtube from '../Images/social-icons/youtube-1.png';
import linkedin from '../Images/social-icons/linkedin-1.png'
import gitHub from '../Images/social-icons/github.png'

import Hero from '../components/Hero';
import Content from '../components/Content';

// import Axios from 'Axios';


export default class contactPage extends React.Component {
    constructor(props) {
      super(props);
      this.submitForm = this.submitForm.bind(this);
      this.state = {
        status: ""
      };
    }
  
    render() {
      const { status } = this.state;
      return (
        <div className="contactPage container-fluid">
           <Hero title={this.props.title}/>
                <div className='d-flex justify-content-center'>
                    
                        <form className='form  col-sm-12 col-md-8'
                            onSubmit={this.submitForm}
                        action="https://formspree.io/f/mgepbovj"
                        method="POST"
                        >
                        <div className='form-group'>
                            <label htmlFor='full-name'>Name</label>
                            <input className='form-control' id='full-name' name='name' type='text' value={this.state.name} onChange={this.handleChange}/>
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'>Email</label>
                            <input  className='form-control' id='email' name='email' type='email' value={this.state.email} onChange={this.handleChange}/>
                        </div>
                        <div className='form-group'>
                            <label>Message:</label>
                            <textarea className='form-control' rows='3' type="text" name="message" />
                        </div>
                        <div className='form-group'>
                            {status === "SUCCESS" ? <p>Thanks!</p> : <button className='button'>Submit</button>}
                            {status === "ERROR" && <p>Ooops! There was an error.</p>}
                        </div>
                </form>
                </div>
                <div className="socials justify-content-center offset-2 col-8">

                    <a href="https://www.instagram.com/taylorgonz/" target="_blank"><img className="navIcons" src={instagram} alt="instagram icon."/></a>

                    <a href="https://www.youtube.com/channel/UC7b6cmjQUEORq91I9f1sJWw?view_as=subscriber" target="_blank"><img className="navIcons" src={youtube} alt="youtube icon."/></a>

                    <a href="https://www.linkedin.com/in/taylorgonz/" target="_blank"><img className="navIcons" src={linkedin}  alt="linkedin icon."/></a>

                    <a href="https://github.com/Taylorgonz" target="_blank"><img className="navIcons" src={gitHub}  alt="github icon."/></a>
                </div>
            </div>

      );
    }
  
    submitForm(ev) {
      ev.preventDefault();
      const form = ev.target;
      const data = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          form.reset();
          this.setState({ status: "SUCCESS" });
        } else {
          this.setState({ status: "ERROR" });
        }
      };
      xhr.send(data);
    }
}

// export default contactPage;