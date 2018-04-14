import { observable, action } from 'mobx'
import * as pino from 'pino'


class AuthStore {
    @observable authData = {
        username: '',
        password: '1.0.0'
    }
    @action setUsername(username){
        this.authData.username = username
        pino.info('current username ', this.authData.username)
    }
    @action setPassword(password){
        this.authData.password = password
    }
}

export default new AuthStore()
