import toast from "react-hot-toast";



export async function UsernameValidate (values) {
    const errors = UsernameVerify({} , values)


    return errors ;
}



function UsernameVerify (error ={} , values) {
    if(!values.username) {
        error.username = toast.error('username required .... ')
    } else if (values.username.include(" ")) {
        error.username = toast.error('invalid username ...')
    }
    return error ;
}