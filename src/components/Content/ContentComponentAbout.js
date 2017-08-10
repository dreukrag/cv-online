import React from 'react'
import ContentComponent from './ContentComponent'
import logo from './PensiveParakeet.jpg';

export class ContentComponentAbout extends React.Component {
    render = () => (
        <div>
            <ContentComponent logo={logo} caption="Sobre">
                
                <p>Apesar de trabalhar com TI tenho uma grande paixão sobre história, relações internacionais e defesa.</p>
                <p>Amo correr e modelar, sketchup sendo um grande hobby meu.</p>
                <p>Apesar de não gostar de ficção tenho uma pequena biblioteca pessoal sobre história em constante expansão.</p>
                
                <p><b>Idiomas</b></p>
                <p>Falo inglês fluente</p>
                <p>Conhecimento</p>
                <ul>
                    <li>React.js - Esta página feita toda em React</li>
                    <li>Firebase - Host deste site</li>
                    <li>Node.js</li>
                    <li>C#</li>
                    <li>Sketchup</li>
                    <li>CSS</li>
                    <li>HTML</li>
                    <li>AngularJS</li>
                    <li>Python</li>
                    <li>Cordoba</li>
                    <li>Ionic</li>
                    <li>SQL</li>
                    <li>VBA</li>
                </ul>
            </ContentComponent>
        </div>
    )
}