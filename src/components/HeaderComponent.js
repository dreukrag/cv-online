import React from 'react'
import ReactDOM from 'react-dom'

export default class HeaderComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = { showDropdownMenu: false }
    }
    render = () =>
        (
            <div className="fixed-navbar">
                <nav className="navbar navbar-inverse navbar-default">
                    <div className="container-fluid">
                        {//<!-- Brand and toggle get grouped for better mobile display -->
                        }
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed"
                             aria-expanded="false" onClick={this.handleHeaderCLick}>
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                            </button>
                            <a className="brand-container" href="#"><span className="brand navbar-link">
                                <p className="navbar-text__top">Filipe</p>
                                <p className="navbar-text__underline"></p>
                                <p className="navbar-text__bottom">Alexandre Groh</p>
                            </span></a>
                        </div>

                        {//<!-- Collect the nav links, forms, and other content for toggling -->
                        }
                        <div className={" navbar-collapse"+(this.state.showDropdownMenu ? " collapse.in " : " collapse ")}>
                            <ul className="nav navbar-nav navbar-right">
                                <li onClick={this.handleLinkClickHome}><a href="#">Home</a></li>
                                <li onClick={this.handleLinkClickGallery}><a href="#">Experiências</a></li>
                                <li onClick={this.handleLinkClickContact}><a href="#">Contato</a></li>
                            </ul>
                        </div>
                        {
                            //><!-- /.navbar-collapse -->
                        }
                    </div>
                    {
                        //<!-- /.container-fluid -->
                    }
                </nav>
                <nav className="navbar navbar-inverse navbar-fixed-top" style={{ "display": "none" }}>
                    <div className="container ">
                        <ul className="nav navbar-nav ">
                            <span className="brand navbar-link">
                                <p className="navbar-text__top">Filipe</p>
                                <p className="navbar-text__underline"></p>
                                <p className="navbar-text__bottom">Alexandre Groh</p>
                            </span>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li>
                                <a href="#"><b>Home</b></a>
                            </li>
                            <li>
                                <a href="#"><b>Gallery</b></a>
                            </li>
                            <li>
                                <a href="#"><b>About</b></a>
                            </li>
                            <li>
                                <a href="#"><b>Contact</b></a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>

        )
    handleHeaderCLick = (ev) => {
        this.setState({
            showDropdownMenu: !this.state.showDropdownMenu
        })
    }

    handleLinkClickHome = (ev, destination) => {
        console.log("home");
        this.setState({
            showDropdownMenu: false
        })
        var scrollTarget = ReactDOM.findDOMNode(this.props.home);
        window.scrollTo(scrollTarget.offsetTop, 0);
    }
    handleLinkClickGallery = (ev, destination) => {
        this.setState({
            showDropdownMenu: false
        })
        //var scrollTarget = ReactDOM.findDOMNode(destination);
        //window.scrollTo(scrollTarget.offsetTop, 0);
    }
    handleLinkClickContact = (ev, destination) => {
        this.setState({
            showDropdownMenu: false
        })
        //var scrollTarget = ReactDOM.findDOMNode(destination);
        //window.scrollTo(scrollTarget.offsetTop, 0);
    }

}