import rowStyle from './SpecialRow.module.scss';

import SpecialCard, { iSpecialCard } from '@/components/modules/SpecialCard/SpecialCard';

interface SpecialProps {
    items: iSpecialCard[]
};


export default function SpecialRow(props: SpecialProps) {
    return (
        <section className={rowStyle.specialRow}>
            {props.items.map(item => {
                return (
                    <SpecialCard key={item.title} title={item.title} subtitle={item.subtitle} image={item.image} />
                );
            }
            )}
        </section>
    )
}