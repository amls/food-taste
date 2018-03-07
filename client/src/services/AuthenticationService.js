import Api from '@/services/Api'

export default {
    register (credentials){
        return Api().post('register', credentials)
    }
}

// AuthenticationService.register({
//         email: 'testing2gmail.com',
//         password: '123456'
//     })