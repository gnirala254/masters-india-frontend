import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Favorite() {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(
        'https://pure-plateau-27734.herokuapp.com/user/fav',
        {}
      );
      // console.log(data.response);
      setFavorites(data.response.favorites);
    };
    search();
  }, []);

  const renderedResults = favorites.map((favorite) => {
    return (
      <div key={favorite.pageid} className="item">
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${favorite.pageid}`}
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{favorite.title}</div>
          <span dangerouslySetInnerHTML={{ __html: favorite.snippet }}></span>
        </div>
      </div>
    );
  });

  return (
    <div>
      <div>--- Your Favorites ---</div>
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
}

export default Favorite;
