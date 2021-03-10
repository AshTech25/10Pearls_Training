class Auth{
constructor(){
this.isAuthenticated = false;
}
login(cb){
    this.isAuthenticated = true;
    cb();
}
logout(cb){
    this.isAuthenticated = false;
    cb();
}
isauthenticated(){
    return this.isAuthenticated
}

}

export default new Auth();