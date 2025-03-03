import { Link } from 'react-router-dom';
import styles from './PageGiftBoxesPage.module.scss';
import { useOpacity } from '../../customHooks/useOpacity';
export function GiftSets() {
    const { opacity, blockRef } = useOpacity();
    return (
        <section ref={blockRef} className="relative pt-[80px] pb-[43px] max-md:pt-[50px] max-md:pb-[20px]">
            <div className={`${styles.container} relative z-2`}>
                <div className="flex justify-between gap-[15px] mb-[50px] max-lg:flex-col max-lg:items-center">
                    <h1 className={styles.basicTitle}>Gift sets</h1>
                    <div className={`${styles.basicText} max-lg:text-center`}>The shape of each glass is unique, thanks to which you can feel the most subtle nuances of taste your favorite drinks.</div>
                    <div className={`${styles.basicText} max-lg:text-center`}>YOU CAN BUY THE GLASSES SEPARATELY OR IN A BEAUTIFUL GIFT PACKAGING.</div>
                </div>
                <div className="flex flex-wrap justify-evenly gap-[20px] mt-[50px]">
                    <Link to="/Gift-sets/Boxes" className='hover:scale-105 transitioned cursor-pointer'>
                        <div className="w-[420px] max-md:w-[100%]"><img className="object-cover" src="/GiftBoxesPage/GiftBoxes/with-glasses.png" alt="with-glasses" /></div>
                        <h4 className='pl-4 hover:underline'>With glasses</h4>
                    </Link>
                    <Link to="/Gift-sets/Boxes" className='hover:scale-105 transitioned cursor-pointer'>
                        <div className="w-[420px] mt-30 max-lg:mt-0 max-md:w-[100%]"><img className="object-cover" src="/GiftBoxesPage/GiftBoxes/with-delicacies.png" alt="with-delicacies" /></div>
                        <h4 className='pl-4 hover:underline'>with Delicacies</h4>
                    </Link>
                    <Link to="/Soon" className='hover:scale-105 transitioned cursor-pointer'>
                        <div className="w-[420px] max-md:w-[100%]"><img className="object-cover" src="/GiftBoxesPage/GiftBoxes/constructor.png" alt="constructor" /></div>
                        <h4 className='pl-4 hover:underline'>Constructor</h4>
                    </Link>
                </div>
            </div>
            <div style={{
                opacity: opacity,
            }}
                className="absolute w-[902px] h-[509px] bottom-[-5%] right-[-10%] rotate-180 max-xl:top-0">
                <img src="/WineSpots/wine-spot-1.png" alt="wine-spot-1" />
            </div>
        </section>
    )
}