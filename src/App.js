
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactAnimatedWeather from "react-animated-weather/build/ReactAnimatedWeather";




export default function App() {
  return (

      <div className='container'>
        <div className="row forecast time">
          <div className="col-sm-2">18:00</div>
          <div className="col-sm-2">16:30</div>
          <div className="col-sm-2">13:00</div>
          <div className="col-sm-2">0:12</div>
          <div className="col-sm-2">12:00</div>
        </div>

        <div className="forecast row">
          <div className="col-sm-2"> 
            <ReactAnimatedWeather
              icon="WIND"
              color="blue"
              size={40}
              animate={true}
            />{" "}

</div>
          <div className="col-sm-2"><ReactAnimatedWeather
              icon="RAIN"
              color="blue"
              size={40}
              animate={true}
            />{" "}
</div>
          <div className="col-sm-2"><ReactAnimatedWeather
              icon="FOG"
              color="blue"
              size={40}
              animate={true}
            />{" "}
</div>
          <div className="col-sm-2"><ReactAnimatedWeather
              icon="RAIN"
              color="blue"
              size={40}
              animate={true}
            />{" "}
</div>
          <div className="col-sm-2"><ReactAnimatedWeather
              icon="CLOUDY"
              color="blue"
              size={40}
              animate={true}
            />{" "}
</div>
        </div>

        <div className="forecast row">
          <div className="col-sm-2">4º 2º</div>
          <div className="col-sm-2">5º 4º</div>
          <div className="col-sm-2">6º 3º</div>
          <div className="col-sm-2">3º 2º</div>
          <div className="col-sm-2">2º 6º</div>
        </div>
        <br />
        <p>This project is Open-Sourced on <a href="https://github.com/anniesalis" target="_annie salis github">GitHub</a>
        </p>
      </div>

      
    
  );
}
