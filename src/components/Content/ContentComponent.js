import React from 'react'


export default class ContentComponent extends React.Component {
    render = () => (
        <div >
            <div className="parallax" style={{ backgroundImage: "url(" + this.props.logo + ")" }}>
                <div className="caption">
                    <span className="caption__text">{this.props.caption}</span>
                </div>
            </div>
            <div className="container-fluid content-component">
                {this.props.children}
            </div>
        </div>
    )
}