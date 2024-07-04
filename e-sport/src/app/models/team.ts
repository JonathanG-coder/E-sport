import { Game } from "./game"
import { User } from "./user"

export class  Team {

    game?: Game
    id?: number
    logo?: string
    maxplayers?: number
    players: User[] = []
    staff: User[] = []
    team?: string
}

