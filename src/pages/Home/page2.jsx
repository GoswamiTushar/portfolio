import { motion } from 'framer-motion'

const Page2 = () => {
    return (
        <motion.div>
            <div className="page-2">

                <div className="design-container">
                    <h4 className="heading">
                        Design
                    </h4>
                    <p>
                        I'm probably not the typocal designer positioned behind and illustrator artboard adjusting pixels, but I design.
                        Immersed in stylesheets tweaking font-sizes and contemplating layouts is where you'll find me (~_^).
                        I'm commited to creating fluent user experiences while staying fashionable.
                    </p>
                </div>

                <div className="engineering-container">
                    <h4 className="heading">Engineering</h4>
                    <p>
                        In building JavaScript applications,
                        I'm equipped with just the right tools,
                        and can absolutely function independently of them to deliver fast,
                        resilient solutions optimized for scale — performance and scalabilty are priorities on my radar.
                    </p>
                </div>

            </div>
        </motion.div>
    )
}
export default Page2