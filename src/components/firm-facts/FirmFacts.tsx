import * as style from './FirmFacts.module.scss';
import { FirmCard } from '../firm-card/FirmCard.tsx';
import { CustomButton } from '../custom-button/CustomButton.tsx';

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
                        <CustomButton variant='icon'>
                            This is a two line button
                            that terminates with something
                        </CustomButton>
                    </FirmCard>
                    <FirmCard variant='default'>
                        <CustomButton variant='icon'>
                            This is a two line button
                            that terminates with something
                        </CustomButton>
                    </FirmCard>
                    <FirmCard variant='default'>
                        <CustomButton variant='default'>
                            This is a one line button
                        </CustomButton>
                    </FirmCard>
                    <FirmCard variant='border'>
                        <CustomButton variant='icon'>
                            This is a two line button
                            that terminates with something
                        </CustomButton>
                    </FirmCard>
                    <FirmCard variant='border'>
                        <CustomButton variant='icon'>
                            This is a two line button
                            that terminates with something
                        </CustomButton>
                    </FirmCard>
                    <FirmCard variant='border'>
                        <CustomButton variant='icon' isDisabled={true}>
                            This is a two line button
                            that terminates with something
                        </CustomButton>
                    </FirmCard>
                    <FirmCard variant='border'>
                        <CustomButton variant='icon'>
                            This is a two line button
                            that terminates with something
                        </CustomButton>
                    </FirmCard>
                </div>
            </div>
        </div>
    );
};
