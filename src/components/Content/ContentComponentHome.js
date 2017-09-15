import React from 'react'
import ContentComponent from './ContentComponent'
import logo from './home.jpg';
import capImg from './homePic.jpg';
import filipe from './IMG037.jpg'

export class ContentComponentHome extends React.Component {
    render = () =>
        (
            <div>
                <style dangerouslySetInnerHTML={{
                    __html: [
                        '.parallax__blur-assist:before {background-image:url("' + filipe + '")}'
                    ]
                }}>
                </style>
                <div className="parallax parallax__blur parallax__blur-assist large-window" >
                    <div className="content-component__caption-brand" style={{ paddingTop:"75px",paddingLeft:"50px"}}>
                        <p className=" animation-rtlf">Filipe</p>
                        <p className=" animation-rtl10">Alexandre</p>
                        <p className="  animation-rtl20">Groh</p>
                    </div>
                    <div className="content-component__caption-main">
                        <p className="lead">Atualmente disponível, meu interesse é trabalhar na área de front-end. Possuo experiência principalmente com React, mas também AngularJs.</p>
                        <p>Quanto aos básicos, tenho experiencia com HTML5, CSS 3.0, Node.js, Firebase e Git . Para javascript uso o padrão es6. Também possuo experiência em C#, VBA e SQL e sou familiar com Java, php, python. Apesar de apenas um hobby eu também possuo experiência com SketchUp e sou familiar com Blender.</p>
                        <p>Conheço e uso com Kanban, Agile e Scrum.</p>
                        <p>Tenho muita facilidade em aprender a usar novas ferramentas em pouco tempo.</p>
                    </div>
                </div>
                <div className="container-fluid content-component__home-spacer">
                </div>
            </div>
        )
}