import React from 'react'
import { AiFillInstagram } from "react-icons/ai"
import { BsDiscord } from "react-icons/bs"
import { FaWhatsappSquare } from "react-icons/fa"

const SocialLinks = () => {
    const sendWhatsapp = () => {
        const number = '972503893930';
        const formattedPhoneNumber = number.replace(/\D/g, "");

        const message = "תודה רבה על האתר של המשחקים החינמיים! עזרת לי מאוד 💛";

        const URL = `https://wa.me/${formattedPhoneNumber}?text=${message}`;
        window.open(URL, "_blank");
    }

    return (
        <div className='social'>
            <a href='https://www.instagram.com/itamar.ben.ami_/' target='_blank'>
                <AiFillInstagram />
            </a>
            <a href='https://discord.com/users/777595674928873503' target='_blank'>
                <BsDiscord />
            </a>
            <button className='whatsapp-btn' onClick={sendWhatsapp}>
                <FaWhatsappSquare />
            </button>
            <span>I'm not available on Shabbat or Jewish Holidays!</span>
        </div>
    )
}

export default SocialLinks