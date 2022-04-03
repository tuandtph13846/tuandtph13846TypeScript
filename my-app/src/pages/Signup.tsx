import { useNavigate } from 'react-router-dom';
import { useForm , SubmitHandler} from 'react-hook-form'
import { signup } from '../api/auth';

type FormValues = {
    name: string,
    email: string,
    password: string
}
const Signup = () =>{
    const { register ,handleSubmit , formState : {errors}} = useForm<FormValues>();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<FormValues> = (data) =>{
        signup(data);
        navigate("/signin")
    }
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} action="">
                 name:<input type="text" {...register('name',{required:true, minLength: 5})} />
                {errors.name && errors.name.type === "required" && <span>Required</span>}
                {errors.name && errors.name.type === "minLength" && <span>Min length</span>} 
                email:<input type="email" {...register('email',{ required:true})} />
                password:<input type="password" {...register('password')} /> 
                <button>Add</button>
            </form>
        </div>
    )
}
export default Signup