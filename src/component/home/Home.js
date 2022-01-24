import Carousel from 'react-bootstrap/Carousel' ;
//import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import image0 from './image-0.jpg';
import image1 from './image-1.jpg';


export default function Home() {
   
    const imageSrc = [[image0,0],[image1,1],[image0,2]];
   
    const imagesSlider = imageSrc.map(function(x,i){
        return(
            <Carousel.Item key={x[1]}>
                <img
                className="d-block w-100 h-100"
                src={x[0]}
                alt="First slide"
                />
                <Carousel.Caption className='text-light'>
                <h5 >Best Service provide</h5>
                <p>We are trying our best to give our customer better customer service</p>
                </Carousel.Caption>
            </Carousel.Item>        
        )
    })

    // const settings = {
    //     className: "center",
    //     centerMode: true,
    //     infinite: true,
    //     centerPadding: "60px",
    //     slidesToShow: 3,
    //     speed: 500
       
    //   };

      
    return (
        <>
            <div>
                <Carousel className='mt-1 bg-dark'>
                {imagesSlider}
                </Carousel>
            </div>
            
            {/* <div>
                <h2> Single Item</h2>
                <Slider {...settings}>
                    {state.map((x)=><div key={x.id} ><img  style={{width:'16em',height:'20rem'}} src={x.image}  alt={`${x.id}` }/></div>)}      
                </Slider>
            </div> */}
        </>
    )
}
