import './MainTemplate.css';
import Header from '../../sections/Header/Header';
import Footer from '../../sections/Footer/Footer';

function MainTemplate (props) {
    return (
      <div className="main-template">
        <Header/>
        {props.children}
        <Footer />
      </div>
    )
  }
  
  export default MainTemplate