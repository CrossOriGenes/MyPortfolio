function paymentTypeReturns(data) {
    // console.log(111,data)
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

function getTime(query) {
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

function paymentSuccessMail(data) {
    return `
    <!doctype html>
<html>

<head>
    <meta name="viewport" content="width=device-width" />
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>Simple Call To Action</title>
    <style>
        img {
            border: none;
            -ms-interpolation-mode: bicubic;
            max-width: 100%;
        }

        body {
            background-color: #91e0ff;
            font-family: sans-serif;
            -webkit-font-smoothing: antialiased;
            font-size: 14px;
            line-height: 1.4;
            margin: 0;
            padding: 0;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
        }

        p {
            color: #fff;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
        }

        table {
            border-collapse: separate;
            mso-table-lspace: 0pt;
            mso-table-rspace: 0pt;
            min-width: 100%;
            width: 100%;
        }

        table td {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
            font-size: 14px;
            vertical-align: top;
        }

        .body {
            background-color: #91e0ff;
            width: 100%;
        }

        .container {
            display: block;
            margin: 0 auto !important;
            max-width: 580px;
            padding: 10px;
            width: 580px;
        }

        .content {
            position: relative;
            box-sizing: border-box;
            display: block;
            margin: 0 auto;
            width: 100%;
            padding: 10px;
        }

        .main {
            background-color: #161f33;
            border-radius: 3px;
            width: 100%;
        }

        .header {
            padding: 20px 0;
        }

        .wrapper {
            box-sizing: border-box;
            padding: 20px;
        }

        .content-block {
            padding-bottom: 10px;
            padding-top: 10px;
        }

        .action-group {
            justify-content: space-between !important;
        }

        .footer {
            clear: both;
            margin-top: 10px;
            text-align: center;
            width: 100%;
        }

        .footer td,
        .footer p,
        .footer span,
        .footer a {
            color: #5d6576;
            font-size: 12px;
            text-align: center;
        }

        h1,
        h2,
        h3,
        h4 {
            color: #06090f;
            font-family: sans-serif;
            font-weight: 400;
            line-height: 1.4;
            margin: 0;
            margin-bottom: 30px;
        }

        h1 {
            font-size: 35px;
            font-weight: 300;
            text-align: center;
            text-transform: capitalize;
        }

        p,
        ul,
        ol {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif !important;
            font-size: 14px;
            font-weight: normal;
            margin: 0;
        }

        a {
            color: #ec0867;
            text-decoration: underline;
        }

        .btn {
            box-sizing: border-box;
            min-width: 100%;
            width: 100%;
        }

        .btn a {
            background-color: #ffffff;
            border: solid 1px #ec0867;
            border-radius: 5px;
            box-sizing: border-box;
            color: #ec0867;
            cursor: pointer;
            display: inline-block;
            font-size: 1rem;
            font-weight: bold;
            margin: 0;
            padding: 12px 25px;
            text-decoration: none;
            text-transform: capitalize;
        }

        .btn-primary a {
            background-color: #ec0867;
            border-color: #ec0867;
            color: #ffffff;
        }

        .btn-primary a:hover {
            background-color: #d5075d !important;
            border-color: #d5075d !important;
        }

        .preheader {
            color: transparent;
            display: none;
            height: 0;
            max-height: 0;
            max-width: 0;
            opacity: 0;
            overflow: hidden;
            mso-hide: all;
            visibility: hidden;
            width: 0;
        }

        .powered-by a {
            text-decoration: none;
        }

        hr {
            border: 0;
            border-bottom: 1px solid #868686;
            margin: 20px 0;
        }

        @media only screen and (max-width: 620px) {
            table[class='body'] h1 {
                font-size: 28px !important;
                margin-bottom: 10px !important;
            }

            table[class='body'] p,
            table[class='body'] ul,
            table[class='body'] ol,
            table[class='body'] td,
            table[class='body'] span,
            table[class='body'] a {
                font-size: 16px !important;
            }

            table[class='body'] .wrapper,
            table[class='body'] .article {
                padding: 10px !important;
            }

            table[class='body'] .content {
                padding: 17px !important;
            }

            table[class='body'] .container {
                padding: 0 !important;
                width: 100% !important;
            }

            table[class='body'] .main {
                border-left-width: 0 !important;
                border-radius: 0 !important;
                border-right-width: 0 !important;
            }

            table[class='body'] .btn a {
                width: 100% !important;
            }

            table[class='body'] .img-responsive {
                height: auto !important;
                max-width: 100% !important;
                width: auto !important;
            }

            .action-group {
                flex-direction: column;
                gap: 1rem;
            }
        }

        @media all {

            p,
            li {
                font-size: 1rem !important;
            }

            .ExternalClass {
                width: 100%;
            }

            .ExternalClass,
            .ExternalClass p,
            .ExternalClass span,
            .ExternalClass font,
            .ExternalClass td,
            .ExternalClass div {
                line-height: 100%;
            }

            .apple-link a {
                color: inherit !important;
                font-family: inherit !important;
                font-size: inherit !important;
                font-weight: inherit !important;
                line-height: inherit !important;
                text-decoration: none !important;
            }
        }
    </style>
</head>

<body class="">
    <table role="presentation" border="0" cellpadding="0" cellspacing="0" class="body">
        <tr>
            <td>&nbsp;</td>

            <div class="header">
                <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                    <tr>
                        <td style="text-align: center;">
                            <img src="https://res.cloudinary.com/dtfoedy3u/image/upload/v1719813756/vddamfgohqoza6fysb5c.png"
                                height="70" alt="CrossOriGenes">
                        </td>
                    </tr>
                </table>
            </div>
            <div class="content">
                <table role="presentation" class="main">
                    <tr>
                        <td class="wrapper">
                            <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                                <tr>
                                    <td>
                                        <h2 style="font-size: 2rem; color: #ffffff; font-weight: 700;">Hi, <span
                                                style="color: #d70068; text-transform: uppercase;font-size: 2rem !important;">${data.donor_name}</span>
                                        </h2>

                                        <p
                                            style="font-size: 1.4rem; font-weight: 400; line-height: 1.5rem;margin-top: 1rem;">
                                            Thank you so much for making this donation!❤️ I am so thankful as you
                                            liked my works and provied your precious time to admire them.
                                            Below is your donation information I've received. We look forward to working
                                            with you. <br>
                                            Given below is the donation details summary for your convinience. You can
                                            also view the confirmation message and details by clicking on the button
                                            below.
                                        </p>
                                        <table role="presentation" border="0" cellpadding="0" cellspacing="0"
                                            style="padding-inline: 2rem;margin-top: 2rem;margin-bottom: 2rem;text-align: center;">
                                            <tbody>
                                                <tr>
                                                    <td class="btn btn-primary">
                                                        <a href="https://crossorigenes148.onrender.com/success?sign=${data.signature}"
                                                            target="_blank">View Payment details</a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <table
                                            style="margin-block: 1rem;padding-block: 0.5rem">
                                            <caption
                                                style="font-size: 1.2rem; font-weight: 700; color: #5d6576;text-align: left;border-bottom: 2px solid #777 !important;">
                                                ORDER SUMMARY</caption>
                                            <thead style="text-align: left;color: #aaa;">
                                                <tr>
                                                    <th>Payment Date</th>
                                                    <th>Transaction ID</th>
                                                    <th>Method</th>
                                                </tr>
                                                <tr>
                                                    <td>${getTime(data.created_at)}</td>
                                                    <td>${data.receipt}</td>
                                                    <td>${paymentTypeReturns(data)}</td>
                                                </tr>
                                            </thead>
                                        </table>
                                        <hr width="100%" size="3px" color="#aaa" style="margin-block: 1rem 2rem;" />
                                        <table style="width: 100% !important;">
                                                <tbody style="color: #ccc;">
                                                    <tr style="display: flex !important; justify-content: space-between !important; align-items: center !important;">
                                                        <td style="display: inline-flex !important; align-items: center !important;">
                                                            <div
                                                                style="position: relative;width: 80px;height: 80px;overflow: hidden;">
                                                                <img src="https://res.cloudinary.com/dtfoedy3u/image/upload/v1725385566/coffee-image_q6k2up.png"
                                                                    style="position: absolute;width: 100%;height: 100%;top: 0;left: 0;object-fit: cover;" />
                                                            </div>
                                                            <strong style="margin-left: 1rem;">Buy me a
                                                                Coffee (Donation)</strong>
                                                        </td>
                                                        <td>Qty: 1</td>
                                                        <td>
                                                            <strong>&#8377; ${data.amount}</strong>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        <hr width="100%" size="3px" color="#aaa" style="margin-block: 1rem 2rem;" />
                                        <table>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <p>
                                                            Please support me of my works as you did before. Just to
                                                            make you aware
                                                            of
                                                            any issues or other service related queries you can reach me
                                                            from <a href="https://crossorigenes148.onrender.com/#contact"
                                                                target="_blank"
                                                                style="font-weight: 600; color: #00c1f2;">here</a>.<br>
                                                            Also any future donation can be applied towards this if you
                                                            so choose to
                                                            clicking over <a href="https://crossorigenes148.onrender.com/donate"
                                                                target="_blank"
                                                                style="font-weight: 600; color: #00c1f2;">here</a>.
                                                        </p>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <p
                                            style="margin-top: 1rem !important; font-size: 1.5rem; font-weight: 500; line-height: 1.5rem;">
                                            <br><br>
                                            with Regards,<br>
                                            <span style="font-size: 1.3rem;font-weight: 600;color: #6d94b0;">team
                                                <strong style="color: #00c1f2">CrossOriGenes</strong>
                                            </span>
                                        </p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
                <div class="footer">
                    <table role="presentation" border="0" cellpadding="0" cellspacing="0">
                        <tr>
                            <td class="content-block">Problems? Contact our <a
                                    href="https://crossorigenes148.onrender.com/support">Customer Support</a>.
                            </td>
                        </tr>
                        <tr>
                            <td class="content-block powered-by">
                                Powered by <a href="https://crossorigenes148.onrender.com">CrossOriGenes</a>.
                            </td>
                        </tr>
                    </table>
                </div>
            </div>

            <td>&nbsp;</td>
        </tr>
    </table>
</body>

</html>`
}

module.exports = paymentSuccessMail