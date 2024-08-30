import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Skeleton,Alert } from '@mui/material'
import Header from '../components/UI/Header';
import ScrollToTop from "react-scroll-to-top";
import { getTime, paymentTypeReturns } from '../utils/Utilities'
import { toast } from 'react-toastify';

export function PaymentDetailsSkeleton() {
    return (
        <>
            <div className="payment-data-block" style={{ marginBlock: '1rem -1.5rem', width: '35rem' }}>
                <h5 className="payment-data-block__header"><Skeleton height={27} width={200} sx={{ bgcolor: '#555' }} /></h5>
                <p className="payment-data-block__content" style={{ marginTop: '-0.7rem' }}><Skeleton height={52} sx={{ bgcolor: '#777' }} /></p>
            </div>
            <div className="payment-data-block" style={{ marginBlock: '1rem -1.5rem', width: '35rem' }}>
                <h5 className="payment-data-block__header"><Skeleton height={27} width={200} sx={{ bgcolor: '#555' }} /></h5>
                <p className="payment-data-block__content" style={{ marginTop: '-0.7rem' }}><Skeleton height={52} sx={{ bgcolor: '#777' }} /></p>
            </div>
            <div className="payment-data-block" style={{ marginBlock: '1rem -1.5rem', width: '35rem' }}>
                <h5 className="payment-data-block__header"><Skeleton height={27} width={200} sx={{ bgcolor: '#555' }} /></h5>
                <p className="payment-data-block__content" style={{ marginTop: '-0.7rem' }}><Skeleton height={52} sx={{ bgcolor: '#777' }} /></p>
            </div>
            <div className="payment-data-block" style={{ marginBlock: '1rem -1.5rem', width: '35rem' }}>
                <h5 className="payment-data-block__header"><Skeleton height={27} width={200} sx={{ bgcolor: '#555' }} /></h5>
                <p className="payment-data-block__content" style={{ marginTop: '-0.7rem' }}><Skeleton height={52} sx={{ bgcolor: '#777' }} /></p>
            </div>
        </>
    )
}

function PaymentConfirmed() {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const [loading, setLoading] = useState();
    const [data, setData] = useState({});
    const location = useLocation()

    /* mobile menu
     * ---------------------------------------------------- */
    const handleMenuToggle = () => {
        setMenuIsOpen((menuIsOpen) => !menuIsOpen);
    };

    async function fetchPaymentData(signature) {
        try {
            setLoading(true)
            const response = await fetch(`http://localhost:8000/payments/getDetails/${signature}`);

            if (!response.ok) {
                toast.error('Something Went wrong! Try again later')
            }

            const result = await response.json();
            setLoading(false)

            console.log(result)
            setData(result)
            //   return result;
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const signature = new URLSearchParams(location.search).get('sign')
        if (signature) {
            fetchPaymentData(signature)
        }
        // console.log(signature)
    }, [location.search])

    return (
        <div id="top" className={menuIsOpen ? "menu-is-open" : ""}>
            {/* Header NavBar */}
            <Header headerClasses="s-header" onClick={handleMenuToggle}>
                <div className="header-content">
                    <Link className="btn btn--stroke btn--small" to='..'>
                        Back
                    </Link>
                </div>
            </Header>


            {/* payment-success-confirmation
            ================================================== */}
            <section id="payment-success" className="s-payment-success target-section">
                <div className="row position-relative">
                    <div className="column large-6 medium-8 tab-full">
                        <div className="section-intro" data-aos="fade-up">
                            <h1 className="display-1">
                                Thanks for your donation🤗
                            </h1>
                        </div>
                        <div className="spinner-wrapper pt-5">
                            <div className="checkmark d-flex justify-content-between align-items-center">
                                <i className="fas fa-check" />
                            </div>
                            <motion.div
                                initial={{ opacity: 0, y: 45 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ type: "spring", delayChildren: 0.5, duration: 6 }}
                                exit={{ opacity: 0, y: 45 }}
                                className="confirm-message"
                            >
                                <h1>Completed!</h1>
                                {loading ?
                                    <h5><Skeleton width={150} sx={{ bgcolor: '#aaa' }} /></h5> :
                                    <h5>&#8377;{data.amount}</h5>
                                }
                                {loading ?
                                    <p className="text-dark fw-bold"><Skeleton width={100} sx={{ bgcolor: '#aaa' }} /></p> :
                                    <div className='d-inline-flex align-items-center flex-wrap-wrap'>
                                        <p className="fw-bold">{getTime(data.created_at)}</p>&nbsp;&nbsp;|
                                        <div className='badge'>method: <strong>{data.method}</strong></div>
                                    </div>
                                }
                            </motion.div>
                        </div>
                    </div>
                    <div className="column large-6 medium-8 tab-full">
                        <div className="column d-flex flex-column ml-3 mt-md-5 ml-2">
                            {loading ?
                                <PaymentDetailsSkeleton /> :
                                <>
                                    <div className="payment-data-block" style={{ marginBlock: '1rem -1.5rem' }} data-aos="fade-up">
                                        <h5 className="payment-data-block__header">Transaction ID</h5>
                                        <p className="payment-data-block__content">{data.receipt}</p>
                                    </div>
                                    <div className="payment-data-block" style={{ marginBlock: '1rem -1.5rem' }} data-aos="fade-up">
                                        <h5 className="payment-data-block__header">To: <span className='text-uppercase'>&nbsp;Snehodipto Das</span></h5>
                                        <em>Bank: <span>{process.env.REACT_APP_BANK_NAME}</span></em>
                                        <p className="payment-data-block__content">{process.env.REACT_APP_VPA}</p>
                                    </div>
                                    <div className="payment-data-block" style={{ marginBlock: '1rem -1.5rem' }} data-aos="fade-up">
                                        <h5 className="payment-data-block__header">From: <span className='text-uppercase'>&nbsp;{data.donor_name}</span></h5>
                                        <em>Bank: <span>{data.bank || 'NA'}</span></em>
                                        <p className="payment-data-block__content">{paymentTypeReturns(data)}</p>
                                    </div>
                                    <div className="payment-data-block" style={{ marginBlock: '1rem -1.5rem' }} data-aos="fade-up">
                                        <h5 className="payment-data-block__header">Razorpay transaction ID</h5>
                                        <p className="payment-data-block__content">{data.razorpay_id}</p>
                                    </div>
                                    {data.donor_message && <div className="payment-data-block" style={{ marginBlock: '1rem -1.5rem' }} data-aos="fade-up">
                                        <h5 className="payment-data-block__header">Your Message</h5>
                                        <aside className="pull-quote">
                                            <blockquote>
                                                <p>{data.donor_message}</p>
                                                <div className='quote-footer'>
                                                    <cite>By donor</cite>
                                                </div>
                                            </blockquote>
                                        </aside>
                                    </div>}
                                </>
                            }
                        </div>
                    </div>
                </div>
            </section>

            {/* go to top button */}
            <ScrollToTop smooth />
            {/* //go to top button */}
        </div>
    )
}

export default PaymentConfirmed


export function loader() {
    // get the sign query
    const signature = new URLSearchParams(window.location).get('sign');
    console.log(signature)

    // return defer({
    //   transactionData: fetchPaymentData(signature)
    // });
}