import useSignUpForm from '../hooks/RegisterHooks';
import {useUsers} from '../hooks/ApiHooks';

const RegisterForm = () => {
  const {register, getUserAvailable} = useUsers();

  const doRegister = async () => {
    try {
      console.log('rekisteröinti lomake lähtee');
      const available = await getUserAvailable(inputs.username);
      console.log('availabale', available);
      if (available) {
        register(inputs);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  const {inputs, handleInputChange, handleSubmit} = useSignUpForm(doRegister);
  // console.log('RegisterForm', inputs);

  return (
    <form onSubmit={handleSubmit}>
      <h1>Register</h1>
      <div>
        <label>Username</label>
        <input
          name="username"
          onChange={handleInputChange}
          value={inputs.username}
        />
      </div>
      <div>
        <label>Password</label>
        <input
          name="password"
          type="password"
          onChange={handleInputChange}
          value={inputs.password}
        />
      </div>
      <div>
        <label>E-mail</label>
        <input
          name="email"
          type="email"
          onChange={handleInputChange}
          value={inputs.email}
        />
      </div>
      <div>
        <label>Fullname</label>
        <input
          name="full_name"
          onChange={handleInputChange}
          value={inputs.full_name}
        />
      </div>
      <button>Tallenna</button>
    </form>
  );
};

export default RegisterForm;
