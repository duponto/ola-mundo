import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';
import minhaFoto from 'assets/eumesmo.jpg'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Bem vindo ao meu portfólio! Meu nome é Gabriel Dupont, sou desenvolvedor Full-Stack e este é o meu site pessoal.
                    Aqui você pode encontrar um pouco sobre mim, minhas experiências, meus projetos e entrar em contato comigo.
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                    alt=""
                />

                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt="Foto do Gabriel Dupont olhando para o lado"
                />
            </div>
        </div>
    )
}