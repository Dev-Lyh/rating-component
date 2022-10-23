import React from "react";
import IconStar from '../IconStar.jsx'

export default function Rating({setRate, setIsSubmit}) {

    return (
        <div className={'rating_card_container'}>
            <div className={'circle_iconstar'}>
                <IconStar/>
            </div>
            <h2 className={'rating_card_title'}>How did we do?</h2>
            <p className={'rating_card_paragraph'}>Please let us know how we did with your support request.
                All feedback is appreciated to help us improve our offering!</p>
            <div className={'rating_container'}>
                <input type="radio" name="rate" id="one" value={1} onClick={() => setRate(1)}/>
                <label htmlFor="one">1</label>

                <input type="radio" name="rate" id="two" value={2} onClick={() => setRate(2)}/>
                <label htmlFor="two">2</label>

                <input type="radio" name="rate" id="three" value={3} onClick={() => setRate(3)}/>
                <label htmlFor="three">3</label>

                <input type="radio" name="rate" id="four" value={4} onClick={() => setRate(4)}/>
                <label htmlFor="four">4</label>

                <input type="radio" name="rate" id="five" value={5} onClick={() => setRate(5)}/>
                <label htmlFor="five">5</label>
            </div>
            <button className={'submit_button'} onClick={() => setIsSubmit(true)}>SUBMIT</button>
        </div>
    )
}