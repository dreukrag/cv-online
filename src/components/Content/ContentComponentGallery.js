import React from 'react'
import ContentComponent from './ContentComponent'
import logo from './Boston.jpg';
import {GalleryItem, GalleryThumbnail} from './Gallery'

export class ContentComponentGallery extends React.Component {
    render = () =>
        (
            <div>
                <ContentComponent logo={logo} caption="Experiências">
                    <GalleryThumbnail/>
                    <GalleryThumbnail/>
                    <GalleryThumbnail/>


                    <p className="lead">Medgrupo/Ventron – Desenvolvedor Front-End – 2016 – 2017</p>
                    <p>Atuei no desenvolvimento do aplicativo medsoft para mobile, usando Ionic, Cordova e AngularJS.
                    </p>
                    <p>Próximo fui escolhido para fazer parte do time responsável pela portação das apostilas físicas para nossa plataforma mobile, e com foco em inovar o design para manter o diferencial medsoft tanto no materia físico quanto digital. Diferenciais como interatividade evitando uma simples cópia digital.
                        Também criei o sistema usado para uso de temas, permitindo reuso de componentes mas aplicando estilos diferentes.</p>
                    <p className="lead">Cadmus - Consultor - 2014 - 2016</p>
                    <p>Participei internamente dando manutenção e desenvolvendo o nosso ERP além de criar ferramentas de controle de contas celular e integrações com sistema de pagamentos do Itaú</p>
                    <p className="lead">Cadmus - Estagiário - 2012 - 2014</p>
                    <p>Como estagiário fiquei responsável por dar manutenção aos sistemas internos e logo passei a cuidar do ERP além de trabalhar como consultor a serviçe da Cadmus</p>
                    <p className="lead">Total Express/Cadmus - Consultor - 2013</p>
                    <p>Responsável pro criar aplicação consolidando cronogramas de entregas com capacidade de rastreamento.</p>
                    <p>Criação de processo automatizado para gerar relatórios contendo gráficos complexas</p>
                    <p>Criação de processo automatizado para impressão de etiquetas com código de barras</p>
                    <p className="lead">Brand Analytics/Cadmus - Consultor - 2013</p>
                    <p>Criei um processe totalmente automatizado para análise de dados estatísticos complexos, com geração de relatório inclusive com a criação de power-points com os gráficos pronto para serem apresentados. Reduzi o tempo gasto para executar tais atividades de 1 semestre para minutos.</p>
                </ContentComponent>
            </div>
        )


}