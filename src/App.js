import React,{Component,Fragment} from 'react';
import Header from './components/Header';
import ListaNoticias from './components/ListaNoticias';
import Formulario from './components/Formulario';

class App extends Component {
  state = { 

   }


   async componentDidMount(){
     this.consultarNoticias();
   }

   consultarNoticias = async (categoria = 'technology') => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=9667441bc0574b62b35a84aafbf585f0`;
    const respuesta = await fetch(url);
    const noticias = await respuesta.json();

    this.setState({
      noticias: noticias.articles
    })
   }

  render() { 
    return ( 
        <Fragment>
          <Header titulo='Noticias React API'/>

        <div className="container white contenedor-noticias">
          <Formulario
          consultarNoticias={this.consultarNoticias}
          />
          <ListaNoticias 
          noticias={this.state.noticias}
          />
        </div>

        </Fragment>

    );
  }
}


export default App;
