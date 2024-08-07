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
    {
        id: 4,
        largeURL: "images/portfolio/gallery/g-sand-dunes.jpg",
        thumbnailURL: "images/portfolio/sand-dunes.jpg",
        // thumbnailURLSets: "images/portfolio/sand-dunes.jpg    1x, images/portfolio/sand-dunes@2x.jpg 2x",
        width: 1050,
        height: 700,
        info: {
            category: "Frontend Design",
            title: "Sand Dunes",
            projectLink: "https://www.behance.net/",
            description: "Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi."
        }
    },
    {
        id: 5,
        largeURL: "images/portfolio/gallery/g-woodcraft.jpg",
        thumbnailURL: "images/portfolio/woodcraft.jpg",
        // thumbnailURLSets: "images/portfolio/woodcraft.jpg    1x, images/portfolio/woodcraft@2x.jpg 2x",
        width: 1050,
        height: 700,
        info: {
            category: "Product Design",
            title: "Woodcraft",
            projectLink: "https://www.behance.net/",
            description: "Vero molestiae sed aut natus excepturi. Et tempora numquam. Temporibus iusto quo.Unde dolorem corrupti neque nisi."
        }
    },
    {
        id: 6,
        largeURL: "images/portfolio/gallery/g-lamp.jpg",
        thumbnailURL: "images/portfolio/lamp.jpg",
        // thumbnailURLSets: "images/portfolio/lamp.jpg    1x, images/portfolio/lamp@2x.jpg 2x",
        width: 1050,
        height: 700,
        info: {
            category: "Product Design",
            title: "The Lamp",
            projectLink: "https://www.behance.net/",
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