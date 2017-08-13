import React from 'react'
import ContentComponent from './ContentComponent'
import logo from './home.jpg';
import capImg from './homePic.jpg';


export class ContentComponentHome extends React.Component {
    render = () =>
        (
            <div>
                <ContentComponent logo={logo} caption="Home" captionImage={capImg}>
                    <p className="lead">Atualmente disponível, meu interesse é trabalhar na área de front-end. Possuo experiência principalmente com React, mas também AngularJs.</p>
                    <p>Quanto aos básicos, tenho experiencia com HTML5, CSS 3.0, Node.js, Firebase e Git . Para javascript uso o padrão es6. Também possuo experiência em C#, VBA e SQL e sou familiar com Java, php, python. Apesar de apenas um hobby eu também possuo experiência com SketchUp e sou familiar com Blender.</p>
                    <p>Tenho familiaridade com Kanban, Agile e Scrum.</p>
                    <p>Tenho muita facilidade em aprender a usar novas ferramentas muito rapidamente.</p>
                </ContentComponent>
            </div>
        )
}