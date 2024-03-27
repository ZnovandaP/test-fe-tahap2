export type AuthParams = {
  username: string
  password: string
};

export type AuthResponse = {
  token_type: string,
  expires_in: number,
  access_token: string,
  refresh_token: string
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const auth = async ({ username, password }: AuthParams): Promise<AuthResponse> => {
  const body = {
    grant_type: 'password',
    client_secret: '0a40f69db4e5fd2f4ac65a090f31b823',
    client_id: 'e78869f77986684a',
    username,
    password,
  };

  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch('https://soal.staging.id/oauth/token', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const json = await response.json();

    localStorage.setItem('token', json.access_token);

    return json as AuthResponse;
  } catch (error) {
    // eslint-disable-next-line no-alert
    alert('Auhtentication failed!');
    throw error;
  }
};

export default auth;
