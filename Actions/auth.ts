"use server"

export async function register(state: any , formData: FormData){
    const name = formData.get("name")
    const email = formData.get("email")
    const password = formData.get("password")
    const passCheck = formData.get("passCheck")
    
    if(!name || !email || !password || !passCheck){
        return{
            status: "error",
            message: "تمام بخش ها الزامی هستند!"
        }
    }
}