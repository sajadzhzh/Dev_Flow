export default function LoginForm(){
    return(
        <form>
            <div className="mb-2 flex flex-col gap-1 focus-within:text-cyan-500">
              <label htmlFor="email">ایمیل</label>
              <input
                type="email"
                name="email"
                className="border rounded p-2 py-1"
              />
            </div>
            <div className="mb-2 flex flex-col gap-1 focus-within:text-cyan-500">
              <label htmlFor="password">رمز عبور</label>
              <input
                type="password"
                name="password"
                className="border rounded p-2 py-1"
              />
            </div>
            <button className="w-full py-1 bg-black/25 cursor-pointer rounded hover:bg-black/75">
              ورود
            </button>
          </form>
    )
}