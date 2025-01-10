import * as style from './FirmFacts.module.scss';

export const FirmFacts = ({variant}: { variant: 'default' }) => {
    return (
        <div className={variant === 'default' ? style.firmFacts : null}>
            <div className={style.close} />
            <div>

            </div>
        </div>
    );
};
