import Image from 'next/image'

import cardStyle from './SpecialCard.module.scss';

export interface iSpecialCard {
    title: string,
    subtitle: string,
    image: string
}

export default function SpecialCard(props: iSpecialCard) {
    return (
        <div className={cardStyle.special}>
            <div className={cardStyle.bubble}></div>
            <div className={cardStyle.specialHeader}>
                <span className={cardStyle.subtitle}>{props.subtitle}</span>
            </div>
            <div className={cardStyle.specialBody}>
                <span className={cardStyle.title}>{props.title}</span>
                <div className={cardStyle.imageBox}>
                    <Image src={props.image} alt="product image" layout="fill" objectFit="contain"  objectPosition="left" />
                </div>
            </div>
            <div className={cardStyle.specialFooter}>
                <span>مشاهده و خرید</span>
            </div>
        </div>
    );
};