import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";


function App(){
    return(
        <div>
            <div><b>Personal Digital Assistants</b></div>

            <ProfileCard title="Alexa" handel="@alexa99" image={AlexaImage}/>
            <ProfileCard title="Cortana" handel="@cortana32" image={CortanaImage}/>
            <ProfileCard title="Siri" handel="@siri01" image={SiriImage}/>
        </div>
    )
}

export default App;