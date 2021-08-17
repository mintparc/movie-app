import React from 'react';
import axios from 'axios'
import Main from './components/Main/Main'
import Movie from './components/Movie/Movie'
import Skeleton from './components//Skeleton/Skeleton'
import Modal from './utils/Modal'
import './App.css'

class App extends React.Component {
  state = {
    isLoading: true,
    main: [],
    movies: [],
    modal: false
  }
  getMovies = async () => {
    const { data: { data: { movies: { 0: main } } } } = await axios.get('https://yts-proxy.now.sh/list_movies.json?limit=1&sort_by=like_count&page=3')
    const { data: { data: { movies } } } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=like_count&quality=3D')
    this.setState({ main, movies, isLoading: false })
  }
  componentDidMount () {
    this.getMovies()
  }
  openModal = () => {
    this.setState({ modal: true })
  }
  closeModal = () => {
    this.setState({ modal: false })
  }
  render() {
    let { isLoading, main, movies, modal } = this.state
    return (
      <section className="container">
        { isLoading ? (
          <Skeleton />
        ) : ( 
          <div className="movies">
            <Main 
              key={main.id}
              id={main.id}
              title={main.title}
              summary={main.summary}
              poster={main.medium_cover_image}
              bg={main.background_image_original}
            />
            <div className="movie">
            {movies.map(movie => (
              <Movie
                key={movie.id}
                id={movie.id.toString()}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
                trailer={movie.yt_trailer_code}
              />
            ))}
            </div>
            <button onClick={this.openModal}>click me!</button>
            <Modal open={modal} close={this.closeModal} />
          </div>
        )}
      </section>
    )}
  }

export default App;
