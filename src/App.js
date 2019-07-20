import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Content from './components/Content'
import MenuMobile from './components/MenuMobile';

export default class extends Component {
  state = {
    isOpen: false,
    menuMode: null,
    movement: null
  }
  openMenu = () => {
    this.setState({
      isOpen: true,
      menuMode: 'menu-in',
      movement: 'movement'
    })
    document.body.classList.add('menu-open')
    setTimeout(() => {
      this.setState({
        movement: null
      })
    }, 50);
  }
  closeMenu = () => {
    this.setState({
      menuMode: 'menu-out'
    })
    document.body.classList.remove('menu-open')
    setTimeout(() => {
      this.setState({
        isOpen: false
      })
    }, 200);
  }
  render() {
    const {menuMode, movement} = this.state
    return (
      <div className="container">
        <Navbar openMenu={this.openMenu} />
        <Content />
        {this.state.isOpen && <MenuMobile closeMenu={this.closeMenu} menuMode={menuMode} movement={movement} />}
      </div>
    );
  }
}