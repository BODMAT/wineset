import { Link } from 'react-router-dom';
import styles from '../PageGiftBoxesPage.module.scss';
export function GiftSets() {
    return (
        <section className="pt-[80px] pb-[43px] max-md:pt-[50px] max-md:pb-[20px]">
            <div className={styles.container}>
                <div className="flex justify-between gap-[15px] mb-[50px] max-lg:flex-col max-lg:items-center">
                    <h1 className={styles.basicTitle}>Gift sets</h1>
                    <div className={`${styles.basicText} max-lg:text-center`}>The shape of each glass is unique, thanks to which you can feel the most subtle nuances of taste your favorite drinks.</div>
                    <div className={`${styles.basicText} max-lg:text-center`}>YOU CAN BUY THE GLASSES SEPARATELY OR IN A BEAUTIFUL GIFT PACKAGING.</div>
                </div>
                <div className="flex flex-wrap justify-evenly gap-[20px] mt-[50px]">
                    <div className='hover:scale-105 transitioned'>
                        <div className="w-[420px] max-md:w-[100%]"><img className="object-cover" src="/GiftBoxesPage/GiftBoxes/with-glasses.jpg" alt="with-glasses" /></div>
                        <Link to="Gift-sets/Boxes_FILTER=bocals" className='pl-4 hover:underline'>With glasses</Link>
                    </div>
                    <div className='hover:scale-105 transitioned'>
                        <div className="w-[420px] mt-30 max-lg:mt-0 max-md:w-[100%]"><img className="object-cover" src="/GiftBoxesPage/GiftBoxes/with-delicacies.jpg" alt="with-delicacies" /></div>
                        <Link to="Gift-sets/Boxes_FILTER=delicacies" className='pl-4 hover:underline'>with Delicacies</Link>
                    </div>
                    <div className='hover:scale-105 transitioned'>
                        <div className="w-[420px] max-md:w-[100%]"><img className="object-cover" src="/GiftBoxesPage/GiftBoxes/constructor.jpg" alt="constructor" /></div>
                        <Link to="Gift-sets/Boxes_FILTER=constructor" className='pl-4 hover:underline'>Constructor</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}