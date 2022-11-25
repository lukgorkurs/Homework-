import './WelcomeMessage.css';

function WelcomeMessage(props) {
  return (
    <section>
      <h1>{props.children}</h1>
    </section>
  )

  
}

export default WelcomeMessage;
