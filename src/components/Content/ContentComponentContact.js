import React from 'react'
import ContentComponent from './ContentComponent'
import logo from './CostaRicanFrog.jpg';

export class ContentComponentContact extends React.Component {
    render = () => (
        <div>
            <ContentComponent logo={logo} caption="Contact">
                <p>Você pode me achar no LinkedIn ou via email:</p>
                <address>
                    <abbr title="Steam"></abbr>http://steamcommunity.com/id/filipegroh/<br />
                    <abbr title="Steam"></abbr>filipegroh<br />
                    <abbr title="Steam"></abbr>filipegroh<br />
                </address>

                <address>
                    <strong>LinkedIn</strong>
                    <a href="https://www.linkedin.com/in/filipe-alexandre-groh-889b1b98/">Filipe Groh</a>
                </address>
                <address>
                    <strong>Filipe Alexandre Groh Name</strong><br />
                    <a href="mailto:#">filipegroh@gmail.com</a>
                </address>

            </ContentComponent>
        </div>
    )
}