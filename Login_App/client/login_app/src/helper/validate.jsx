import toast, { Toaster } from 'react-hot-toast';



export async function UsernameValidate(values){
    const errors = usernameVerify({}, values)

    return errors ;
}

export async function PasswordValidate(values) {
    const errors = PasswordVerify({} , values)

    return errors ; 
}


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