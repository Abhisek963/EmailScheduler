import React, {useState} from 'react';

type LoginPageProps = {
  onLogin: () => void;
};


function LoginPage({ onLogin }: LoginPageProps){
  const [email, setEmail]= useState("");
  const [password, setPassword]= useState("");

  const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if(!email || !password){
      alert("Please fill in both email and password fields.");
      return;
    }
    onLogin();
  }

  return(
    <main className="flex min-h-screen items-center justify-center bg-white">
      <section className="w-[254px] rounded-[3px] border border-[#edf0ed] px-[14px] pb-[23px] pt-[14px]">
        <h2 className='mb-[12px] text-center text-[15px] font-semibold text-[#222222]'>login</h2>
        
        <button 
        type='button'
        className='flex h-[31px] w-full items-center justify-center gap-[6px] rounded-[4px] bg-[#e4f5eb] text-[12px] text-[#33483b] '>
          <span className='font-bold text-[#4285f4]'>G</span>
          Login with Google
        </button>
        <p className='my-[10px] text-center text-[9px] text-[#a3aaa5]'>
          or use your email
        </p>

        <form onSubmit={handleLogin} className='flex flex-col gap-2'>
          <input 
            type="email" 
            placeholder="Email ID" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='h-[30px] w-full rounded-[4px] border-0 bg-[#f3f6f4] px-[10px] text-[10px] outline-none focus:ring-1 focus:ring-[#00a64f]'
          />
          <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='h-[30px] w-full rounded-[4px] border-0 bg-[#f3f6f4] px-[10px] text-[10px] outline-none focus:ring-1 focus:ring-[#00a64f]'
          />
          <button 
            type="submit" 
            className='mt-[1px] h-[30px] w-full rounded-0 bg-[#00a64f] text-[10px] font-semibold text-white hover:bg-[#008d43]'
          >
            Login
          </button>
        </form>

      </section>
    </main>
  )
}

export default LoginPage;