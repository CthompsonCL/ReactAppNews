import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Formulario extends Component {
    state = {  
        categoria : ''
    }

    componentDidMount(){
        this.setState({categoria:'technology'})
    }
    cambiarCategoria = e => {
            this.setState({
                    categoria: e.target.value
                },() => {
                    //pasarlo a la pagina principal
                this.props.consultarNoticias(this.state.categoria);

                });
                

    }
    render() { 
        return ( 
            <div className="buscador row">
                <div className="col s12 m8 offset-m2">
                    <form>
                        <h2>Encuentra Noticias por Categoría</h2>
                        <div className="input-field col s12 m8 offset-m2">
                            <select
                            onChange={this.cambiarCategoria}
                            >
                                <option value="technology">Technology</option>
                                <option value="general">General</option>
                                <option value="business">Business</option>
                                <option value="entertainment">Entertainment</option>
                                <option value="health">Health</option>
                                <option value="science">Science</option>
                                <option value="sports">Sports</option>
                            </select>
                        </div>
                    </form>
                </div>
            </div>
         );
    }
}
 Formulario.propTypes = {
     consultarNoticias : PropTypes.func.isRequired
 }
export default Formulario;