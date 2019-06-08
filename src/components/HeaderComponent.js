import React, { Component } from 'react';
import { Media, Navbar,  Nav, NavbarToggler, Collapse, NavItem, NavDropdown, Form, Formcontrol, Button } from 'reactstrap';
import {NavLink} from 'react-router-dom';


class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isNavOpen: false
    };
    this.toggleNav = this.toggleNav.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll(event) {
      if (window.scrollY === 0 && this.state.scrolling === true) {
          this.setState({scrolling: false});
      }
      else if (window.scrollY !== 0 && this.state.scrolling !== true) {
          this.setState({scrolling: true});
      }
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return(

      <div style={{ opacity: this.state.scrolling ? '1' : '0.8'}} className={`header ${this.state.scrolling ? '' : ''}`}>
            <div className="row">
              <div className={`col-6 `}>
                <picture >
                      <source media="(max-width: 575px)" srcset="/assets/images/imgs-12.png" />
                      <source media="(max-width: 768px)" srcset="/assets/images/imgs-12.png" />
                      <source media="(max-width: 991px)" srcset="/assets/images/imgs-12.png" />
                      <source media="(max-width: 1199px)" srcset="/assets/images/imgs-12.png" />
                      <img className={` ${this.state.scrolling ? 'logo' : ''}`} src="/assets/images/imgs-12.png"  />
                </picture>

              </div>

              <div className={`col-5 ${this.state.scrolling ? '' : ''}`}>

              <div className={`row nav-3 ${this.state.scrolling && !this.state.isNavOpen ? ' col-logo' : ''} `}>
                <div className={`row nav-2 ${this.state.scrolling ? 'd-none' : ''}`}>
                <Navbar dark>
                  <div >
                    <Nav  navbar >
                      <NavItem className="mr-4 navhead">
                        <NavLink className="nav-link mr-2"  to='/home'><span className="fa fa-homea fa-lg"></span> IDIOMA </NavLink>
                      </NavItem>
                    </Nav>
                  </div>
                </Navbar>
                </div>

                <div className="row nav-1" >

                <Navbar dark expand="xl">
                  <div >
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                      <Nav  navbar >
                        <NavItem className="mr-4 navhead">
                          <NavLink className="nav-link"  to='/home'><span className="fa fa-homea fa-lg"></span> MENU </NavLink>
                        </NavItem>
                        <NavItem className="mr-4">
                          <NavLink className="nav-link"  to='/home'><span className="fa fa-homea fa-lg"></span> ACTIVIDADES </NavLink>
                        </NavItem>
                        <NavItem className="mr-4">
                          <NavLink className="nav-link"  to='/home'><span className="fa fa-homea fa-lg"></span> RESERVAS </NavLink>
                        </NavItem>
                        <NavItem className="mr-4">
                          <NavLink className="nav-link"  to='/home'><span className="fa fa-homea fa-lg"></span> GALERÍA </NavLink>
                        </NavItem>
                        <NavItem className="mr-4">
                          <NavLink className="nav-link"  to='/home'><span className="fa fa-homea fa-lg"></span> CONTACTO </NavLink>
                        </NavItem>
                      </Nav>
                    </Collapse>
                  </div>
                  </Navbar>

                  </div>

                </div>




              </div>
            </div>
          </div>
    );
  }
}

export default Header;
