import Image from 'next/image'

import cardStyle from './SpecialCard.module.scss';

export const enum Colors  {
    Orange = 'Orange',
    Blue = 'Blue',
    Cyan = 'Cyan'
};

export interface iSpecialCard {
    title: string,
    subtitle: string,
    image: string,
    color?: string
};

export default function SpecialCard(props: iSpecialCard) {
    var cardColor = cardStyle.special;
    switch (props.color) {
        case Colors.Orange:
            cardColor = cardStyle.specialOrange;
            break;
        case Colors.Blue:
            cardColor = cardStyle.specialBlue;
            break;
        case Colors.Cyan:
            cardColor = cardStyle.specialCyan;
            break;
        default:
            cardColor = cardStyle.special;
    }

    return (
        <div className={cardColor}>
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