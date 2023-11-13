import './styles.css'
import dp from '../../Assets/images/dp.jpg'
import DripOutline from '../../Assets/SVGs/DripOutline'
import LPGraphics from '../../Assets/SVGs/LandingPage'

const isMobile = window.innerWidth < 600

const AboutSection = () => {
    return (
        <div className='about-section'>
            <div class="blur-overlay"></div>
            <div className="content">
                <div className="info-container">
                    <div>
                        <p className='title'>
                            Full Stack <br />
                            Developer.
                        </p>
                        <p className='intro'>
                            I like to craft solid {isMobile ? <br /> : void 0} and scalable products <br />
                            with great user experiences
                        </p>
                    </div>
                    {/* <div className='sub-info'>
                        <p>
                            Highly skilled at progressive <br />
                            enhancement, design systems & UI <br />
                            Engineering
                        </p>
                        <p>
                            Proven experience building successful <br /> products for clients across <br /> several domains & countries.
                        </p>
                    </div> */}
                </div>

                <div className="image-container">
                    <span style={{
                        border: '1px solid var(--primaryBlue)',
                        width: '75%',
                        padding: '10px',
                        height: '350px',
                        display: 'inline-block',
                    }}>
                        <img src={dp} alt="handsome" className='handsome' />
                    </span>
                    {/* <div className='lp-svg'>
                        <LPGraphics style={{
                            zIndex: '-1000'
                        }} />
                    </div> */}
                </div>
            </div>

            {/* <div className='drip'>
                <DripOutline color='var(--primaryBlue)' style={{
                    scale: '50%',
                    opacity: '0.5'
                }} />
            </div> */}
        </div>
    )
}
export default AboutSection