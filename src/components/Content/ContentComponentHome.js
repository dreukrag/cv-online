import React from 'react'
import ContentComponent from './ContentComponent'
import logo from './home.jpg';


export class ContentComponentHome extends React.Component {
    render = () =>
        (
            <div>
                <ContentComponent logo={logo} caption="Home">
                    <p className="lead">Bem vindo a minha humilde página, aqui você pode encontrar minhas informações profissionais e para contato.</p>
                </ContentComponent>
            </div>
        )
}