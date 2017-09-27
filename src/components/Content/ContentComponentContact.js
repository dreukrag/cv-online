import React from 'react'
import ContentComponent from './ContentComponent'
import logo from './CostaRicanFrog.jpg';

export class ContentComponentContact extends React.Component {
    render = () => (
        <div>
            <ContentComponent logo={logo} caption="Contato">
                <p>Você pode me achar no LinkedIn ou via email:</p>
                <address>
                    <strong>LinkedIn</strong> <br/>
                    <a href="https://www.linkedin.com/in/filipe-alexandre-groh-889b1b98/">Filipe Groh</a>
                </address>
                <address>
                    <strong>Filipe Alexandre Groh</strong><br />
                    <a href="mailto:#">filipegroh@gmail.com</a>
                </address>
                <address>
                    <strong>Steam</strong> <br/>
                    <a href="http://steamcommunity.com/id/filipegroh/">Cass</a>
                </address>
            </ContentComponent>
        </div>
    )
}