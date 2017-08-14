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
                    <div className="content-component__caption-brand" style={{ paddingTop: "50px"}}>
                        <p className=" animation-rtlf">Filipe</p>
                        <p className=" animation-rtl10">Alexandre</p>
                        <p className="  animation-rtl20">Groh</p>
                    </div>
                    <div className="content-component__caption-main">
                        <p className="lead">Atualmente disponível, meu interesse é trabalhar na área de front-end. Possuo experiência principalmente com React, mas também AngularJs.</p>
                        <p>Quanto aos básicos, tenho experiencia com HTML5, CSS 3.0, Node.js, Firebase e Git . Para javascript uso o padrão es6. Também possuo experiência em C#, VBA e SQL e sou familiar com Java, php, python. Apesar de apenas um hobby eu também possuo experiência com SketchUp e sou familiar com Blender.</p>
                        <p>Tenho familiaridade com Kanban, Agile e Scrum.</p>
                        <p>Tenho muita facilidade em aprender a usar novas ferramentas muito rapidamente.</p>
                    </div>
                    {/* <div className="content-component__caption-main  animation-rtlf">
                        <p className=" ">Filipe</p>
                    </div>
                    <div className="content-component__caption-main  animation-rtl10">
                        <p className=" animation-rtl10">Alexandre</p>
                    </div>
                    <div className="content-component__caption-main  animation-rtl20">
                        <p className=" animation-rtl20">Groh</p>
                    </div>
                    <div className="content-component__caption-sec animation-fi">
                        <p className="lead">Atualmente disponível, meu interesse é trabalhar na área de front-end. Possuo experiência principalmente com React, mas também AngularJs.</p>
                        <p>Quanto aos básicos, tenho experiencia com HTML5, CSS 3.0, Node.js, Firebase e Git . Para javascript uso o padrão es6. Também possuo experiência em C#, VBA e SQL e sou familiar com Java, php, python. Apesar de apenas um hobby eu também possuo experiência com SketchUp e sou familiar com Blender.</p>
                        <p>Tenho familiaridade com Kanban, Agile e Scrum.</p>
                        <p>Tenho muita facilidade em aprender a usar novas ferramentas muito rapidamente.</p>
                    </div> */}

                </div>
                <div className="container-fluid content-component">

                </div>
            </div>
        )
}