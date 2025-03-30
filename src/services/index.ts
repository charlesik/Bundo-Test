import axios from 'axios';

export const createLocation = async (location: {
  id: string;
  lat: number;
  long: number;
  businessName: string;
  address: string;
  businessProfilePicture: string;
}) => {
  try {
    const response = await axios.post('https://dny4au0opl.execute-api.us-west-2.amazonaws.com/Stage/', location,
        {
      headers: {
        'Content-Type': 'application/json',
      },
    }
);

    console.log('Location created successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error creating location:', error);
    throw error; 
  }
};