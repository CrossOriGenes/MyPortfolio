import { toast } from "react-toastify";
import axios from 'axios'


//slick slider settings
export const slickSettings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnFocus: false,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
        {
            breakpoint: 1080,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
            },
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            },
        },
    ],
}

export async function createDownloadLink(link, fileName) {
    axios.get(link, {
        responseType: 'blob'
    })
        .then(response => {
            const path = URL.createObjectURL(response.data)
            const linkElem = document.createElement('a')
            linkElem.href = path
            linkElem.download = fileName
            document.body.appendChild(linkElem)
            linkElem.click()
            linkElem.remove()
            toast.success('Downloading Successful✔️')
        })
        .catch(err => {
            console.log(err)
        })

}

export function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    })
}

export function paymentTypeReturns(data) {
    switch (data.method) {
        case "netbanking":
            return `${data.bank} - Netbanking`
        case "upi":
            return data.vpa
        case "card":
            return `${data.card_network}\t **${data.card_last4}`;
        case "wallet":
            return `${data.wallet} E-Wallet`
        default:
            return null
    }
}


export function getTime(query) {
    const options = {
        year: "numeric",
        month: "short",
        day: "numeric",
    }
    const dd = new Date(query)
    const date = dd.toLocaleDateString('en-GB', options)
    let hr = dd.getHours()
    let min = dd.getMinutes()
    let ampm = hr >= 12 ? 'pm' : 'am'
    hr = Math.abs(hr - 12)
    const time = hr + ':' + min + ' ' + ampm
    return `${date}, ${time}`
}

// const query = '2024-08-28T10:09:19.945+00:00'
// document.write(getTime(query))