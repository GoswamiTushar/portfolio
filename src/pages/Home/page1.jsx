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
                    <div style={{
                        // backdropFilter: 'invert(20%)',
                        // padding: '20px',
                        // borderRadius: '8px',
                        // boxShadow: '10px 10px 10px -10px var(--primaryMain), -60px -30px 60px var(--primaryDark)'
                    }}>
                        I Provide <br />
                        <span className='bold'>Software Solutions</span> <br />
                        for your
                        <span className='bold'>Business</span> Problems <br />
                        <span className="sub-heading">
                            Get ready to turn your <i>Dreams </i> into <i>Reality</i>
                        </span>
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

                {/* <div className="image-container"> */}
                {/* <span style={{
                        border: '1px solid var(--primaryBlue)',
                        width: '75%',
                        padding: '10px',
                        height: '350px',
                        display: 'inline-block',
                    }}>
                        <img src={dp} alt="handsome" className='handsome' />
                    </span>
                    <div className='lp-svg'>
                        <LPGraphics style={{
                            zIndex: '-1000'
                        }} />
                    </div> */}
                {/* </div> */}
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