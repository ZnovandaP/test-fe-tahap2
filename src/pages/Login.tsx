/* eslint-disable no-alert */
import * as React from 'react';

import { useNavigate } from 'react-router-dom';
import logo from '../assets/logo_technopartner.png';
import Container from '../components/Container';
import Input from '../components/Input';
import ButtonLogin from '../components/Buttons/ButtonLogin';
import auth from '../service/auth';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const login = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (email.length < 1 || password.length < 1) {
      alert('Email and Password is required!');
      return;
    }

    const response = await auth({ username: email, password });

    if (response.access_token) {
      navigate('/');
      alert('Login Success!');
    }
  };

  return (
    <Container>
      <div className="center flex-col h-screen">
        <div className="md:ring-2 md:ring-neutral-300 md:rounded-xl md:pb-12">
          <img src={logo} alt="Logo Technopartner" loading="lazy" />

          <form className="center flex-col gap-4 w-full" onSubmit={(e) => login(e)}>
            <Input
              id="email"
              type="email"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              autoComplete="on"
              id="password"
              type="password"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
            />

            <ButtonLogin>
              Login
            </ButtonLogin>
          </form>
        </div>
      </div>
    </Container>
  );
}
