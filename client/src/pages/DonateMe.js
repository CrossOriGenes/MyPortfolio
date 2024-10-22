import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/UI/Header';
import DonationCardPanel from '../components/donation-section/DonationCardPanel';
import { loadScript } from '../utils/Utilities';
import { toast } from 'react-toastify';

function DonateMe() {
  const navigate = useNavigate()
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  /* mobile menu
 * ---------------------------------------------------- */
  const handleMenuToggle = () => {
    setMenuIsOpen((prev) => !prev);
  };

  const initPayment = (data, userData) => {
    const options = {
      key: process.env.REACT_APP_RAZORPAY_KEY,
      amount: data.amount,
      currency: data.currency,
      name: "Buy me a Coffee",
      description: "Buy me a Coffee",
      image: "coffee-image.png",
      order_id: data.id,
      handler: async (response) => {
        try {
          const res = await toast.promise(
            fetch("https://crossorigenes148.onrender.com/payments/verify", {
              method: 'POST',
              body: JSON.stringify(response),
              headers: {
                "Content-Type": "application/json",
              },
            }),
            {
              pending: 'Completing payment... Please do not cancel/exit'
            });
          const result = await res.json()

          if (res.status === 200) {
            navigate(`../success?sign=${response.razorpay_signature}`)
            toast.success(result.message)
            // console.log(result);
          } else {
            toast.error(result.message)
          }
        } catch (error) {
          console.log(error);
        }
      },
      prefill: {
        name: userData.username,
        email: userData.email
      },
      theme: {
        color: "#3366cc"
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const paymentHandler = async (userData) => {
    try {
      const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')
      if (!res) {
        alert('Razropay failed to load!!')
        return
      }
      const { data: { data } } = await toast.promise(
        axios.post("https://crossorigenes148.onrender.com/payments/donation", userData),
        {
          pending: 'Redirecting...'
        }
      )
      // console.log(data);
      initPayment(data, userData);
    } catch (error) {
      console.log(error);
    }
  }

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


      {/* payment-section
    ================================================== */}
      <section id="donation" className="s-donation target-section">
        <div className="s-donation__section s-donation__section--body">
          <div className="right-vert-line" />
          <div className="row">
            <div className="column container col-md-6 tab-full">
              <div className="section-intro" data-num='$'>
                <h3 className="subhead" id="details-header">
                  Donation
                </h3>
                <h1 className="display-1">
                  Fund my works and projects
                </h1>
              </div>
              <div className="large-full column mt-6">
                <p className='px-3 intro-description'>
                  Best works needs best efforts and expertise and a pinch of creativity. Feel free to support me with your desired choice numbers and be a member of support
                  list to get best contents and free expertises of your design needs at your fingertips.
                </p>
              </div>
              <Link to='..' className='btn btn--secondary'>My Page</Link>
              <div className="alert alert-info mt-8" role="alert">
                <strong>Note:</strong> This section is still under development & testing purpose.
                You wouldn't be charged for real
              </div>
            </div>

            <div className="column container col-md-6 tab-full mt-tab-7">
              <DonationCardPanel onPaymentRequest={paymentHandler} />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default DonateMe
