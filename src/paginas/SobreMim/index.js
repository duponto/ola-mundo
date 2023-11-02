import styles from "./SobreMim.module.css";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/eu-frente.jpg";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Gabriel!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto do Gabriel Dupont sorrindo"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Lorem Ipsum
            </p>
        </PostModelo>
    )
}