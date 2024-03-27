export type CatogoryMenu = {
  category_name: string,
  menu: {
    name: string
    description:string
    photo:string
    price: number
  }[]
};

export type MenuResponse = {
  status: string,
  result: {
    categories: CatogoryMenu[]
  }
};

const menuApi = async (): Promise<MenuResponse> => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch('https://soal.staging.id/api/menu', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({ show_all: 1 }),
    });

    const json = await response.json();

    return json as MenuResponse;
  } catch (error) {
    // eslint-disable-next-line no-alert
    alert('Failed to load data');
    throw error;
  }
};

export default menuApi;
