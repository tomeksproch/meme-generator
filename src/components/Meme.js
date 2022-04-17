import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Meme = props => {
  const [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then(res => res.json())
      .then(data => setAllMemes(data.data.memes));
  }, []);

  const getMemeImage = () => {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;

    setMeme(prevState => ({
      ...prevState,
      randomImage: url,
    }));
  };

  const handleChange = event => {
    const { name, value, type } = event.target;

    setMeme(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <MemeStyles>
      <div className="container">
        <input
          type="text"
          placeholder="Top text"
          className="form--input"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="form--input"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
        />
        <button onClick={getMemeImage} className="form--button">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </MemeStyles>
  );
};

const MemeStyles = styled.div`
  padding: 36px;

  .container {
    display: grid;
    grid-template: 40px 40px / 1fr 1fr;
    gap: 17px;
  }

  .form--input {
    font-family: 'Karla', sans-serif;
    border-radius: 5px;
    border: 1px solid #d5d4d8;
    text-indent: 5px;
  }

  .form--button {
    grid-column: 1 / -1;
    font-family: 'Karla', sans-serif;
    border-radius: 5px;
    background: linear-gradient(90.41deg, #711f8d 1.14%, #a818da 100%);
    color: white;
    border: none;
    cursor: pointer;
  }

  .meme--image {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 40px;
    border-radius: 5px;
  }

  .meme {
    position: relative;
  }

  .meme--text {
    position: absolute;
    width: 80%;
    text-align: center;
    left: 50%;
    transform: translateX(-50%);
    margin: 15px 0;
    padding: 0 5px;
    font-family: impact, sans-serif;
    font-size: 2em;
    text-transform: uppercase;
    color: white;
    letter-spacing: 1px;
    text-shadow: 2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000,
      -2px 2px 0 #000, 0 2px 0 #000, 2px 0 0 #000, 0 -2px 0 #000, -2px 0 0 #000,
      2px 2px 5px #000;
  }

  .bottom {
    bottom: 0;
  }

  .top {
    top: 0;
  }
`;

export default Meme;
