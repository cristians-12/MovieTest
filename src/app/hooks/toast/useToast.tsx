import toast from "react-hot-toast";
const useToast = () => {
    const success = () => toast('You are now logged in!');
    const successRegister = () => toast('You are now registered! Welcome to the club, now you can login')
    const errorToast = () => toast("Error!")

    return (
        {
            success,
            successRegister,
            errorToast
        }
    )
}

export default useToast