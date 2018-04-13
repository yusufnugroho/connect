import { observable, action } from 'mobx';


class AuthStore {
    @observable authData = {
        username: '',
        password: '1.0.0'
    }
    @action setUsername(username){
        this.authData.username = username
    }
    @action setPassword(password){
        this.authData.password = password
    }
}

export default new AuthStore()
