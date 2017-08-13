import React from 'react'
import ContentComponent from './ContentComponent'
import logo from './PensiveParakeet.jpg';

export class ContentComponentAbout extends React.Component {
    render = () => (
        <div>
            <ContentComponent logo={logo} caption="Sobre">
                <p>Apesar de trabalhar com TI tenho as minhas outras paixões são história, relações internacionais, defesa e meu dog.</p>
                <p>Amo correr, gamer e modelar, sketchup sendo um grande hobby meu.</p>
                <p>Apesar de não gostar de ficção tenho uma pequena biblioteca pessoal sobre história em constante expansão.</p>
            </ContentComponent>
        </div>
    )
}