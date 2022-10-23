import IllustrationThankYou from "../IllustrationThankYou.jsx";
export default function ThankYou({rate}) {
    return (
            <div className={'rating_card_container'} style={{textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                <IllustrationThankYou />
                <p className={'thankyou_rated'}>You selected {rate} out of 5</p>
                <h2 className={'thankyou_title'}>Thank you!</h2>
                <p className={'thankyou_paragraph'}>We appreciate you taking the time to give a rating.<br/>If you ever need more support, don’t hesitate to<br/>get in touch!</p>
            </div>
    )
}