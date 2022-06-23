export default function Login(){
    return {
        username1: '',
        password1: '',
        username2: '',
        password2: '',
        userCredentials: JSON.parse(localStorage.getItem('creds')) || [],
        feedbackText: '',

        getUsername(){
            console.log(this.username1)
            return this.username1
        },

        getPassword(){
            return this.password1
        },

        setLoginCredentials(){
            
            let credObject = {
                username: this.username1,
                password: this.password1,
                loveCount: this.hearts()
            }
            return credObject
        }, 
         setRegCredentials(){
            let credObject = {
                username: this.username2,
                password: this.password2,
                loveCount: this.hearts()
            }
            return credObject
         },

        loginCred(){
            let loginItem = this.userCredentials.find(item => item.username == this.setLoginCredentials().username)
            console.log(loginItem)
            if(loginItem){
                if(loginItem.password == this.setLoginCredentials().password){
                    this.feedbackText = 'Successful Login'
                }else {
                    this.feedbackText = 'Incorrect password'
                }
            }else{
                this.feedbackText = 'Username not recognised. Check if entered correctly or register'
            }

            return this.feedbackText
            // for(let i = 0; i < this.userCredentials.length; i++){
            // console.log(this.userCredentials.includes(this.setCredentials()))
            // if(this.userCredentials[i].username == this.setCredentials().username){
            //     if(this.userCredentials[i].password == this.setCredentials().password){
            //         this.feedbackText = 'Successful login'
            //     }else{
            //         this.feedbackText = 'Wrong Password'
            //     }
            // }else {
            //     this.feedbackText = 'Username not recognised. Please try again or register'
            // }
            // this.userCredentials.push(this.setCredentials())
            // localStorage.setItem('creds', JSON.stringify(this.userCredentials))
            // console.log(this.userCredentials)
        }, 

        regCred(){
            let regItem = this.userCredentials.find(item => item.username == this.setRegCredentials().username)
            console.log(regItem)
            if(regItem){
               this.feedbackText = 'User already registered. Please login'
            }else{
                this.userCredentials.push(this.setRegCredentials())
                localStorage.setItem('creds', JSON.stringify(this.userCredentials))
                this.feedbackText = 'Successfully registered'
            }
            return this.feedbackText

            // for(let i = 0; i < this.userCredentials.length; i++){
            //     if(this.userCredentials[i].username == this.setCredentials().username){
            //        console.log('User already exists. Please login')
            //     }else {
            //         console.log('Username not recognised. Please try again or register')
            //     }
            // }
        },

        loveCounter : 0,
      love() {
       this.loveCounter++
      },
      hearts() {
         
         if (this.loveCounter <= 0) {
          return "💔"
         }
      
         if (this.loveCounter > 0 && this.loveCounter <= 5) {
           return "💚"
         } else if (this.loveCounter <= 10) {
           return "💚💚";
         } else {
           return "💚💚💚";
         }
      }, 

      storeCount(){
        localStorage.setItem('hearts', this.hearts())
      }, 

      getFeedbackText(){
        console.log(this.feedbackText)
        return this.feedbackText
      }
      

    }
}
// document.addEventListener('alpine:init', () =>{
//     Alpine.data('login', () => ({
//         username: '',
//         password: '',

//         getUsername(){
//             console.log(this.username)
//             return username
//         },

//         getPassword(){
//             return password
//         }

        
//     }))
// })