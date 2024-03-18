import React, { useState } from 'react';
import {AlbumWrapper} from "./styled";
import {AlbumTitle} from "./styled";
import { AlbumImage } from './styled';

const Album = ({ album }) => {
  const [showSongs, setShowSongs] = useState(false);

  return (
    <AlbumWrapper>
      <div onClick={() => setShowSongs(!showSongs)} style={{ display: 'flex', alignItems: 'center', marginBottom: 10 }}>
        <AlbumImage src={album.photo} alt={album.title}/>
        <AlbumTitle>{album.title}</AlbumTitle>
      </div>
      {showSongs && (
        <ul>
          {album.songs.map((song, index) => (
            <li key={index}>{song}</li>
          ))}
        </ul>
      )}
    </AlbumWrapper>
  );
};

export default Album;