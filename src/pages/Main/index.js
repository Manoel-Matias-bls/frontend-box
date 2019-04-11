import React, { Component } from 'react';
import api from '../../services/api';

import logo from '../../assets/logo.svg';
import "./styles.css";

export default class Main extends Component {

  //lida com dados que mudam ao longo da execução do app
  state = {
    newBox: '',
  };

  //não se utiliza o submit do form, como no Laravel. faz-se a chamada
  //há um método criado para poder jogar as informações para api
  handleSubmit = async e => {
    e.preventDefault();

    const response = await api.post('/boxes', {
      title: this.state.newBox
    });

    this.props.history.push(`/box/${response.data._id}`);
  };

  handleInputChange = e => {
    this.setState({ newBox: e.target.value });
  };

  //Retorna tela principal
  render() {
    return (
        <div id="main-container">
            <form onSubmit={this.handleSubmit}>
                <img src={logo} alt=""/>
                <input
                  placeholder="Criar um box"
                  value={this.state.newBox}
                  onChange={this.handleInputChange}
                />
                <button type="submit">Criar</button>
            </form>
        </div>

    );
  }
}
