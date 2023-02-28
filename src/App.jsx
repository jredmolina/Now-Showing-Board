import { useState } from "react";
import reactLogo from "./assets/react.svg";
import movieReel from "./assets/movie-reel.png";
import brady from "./assets/80ForBrady.jpg";
import antman from "./assets/antman.jpg";
import avatar from "./assets/avatar.jpg";
import blackpanther from "./assets/blackpanther.webp";
import cocaine from "./assets/cocaine.jpg";
import creed from "./assets/creed.jpg";
import KATK from "./assets/KATK.jpg";
import magic from "./assets/magic.jpg";
import shazam from "./assets/shazam.jpg";
import scream from "./assets/scream.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="header">
        <img className="headerImage" src={movieReel}></img>
        <h1 className="headerText">Movies Now Showing in Theatres</h1>
      </div>

      <div className="card-container">
        <div className="card">
          <img className="movie-banner" src={antman}></img>
          <h2>Ant-Man and the Wasp: Quantumania</h2>
          <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjh75D1jrP9AhVVHUQIHWUEAtYQryQoAHoECHoQAQ&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DZlNFpri-Y40&usg=AOvVaw2-zH4vXDnYGVEGFwwhE7oV">
            <button>Trailer</button>
          </a>
        </div>

        <div className="card">
          <img className="movie-banner" src={creed}></img>
          <h2>Creed 3</h2>
          <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwizlMLoj7P9AhU7KEQIHU0oABIQryQoAHoECEEQAQ&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DxTaIZo8OJYE&usg=AOvVaw0zSbx3mg8cgq_GKzAtigOi">
            <button>Trailer</button>
          </a>
        </div>

        <div className="card">
          <img className="movie-banner" src={cocaine}></img>
          <h2>Cocaine Bear</h2>
          <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjJ1pj3j7P9AhUHJEQIHcKPCpMQryQoAHoECE4QAQ&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DDuWEEKeJLMI&usg=AOvVaw0EXLlY1xexHewDr90jHzpq">
            <button>Trailer</button>
          </a>
        </div>

        <div className="card">
          <img className="movie-banner" src={magic}></img>
          <h2>Magic Mike's Last Dance</h2>
          <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjApMaNkLP9AhXVDEQIHSMjD0cQryQoAHoECHYQAQ&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DpBIGdw-BRxw&usg=AOvVaw2Sgtb7FTmszgazIa17NTLb">
            <button>Trailer</button>
          </a>
        </div>

        <div className="card">
          <img className="movie-banner" src={brady}></img>
          <h2>80 For Brady</h2>
          <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjhz7WlkLP9AhU6HEQIHZk-CjIQryQoAHoECG0QAQ&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D-UeGXB2NjR8&usg=AOvVaw2TM7xalNQCswwjA2KI3-HY">
            <button>Trailer</button>
          </a>
        </div>

        <div className="card">
          <img className="movie-banner" src={blackpanther}></img>
          <h2>Black Panther: Wakanda Forever</h2>
          <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwibgcCtkLP9AhUaL0QIHWkGDJUQryQoAHoECEYQAQ&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3D_Z3QKkl1WyM&usg=AOvVaw2r8DKKg_D20Va3NukcCgtT">
            <button>Trailer</button>
          </a>
        </div>

        <div className="card">
          <img className="movie-banner" src={avatar}></img>
          <h2>Avatar: Way of Water</h2>
          <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiMi8DFkLP9AhWWEkQIHaHODn4QryQoAHoECE4QAQ&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dd9MyW72ELq0&usg=AOvVaw1XED9pmkKO5ncOHocGT5SH">
            <button>Trailer</button>
          </a>
        </div>

        <div className="card">
          <img className="movie-banner" src={shazam}></img>
          <h2>Shazam! Fury of the Gods</h2>
          <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiVm5DRkLP9AhXLPkQIHfLVAX4QryQoAHoECEsQAQ&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DAIc671o9yCI&usg=AOvVaw0gxqFpdyPbEfRzN_39t2IC">
            <button>Trailer</button>
          </a>
        </div>

        <div className="card">
          <img className="movie-banner" src={scream}></img>
          <h2>Scream 6</h2>
          <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjC4vGMkbP9AhXrN0QIHWkaCmwQryQoAHoECDQQAQ&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dh74AXqw4Opc&usg=AOvVaw10CZ8iQkjmymJs9v01t4s2">
            <button>Trailer</button>
          </a>
        </div>

        <div className="card">
          <img className="movie-banner" src={KATK}></img>
          <h2>Knock at the Cabin</h2>
          <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjEs-uuj7P9AhUVLUQIHbzpDyYQryQoAHoECEMQAQ&url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dgv_QhoUy-xc&usg=AOvVaw1Kv6c5IGsI6nJRu4xiY7CB">
            <button>Trailer</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
