import * as style from './FirmFacts.module.scss';
import { FirmCard } from '../firm-card/FirmCard.tsx';

export const FirmFacts = ({variant}: { variant: 'default' }) => {
    return (
        <div className={variant === 'default' ? style.firmFacts : null}>
            <div className={style.content}>
                <div className={style.close}/>
                <h3 className={style.title}>
                    Firm Facts
                </h3>
                <div className={style.divider} />
                <div className={style.cards}>
                    <FirmCard variant='default'>
                        <div>Any</div>
                    </FirmCard>
                    <FirmCard variant='default'>
                        <div>Any1</div>
                    </FirmCard>
                    <FirmCard variant='default'>
                        <div>Any2</div>
                    </FirmCard>
                    <FirmCard variant='border'>
                        <div>Any3</div>
                    </FirmCard>
                    <FirmCard variant='border'>
                        <div>Any4</div>
                    </FirmCard>
                </div>
            </div>
        </div>
    );
};
