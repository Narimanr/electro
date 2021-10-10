import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import rowStyle from './ProductCarousel.module.scss';

// import Swiper core and required modules
import SwiperCore, {Navigation} from 'swiper';


// install Swiper modules
SwiperCore.use([Navigation]);


export interface Slide {
    images: string[]
}

import Card, {iCard, Banner} from '@/element/Card/Card';

interface Props {
    title: string,
    items: iCard[]
}

export default function ProductCarousel(props: Props) {
    return (
        <section className={rowStyle.productCarousel}>
            <h2>
                {props.title}
            </h2>
            <div className={rowStyle.rowDisplay}>
            <Swiper
                draggable={true}
                className={rowStyle.swiper}
                slidesPerView={'auto'}
                navigation={true}
                dir="rtl"
                observer={true}
                observeParents={true}
                spaceBetween={20}
                >
                {props.items.map(item => {
                    return (
                        <SwiperSlide key={item.id} className={rowStyle.swiperSlide}>
                            <Card  id={item.id} title={item.title} category={item.category} price={item.price} off={item.off} image={item.image} banner={Banner.Popular}  />
                         </SwiperSlide>
                    );
                })}

            </Swiper>
            </div>
        </section>
    )
 }