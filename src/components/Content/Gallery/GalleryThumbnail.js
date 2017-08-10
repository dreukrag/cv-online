import React from "react"

export class GalleryThumbnail extends React.Component {

    openModal = () => (
        "test"
    )

    render = () => (
        <div onClick={this.openModal}>
            <h3>Empresa</h3>
            <h5>Período</h5>
            <img src="" alt="" />
        </div>
    )

}