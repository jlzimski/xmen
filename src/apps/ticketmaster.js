// API KEY = https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjLmOal5MPxAhXZbG8EHRy3CxoYABAAGgJqZg&ae=2&ohost=www.google.com&cid=CAESQeD2qBs3JO6HMiv6TUnXNbHyrmmhvhdq7GuTATa0z4dtOfSHNie6uTTNn3np7Z6YEPfzGi0cRosGEaPX2ho5NpZP&sig=AOD64_3MS79dNSWF4I2cZ36MSOExyWU3Pw&q&adurl&ved=2ahUKEwi-lN6l5MPxAhVNVc0KHbOqCTgQ0Qx6BAgDEAE
// SECRET = klS7sMFJuhAO3Toe
// URL = https://app.ticketmaster.com/discovery/v2/events
// latlon or geoPoint are query parameters
import React  from 'react'; // useState
// import {
//     Carousel,
//     CarouselItem,
//     CarouselControl,
//     CarouselIndicators,
//     CarouselCaption
// } from 'reactstrap';

const baseURL = "https://app.ticketmaster.com/discovery/v2/suggest?apikey=";
const key = "kyQ3Ij0I8EakwB9arwVA1jLWivio2qYi";
const radius = 150;
const unit = "miles";

    //example const code for slide formation, need to set variables for altText and caption so they iterate up each item that is mapped
    // {
    // src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
    // altText: 'Slide 1',
    // caption: 'Slide 1'
    // },


const EventMaster = (props) => {
    const lat = props.lat;
    const lon = props.lon;
    const [results, setResults] = useState([]);
    console.log(lat, lon);

    //created infinite loop
    // async function fetchResults() {
    //     let url = `${baseURL}${key}&latlong=${lat},${lon}&radius=${radius}&unit=${unit}`;
    //     let response = await fetch(url);
    //     let data = await response.json();
    //     setResults(data);
    // }

    const fetchResults = () => {
        let url = `${baseURL}${key}&latlong=${lat},${lon}&radius=${radius}&unit=${unit}`;
        console.log(url);

        fetch(url)
            .then(res => console.log(res.json()))
            .then(data => setResults(data.response._embedded.events))//can't figure out the right way to dig in
            .catch(err => console.log(err));
    }
    fetchResults();
    console.log(results);





    

    // example code on reactstrap.github.io carousel, will probably need some of this to get the carousel working after the fetch
    // const Example = (props) => {
    //     const [activeIndex, setActiveIndex] = useState(0);
    //     const [animating, setAnimating] = useState(false);
    
    //     const next = () => {
    //         if (animating) return;
    //         const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    //         setActiveIndex(nextIndex);
    //     }
    
    //     const previous = () => {
    //         if (animating) return;
    //         const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    //         setActiveIndex(nextIndex);
    //     }
    
    //     const goToIndex = (newIndex) => {
    //         if (animating) return;
    //         setActiveIndex(newIndex);
    //     }
    
    //     const slides = items.map((item) => {
    //         return (
    //         <CarouselItem
    //             onExiting={() => setAnimating(true)}
    //             onExited={() => setAnimating(false)}
    //             key={item.src}
    //         >
    //             <img src={item.src} alt={item.altText} />
    //             <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
    //         </CarouselItem>
    //         );
    //     });

    return(
        //example of the code to return to Home.js
        // <Carousel
        //     activeIndex={activeIndex}
        //     next={next}
        //     previous={previous}
        // >
        //     <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
        //     {slides}
        //     <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
        //     <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
        // </Carousel>
        <div>
            <div>
                <h1>TicketMaster</h1>
                <p>This is event central.</p>
            </div>
        </div>
    )
}


export default EventMaster;