import { Injectable } from "@nestjs/common"
import { Usuario } from "./usuario.entity"

@Injectable()
export class UsuarioService {
    private usuarios: Array<Usuario> = [
        {
            id: 1,
            nomeDeUsuario: 'karina',
            email: 'karina.rodrigues@willbank.com.br',
            senha: '123456',
            nomeCompleto: 'Karina Melo Rodrigues',
            dataDeEntrada: new Date()
        }
    ]

    public cria(usuario: Usuario): Usuario {
        this.usuarios.push(usuario)

        return usuario
    }

    public buscaPorMomeDeUsuario(nomeDeUsuario): Usuario {
        return this.usuarios.find(usuario => usuario.nomeDeUsuario === nomeDeUsuario)
    }
}
