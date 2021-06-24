import ilustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/Icon.svg'
import '../styles/auth.scss'

export function Home() {
  return (
    <div id="page-auth">
      <aside>
        <img src={ilustrationImg} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie sala de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiencia em tempo-real</p>
      </aside>
      <main>
        <div className="main-content">
          <img src={logoImg} alt="letmeask" />
          <button className="create-room">
            <img src={googleIconImg} alt="logo do google" />
            Crei sua sala com o google
          </button>
          <div className="separator" >ou entre em uma sala</div>
          <form action="">
            <input
              type="text"
              placeholder="Digite o codigo da sala"
            />
            <button type="submit">
              Entra na sala
            </button>
          </form>
        </div>
      </main>
    </div>
  )
};