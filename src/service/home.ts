export type HomeResponse = {
  status: string,
  result: {
    greeting: string,
    name: string,
    saldo: number,
    point: number,
    qrcode: string
    banner: string[]
  }
};

const homeApi = async (): Promise<HomeResponse> => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch('https://soal.staging.id/api/home', {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },

    });

    const json = await response.json();

    return json;
  } catch (error) {
    throw error;
  }
};

export default homeApi;
