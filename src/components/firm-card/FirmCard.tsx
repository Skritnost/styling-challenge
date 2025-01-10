import * as style from './FirmCard.module.scss';
import { ReactElement } from 'react';

type CardVariant = 'default' | 'border';

export const FirmCard = ({variant, children}: { variant: CardVariant, children: ReactElement; }) => {
    return (
        <div className={`${style.firmCard} ${variant === 'border' ? style.firmCardBorder : null}`}>
            {children}
        </div>
    );
};
