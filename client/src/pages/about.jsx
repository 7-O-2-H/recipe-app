// imports
import NavBar from "../components/NavBar";
import Header from '../components/Header';
import Spacer from '../components/Spacer';
import '../styles/about.css';


export default function About() {

  // template
  return (
    <div>
      <NavBar />
      <Spacer />
      <Header title="About" />
      <Spacer />
      <div className="about-text">
      This application was built for a few different  reasons. First and foremost, I needed to create something to showcase my web development abilities while at the same time, I wanted to make something that I would actually use. I'm pretty green in terms of cooking as hobby and I was sick of trying to parse my father's recipes from bulleted notes messily arranged in excel spreadsheets - they're shockingly disordered for someone generally so organized. 
      <br></br>
      <br></br>
      For instance the notes for my dad's Zuppa Toscana recipe &#40;which you'll find on this site&#41; has instructions to saute onions with garlic before adding them to the pot. This is followed by a note in red that reads &#34;Last time just heated water and threw everythign in NO microwave potatoes Just dice and put in boiling pot &#91;sic&#93;&#34;. Elsewhere a recipe that calls for three mild Italian sausages is annotated &#34;Liz likes more 4 or 5,&#34; in reference to the preferences of my mother; a testament to the strength of their 30-some-odd years marriage. 
      <br></br>
      <br></br>
      Another reason for the existence of this app is preservation. My maternal grandmother has been cooking for me for decades without having written anything down or following any type of recipe; she cooks by taste and elevates the exercise to an art. Inspired by her I decided to call the app Add to Taste - or maybe I just got sick of seeing the phrase in recipes online.
      <br></br>
      <br></br>
      Lastly, I was disappointed with options I found online in terms of varying serving sizes. I wanted a quick and easy way to change a the quantities in a recipe in case an additional guest was added at the last minute or if I wanted to make a dish that's supposed to serve 6 while I was only cooking for myself. With Add to Taste you can freely change the serving size depending on the size of your party. It's also just generally a good way to maintain and organized database of your own recipes, explore new dishes, and keep track of your favourites!
      <br></br>
      <br></br>
      Bon apetit!
      <br></br>
      <br></br>
      Josh
      <br></br>
      Developer and budding food aficionado
      </div>
    </div>
      
  );
}
