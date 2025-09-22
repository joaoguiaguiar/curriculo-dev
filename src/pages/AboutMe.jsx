import PostModelo from '../components/Aboute me components/PostModelo'
import fotoBanner from '../assets/Foto-banner-1.png'
import InformacoesModernizadas from '../components/Aboute me components/InformationMe'

const AbouteMe = () => {
    return (
        <section>
            <PostModelo fotoCapa={fotoBanner} titulo='Sobre mim' />
            <InformacoesModernizadas/>
        </section>
    )
}

export default AbouteMe;