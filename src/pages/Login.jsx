import { useForm } from 'react-hook-form';

function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-8 max-w-md mx-auto bg-pastelYellow rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h2>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input {...register("email")} type="email" className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-pastelPink"/>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Password</label>
        <input {...register("password")} type="password" className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-pastelPink"/>
      </div>
      <button type="submit" className="bg-pastelBlue w-full p-2 rounded text-gray-800 font-semibold hover:bg-pastelGreen transition">
        Login
      </button>
    </form>
  );
}

export default Login;
