import * as style from './FirmFacts.module.scss';

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
                    <div>
                        Any
                    </div>
                    <div>
                        Any1
                    </div>
                    <div>
                        Any2
                    </div>
                    <div>
                        Any3
                    </div>
                    <div>
                        Any4
                    </div>
                </div>
            </div>
        </div>
    );
};
