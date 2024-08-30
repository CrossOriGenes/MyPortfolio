import { toast } from "react-toastify";
import axios from 'axios'

// photoswipe images
export const pswpImages = [
    {
        id: 1,
        largeURL: "images/portfolio/gallery/password-validator_thumbnail(large).jpg",
        thumbnailURL: "images/portfolio/password-validator_thumbnail.jpg",
        width: 1050,
        height: 700,
        info: {
            category: "Frontend Design",
            title: "Password-Validator",
            projectLink: "https://www.behance.net/",
            description: "Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi."
        }
    },
    {
        id: 2,
        largeURL: "images/portfolio/gallery/noteify_thumbnail(large).jpg",
        thumbnailURL: "images/portfolio/noteify_thumbnail.jpg",
        width: 1050,
        height: 700,
        info: {
            category: "Full-Stack",
            title: "Notes App",
            projectLink: "https://www.behance.net/",
            description: "Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi."
        }
    },
    {
        id: 3,
        largeURL: "images/portfolio/gallery/testify_thumbnail(large).jpg",
        thumbnailURL: "images/portfolio/testify_thumbnail.jpg",
        width: 1050,
        height: 700,
        info: {
            category: "Full-Stack",
            title: "Online Test App",
            projectLink: "https://crossorigenes.github.io/Testify",
            description: "Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi."
        }
    },
];


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
            return `${data.card.network}\t XX${data.card.last4}`
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