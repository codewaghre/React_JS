
import './App.css';

function App({image, title, describe }) {

  //another way to set props 
  // const {image, title, describe} = props // set props into app(props)

  return (
    <div className="App">
      <header className="App-header">

      
<section class="articles">
  <article>
    <div class="article-wrapper">
      <figure>
        <img src={image} alt="" />
      </figure>
      <div class="article-body">
                <h2>{title  || "oppss sorry"}</h2>
        <p>
          {describe || "sorry"}
        </p>
        <a href="#" class="read-more">
          Read more <span class="sr-only">about this is some title</span>
        </a>
      </div>
    </div>
  </article>

</section>


      </header>
    </div>
  );
}

export default App;
