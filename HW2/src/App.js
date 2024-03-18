import Album from './components/album/Album';
import Header from './components/header/Header'
import albumsData from './data';

const App = () => {
  return (
    <div>
      <Header/>
      {albumsData.map(album => (
        <Album key={album.id} album={album} />
      ))}
    </div>
  );
};

export default App;