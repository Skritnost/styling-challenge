import * as style from './FirmCard.module.scss';
import { ReactElement } from 'react';

type CardVariant = 'default' | 'border';

export const FirmCard = ({variant, children, className}: { variant: CardVariant, children: ReactElement; className?: string }) => {
    return (
        <div className={`${style.firmCard} ${variant === 'border' ? style.firmCardBorder : null} ${className}`}>
            {children}
        </div>
    );
};
