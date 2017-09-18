import React from 'react'
import ContentComponent from './ContentComponent'
import logo from './Boston.jpg';
import { GalleryItem, GalleryThumbnail } from './Gallery'

export class ContentComponentGallery extends React.Component {
    render = () =>
        (
            <div>
                <ContentComponent logo={logo} caption="Experiências">
                    <div className="GalleryThumb__container">
                        <GalleryThumbnail empresa="Medgrupo" logo={logo} periodo="2017" cargo="Desenvolvedor Front-End Jr">
                            <p>Parte do time de desenvolvimento do aplicativo medsoft para mobile.</p>
                            <p>Parte do time de desenvolvimento das parte de apostila do aplicativo mobile.</p>
                            <p>Criei o sistema usado para uso de temas nas apostilas.</p>
                        </GalleryThumbnail>
                        <GalleryThumbnail empresa="Total Express" logo={logo} periodo="2013" cargo="Consultor">
                            <p>Criei aplicação consolidando cronogramas de entregas com capacidade de rastreamento.</p>
                            <p>Automatizei a criação de relatórios contendo gráficos complexos.</p>
                            <p>Criei aplicação para impressão de etiquetas com código de barras.</p>
                        </GalleryThumbnail>
                        <GalleryThumbnail empresa="Brand Analytics" logo={logo} periodo="2013" cargo="Consultor">
                            <p>Criei um processe totalmente automatizado para análise de dados estatísticos complexos, com geração de relatório em power-points e excel contendo os gráficos pronto para serem apresentados. Reduzi o tempo gasto para executar tais atividades de 1 semestre para minutos.</p>
                        </GalleryThumbnail>
                        <GalleryThumbnail empresa="Cadmus" logo={logo} periodo="2012-2017" cargo="Consultor">
                            <p className="lead">Cadmus - Consultor - 2014 - 2016</p>
                            <p>Manutenção do ERP.</p>
                            <p>Desenvolvimento do ERP.</p>
                            <p>Manutenção de bancos de dados.</p>
                            <p>Criação de soluções para uso interno.</p>
                            <p>Integração do ERP com o sistema de pagamentos do Itaú.</p>
                            <p>Alocação em clientes.</p>
                            <p className="lead">Cadmus - Estagiário - 2012 - 2014</p>
                            <p>Como estagiário fiquei responsável por dar manutenção aos sistemas internos e logo passei a cuidar do ERP além de trabalhar como consultor a serviçe da Cadmus.</p>
                        </GalleryThumbnail>
                    </div>
                </ContentComponent>
            </div>
        )
}