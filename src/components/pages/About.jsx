export default function About() {
    return (
        <section id='about'>
            <h2 className="header">About Me</h2>
            <div className='about'>
                <div className='about-text'>
                    <p>My name is Samuel, I am passionate about my profession. 
                        As a fullstack developer I love to learn new technologies as often as I can. 
                        I spend my free time playing basketball and walking my dog Bon.</p>
                        <p>
                            I specialize in the MERN stack but I am always looking to learn new technologies.
                        </p>
                        <p>
                            I am 23 and from the bay area of California. 
                            I have a background in construction as a Pipeliner. 
                            After spending the years following high school digging holes in the middle of nowhere; 
                            I decided to make a change and pursue my passion for technology.
                        </p>
                </div>
                <div className='about-image'>
                    <img src='./public/me.jpg' alt='Samuel Thomas' />
                </div>
            </div>
        </section>
    )
}