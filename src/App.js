import  React, { Fragment } from 'react'
import axios from 'axios'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import Movie from './components/Movie/Movie'
import Skeleton from './components//Skeleton/Skeleton'
import Modal from './utils/Modal'
import './App.css'

class App extends React.Component {
  state = {
    isLoading: true,
    isModalOpen: false,
    main: [],
    movies: [],
    videoId: ''
  }

  getMovies = async () => {
    const { data: { data: { movies: { 0: main } } } } = await axios.get('https://yts-proxy.now.sh/list_movies.json?limit=1&sort_by=like_count&genre=animation&page=4')
    const { data: { data: { movies } } } = await axios.get('https://yts-proxy.now.sh/list_movies.json?sort_by=like_count&quality=3D&genre=animation&page=2')
    this.setState({ main, movies, isLoading: false })
  }

  componentDidMount () {
    this.getMovies()
  }

  handleModalOpen = (videoId) => {
    this.setState({ isModalOpen: true, videoId: videoId })
  }
  
  handleModalClose = () => {
    this.setState({ isModalOpen: false })
  }

  render() {
    const { isLoading, main, movies, isModalOpen, videoId } = this.state

    return (
      <Fragment>
        <Header />
        <main className="container">
          { isLoading ? (
            <Skeleton />
          ) : ( 
            <Fragment>
              <Main 
                title={main.title}
                summary={main.summary}
                poster={main.medium_cover_image}
                bg={main.background_image_original}
              />
              <section className="list-movie">
              {movies.map(movie => (
                <Movie
                  key={movie.id}
                  id={movie.id.toString()}
                  title={movie.title}
                  summary={movie.summary}
                  poster={movie.medium_cover_image}
                  genres={movie.genres}
                  videoId={movie.yt_trailer_code}
                  handleModalOpen={this.handleModalOpen.bind(this, movie.yt_trailer_code)}
                />
              ))}
              </section>
              <Modal open={isModalOpen} close={this.handleModalClose} videoId={videoId} />
            </Fragment>
          )}
        </main>
      </Fragment>
    )}
  }

export default App;
