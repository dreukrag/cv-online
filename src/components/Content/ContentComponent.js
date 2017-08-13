import React from 'react'


export default class ContentComponent extends React.Component {
    render = () => (
        <div >
            <div className="parallax" style={{ backgroundImage: "url(" + this.props.logo + ")" }}>
                <div className="caption">
                    {/* {this.props.imageCaption == null ? <img src={this.props.captionImage} alt="" className="homeImage img-circle" />:false} */}
                    <span className="caption__text transparent__p">{this.props.caption}</span>
                </div>
            </div>
            <div className="container-fluid content-component">
                {this.props.children}
            </div>
        </div>
    )
}