import gridStyle from './ProductGrid.module.scss';

import Card, {iCard, Banner} from '@/element/Card/Card';

interface Props {
    title: string,
    items: iCard[]
}

export default function ProductGrid(props: Props) {
    return (
        <section className={gridStyle.productGrid}>
            <h2>
                {props.title}
            </h2>

            <div className={gridStyle.gridDisplay}>
                {props.items.map(item => {
                    return (
                        <Card key={item.id} id={item.id} title={item.title} category={item.category} price={item.price} off={item.off} image={item.image} banner={Banner.Special}  />
                   );
                })}
            </div>
        </section>
    )
 }