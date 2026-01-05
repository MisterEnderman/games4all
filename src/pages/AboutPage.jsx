import React from 'react'
import Title from '../components/Title'
import SocialLinks from '../components/SocialLinks'

const AboutPage = () => {
    return (
        <main className='about-page'>
            <section className='about-left'>
                <Title>
                    Hello!
                </Title>
                <h2>My name is Itamar and welcome to my F2P games website.</h2>
                <p>
                    I'm a high school student and an aspiring web developer.
                    I built this app because I believe gaming should be accessible to anyone
                    regardless of budget. That's why I created this hub to help you find the best
                    free-to-play games out there.
                </p>
                <p>
                    When I'm not coding or studying, I'm usually gaming - usually competitive games
                    like FIFA or Bedwars (in the Minecraft Hypixel server).
                </p>

                <SocialLinks />
            </section>
            <section className='about-right'>
                <img alt="Itamar Ben Ami" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXJ3ziOQFKu5m0BOgF0bDjcBZQ6lsTy0LCKQ&s" />
            </section>
        </main>
    )
}

export default AboutPage