import styles from './Hero.module.scss'

import Card, { Banner } from '@/element/Card/Card'

import Carousel, {Slide} from '@/element/Carousel/Carousel'

interface Props {
    items: Slide[]
}

export default function Hero(props: Props) {
    return (
        <div className={styles.hero}>
            <div className={styles.heroSlider}>
                <Carousel items = {props.items} />
            </div>
            <div className={styles.heroProduct}>
                <Card
                    id="1"
                    category="کیف و کاور موبایل"
                    title="قاب محافظ سیلیکونی سامسونگ مناسب برای گوشی سامسونگ S21"
                    price="۱۴۹،۰۰۰"
                    image="/images/samsung-case-5151hc1ZTFS._AC_SL1500_.jpg"
                    banner={Banner.Popular}
                />
            </div>
        </div>
    );
    
}