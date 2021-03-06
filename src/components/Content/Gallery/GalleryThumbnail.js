import React from "react"
import { GalleryItem } from '.'
export class GalleryThumbnail extends React.Component {
    constructor(props) {
        super(props)
        this.state = { toggleModal: false }
    }
    openModal = () => {
        this.setState({toggleModal:true})
        console.log("teste");
    }
    closeModal = () =>{
        this.setState({toggleModal:false})
        
    }

    render = () => (
        <div className="GalleryThumb__main">
            {/* <style dangerouslySetInnerHTML={{
                __html: [
                    '.GalleryThumb__backgroundAssistant:before {background-image:url("' + this.props.logo + '")}'
                ]
            }}> 
            </style>*/}
            <div className={"GalleryThumb__content GalleryThumb__backgroundAssistant " + this.props.logo} onClick={this.openModal}>
                <h3 className="HideOnSmall font__image">{this.props.empresa}</h3>
                <h5 className="HideOnSmall font__image">{this.props.periodo}</h5>
                <h5 className="HideOnSmall font__image">{this.props.cargo}</h5>
            </div>
            <GalleryItem isModalOpen={this.state.toggleModal} modalClose={this.closeModal} titulo={this.props.empresa + " - " + this.props.periodo}>
                {this.props.children}
            </GalleryItem>
        </div>
    )

}