import toast, { Toaster } from 'react-hot-toast';


// username validation 
export async function UsernameValidate(values){
    const errors = usernameVerify({}, values)

    return errors ;
}


// password validation 
export async function PasswordValidate(values) {
    const errors = PasswordVerify({} , values)

    return errors ; 
}

// register validation 
export async function RegisterValidation(values) {
    const errors = usernameVerify({} , values) 
    PasswordVerify({} , errors )
    EmailVerify({} , errors)


    return errors ;
}




// reset password validation 
export async function ResetPasswordValidation (values) {
    const error = PasswordVerify({} , values);
    if(values.Password != values.confirm_pwd) {
        error.exist = toast.error("Password Not Match")
    }

    return errors ;
}


// massage popup for password 

function PasswordVerify(error={}, values) {

    const specialChars = /[!@#$%^&*()/\?''>""<,.+-_{}]/;

    if(!values.Password) {
        error.Password = 'Password Required ...';
        toast.error("Password Required ...")
    }else if(values.Password.includes(" ") ) {
        error.Password = ' invalid Password ...' ;
        toast.error('invalid Password ...') ;
    }else if (values.Password.length < 8 ) {
        error.Password = 'Password contain 8 spacific character ..'
        toast.error('Password contain 8 spacific character ..')
    }else if (!specialChars.test(values.Password)) {
        error.Password ='Password must contain special characters ...';
        toast.error('Password must contain special characters ...') ;
    } else {
        toast.success('Done!')
    }
    return error ;
}



// massage popup for username error  
function  usernameVerify(error={}, values ){
    if(!values.username) {
        error.username = "username required ...";
        toast.error("username required ...");
    }else if (values.username.includes(" ")){
        error.username = 'invalid username ...';
        toast.error('invalid username ...');
    }else{
        toast.success('Done!')
    }

    return error ;
}

//email popup 
function EmailVerify(error={} , values ) {

    const specialChars = /[!@#$%^&*()/\?''>""<,.+-_{}]/;

    if(!values.Email){
        error.Email = 'Email required ' ;
        toast.error = 'Email required '
    } else if (values.Email.include(" ")) {
        error.Email = 'Wrong Email...' ;
        toast.error = 'Wrong Email...' ; 
    } else if (!specialChars.text(values.Email)) {
        error.Email = 'Invalid Email ... ' ;
        toast.Email = 'Invalid Email ... ' ;
    }
    return error
}