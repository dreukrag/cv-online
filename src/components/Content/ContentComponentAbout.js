import React from 'react'
import ContentComponent from './ContentComponent'
import logo from './PensiveParakeet.jpg';

export class ContentComponentAbout extends React.Component {
    render = () => (
        <div>
            <ContentComponent logo={logo} caption="Sobre">

            </ContentComponent>
        </div>
    )
}