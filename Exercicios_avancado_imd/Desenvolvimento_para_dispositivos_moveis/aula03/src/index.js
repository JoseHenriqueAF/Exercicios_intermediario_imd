import React from 'react';
import ReactDOM from 'react-dom/client';


class Form extends React.Component{
  constructor(props){
    super(props)
    this.state = {nome:'Gustavo', cor: 'branco'}
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(event){
    const nameEvt = event.target.name
    this.setState({[nameEvt]: event.target.value})
  }

  handleSubmit(event){
    alert(`O usuário de nome: ${this.state.nome} escolheu a ${this.state.cor}`)
    event.preventDefault()
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit}>
        <input name="nome" type='text' onChange={this.handleChange} value={this.state.nome}></input>
        <select name='cor' value={this.state.cor} onChange={this.handleChange}>
          <option value="laranja">Laranja</option>
          <option value="branco">Branco</option>
          <option value="verde">Verde</option>
          <option value="amarelo">Amarelo</option>
        </select>
        <input type="submit" value="Enviar"></input>
      </form>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Form/>
);







