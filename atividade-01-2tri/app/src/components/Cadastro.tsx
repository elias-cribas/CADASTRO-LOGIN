import { Dispatch, FormEventHandler, SetStateAction } from "react";
import "../styles/Main.css"

export default function ({ setRoute }: { setRoute: Dispatch<SetStateAction<string>> }) {
  const enviarDados: FormEventHandler<HTMLFormElement> = async ev => {
    ev.preventDefault()
    const { _name, email, password } = ev.currentTarget

    const request = await fetch(`/api/user/`, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: _name.value,
        email: email.value,
        password: password.value
      })
    })

    if (request.status >= 200 && request.status <= 299) {
      alert("PARABAEINZ!")
      setRoute("login")
      return
    }

    const responseData = await request.json()
    
    if (responseData.error) {
      alert(responseData.error)
      return
    }

    alert("Cara! deu um erro tão foda, que eu nem sei o que foi!")
  }

  return <>
  <div className="bg"></div>
  <div className = "form-container">
  <form onSubmit={enviarDados}>
      <h1>Cadastro</h1>
      <button onClick={() => setRoute("login")}>Voltar</button>
      <input name="_name" placeholder="name" />
      <input name="email" placeholder="email" />
      <input name="password" type="password" placeholder="password" />
      <button>cadastrar-se</button>
    </form>
  </div>
    
  </>
}