
const list = document.querySelector('#galery');
const alert = document.querySelector('#alert');
const btnSearch = document.querySelector('#btnSearch');
const searchText = document.querySelector('#searchText');


const books = [
    {
        tittle: "Mały książe",
        year: "1943",
        category: "powieść filozoficzna",
        image: "https://www.gandalf.com.pl/o/maly-ksiaze-p%2Cbig%2C534525.webp",
        alt: "Okładka Mały książe",
        author: "Antoine De Saint-Exupéry"
    },
    {
        tittle: "Mistrz i Małgorzata",
        year: "1966",
        category: "powieść historyczna",
        image: "https://www.gandalf.com.pl/o/mistrz-i-malgorzata-x%2Cbig%2C701420.webp",
        alt: "Okładka Mistrz i Małgorzata",
        author: "Michaił Bułhakow"
    },
    {	
        tittle: "Buszujący w zbożu",
        year: "1951",
        category: "literatura piękna",
        image: "https://ecsmedia.pl/c/buszujacy-w-zbozu-b-iext117338092.jpg",
        alt: "Okładka Buszujący w zbożu",
        author: "J.D. Salinger"
    },	
    {        
        tittle: "Duma i uprzedzenie",
        year: "1813", 	
        category: "powieść historyczna",
        image: "https://www.gandalf.com.pl/o/duma-i-uprzedzenie-n%2Cbig%2C402912.webp",
        alt: "Okładka Duma i uprzedzenie",
        author: "Jane Austen"
    },
    {	
        tittle: "Wichrowe wzgórza",
        year: "1847",
        category: "literatura piękna",
        image: "https://www.gandalf.com.pl/o/wichrowe-wzgorza-o%2Cbig%2C532013.webp",
        alt: "Okładka Wichrowe wzgórza",
        author: "Emily Brontë"
    },
    {	
        tittle: "Wyspa skarbów",
        year: "1882",
        category: "przygodowa",
        image: "https://www.gandalf.com.pl/o/wyspa-skarbow-o%2Cbig%2C476663.webp",
        alt: "Okładka Wyspa skarbów",
        author: "Robert Louis Stevenson",
    },
    {	
        tittle: "Podróże z Charleyem.",
        year: "1965",
        category: "literatura piękna",
        image: "https://www.gandalf.com.pl/o/podroze-z-charleyem%2Cbig%2C476723.webp",
        alt: "Okładka Podróże z Charleyem. W poszukiwaniu Ameryki",
        author: "John Steinbeck"
    },
    {
        tittle: "Jądro ciemności",
        year: "1899",
        category: "powieść filozoficzna",
        image: "https://www.gandalf.com.pl/o/jadro-ciemnosci-e%2Cbig%2C289618.webp",
        alt: "Okładka Jądro ciemności",
        author: "Joseph Conrad"
    },
    {	
        tittle: "Rok 1984",
        year: "1949",
        category: "utopia",
        image: "https://www.gandalf.com.pl/o/rok-1984-C%2Cbig%2C58326.webp",
        alt: "Okładka Rok 1984",
        author: "George Orwell",
    },
    {	
        tittle: "Oskar i Pani Róża",
        year: "2002",
        category: "powieść epistolarna",
        image: "https://www.gandalf.com.pl/o/oskar-i-pani-roza-twarda%2Cbig%2C8283.webp",
        alt: "Okładka Oskar i Pani Róża",
        author: "Eric-Emmanuel Schmitt",
    },	
    {
        tittle: "Wilk stepowy",
        year: "1927",
        category: "powieść psychologiczna",
        image: "https://www.gandalf.com.pl/o/wilk-stepowy%2Cbig%2C3757.webp",
        alt: "Okładka Wilk stepowy",
        author: "Hermann Hesse"
    }]


    const generateList = (filter) => {
        list.innerHTML = '';
      
        books
          .filter(book => book.tittle.toLowerCase().includes(filter.toLowerCase()))
          .forEach((book, index) => {
          list.innerHTML += `
          <li>
            <h3>${book.tittle}</h3>          
            <img src=${book.image} alt=${book.alt}/></a>
            </br>
            year: ${book.year}<br/>
            category: ${book.category}<br/>
            author: ${book.author}<br/>
          </li>
          `
        })
      }


      const validateForm = () => {
        return searchText.value.length > 2;
      }



    btnSearch.addEventListener('click', (event) => {
        event.preventDefault();

        alert.innerHTML="";
        
        if (searchText.value.length===0) {
            generateList('');   //all books
            return;
        }

        const isValid = validateForm();
        if(!isValid) {
            alert.innerHTML="za mało znaków"    
            searchText.value='';        
            return;
        }

        //  alert.innerHTML=searchText.value;

         generateList(searchText.value);

         searchText.value='';
      

        // generateSlide();
      })


    generateList('');

