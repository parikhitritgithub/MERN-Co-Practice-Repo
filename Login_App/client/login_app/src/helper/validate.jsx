import toast, { Toaster } from 'react-hot-toast';



export async function UsernameValidate(values){
    const errors = usernameVerify({}, values)

    return errors ;
}

function  usernameVerify(error={}, values ){
    if(!values.username) {
        error.username = "username required ...";
        toast.error("username required ...");
    }else if (values.username.includes(" ")){
        error.username = 'invalid username ...';
        toast.error('invalid username ...');
    }

    return error ;
}