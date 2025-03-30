export const createLocation = async (location: {
    id: string;
    lat: number;
    long: number;
    businessName: string;
    address: string;
    businessProfilePicture: string;
  }) => {
    console.log('Sending location data:', location);
  
    try {
      const response = await fetch('https://dny4au0opl.execute-api.us-west-2.amazonaws.com/Stage/', {
        method: 'POST',
        body: JSON.stringify(location),
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log('Location created successfully:', data);
      return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      console.error('Failed to create location:', error.message);
      throw error;
    }
  };

export const getBusinessLocations = async () => {
    try {
      const response = await fetch('https://dny4au0opl.execute-api.us-west-2.amazonaws.com/Stage/businessLocations', {
        method: 'GET',
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log('Business Locations:', data);
      return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      console.error('Failed to fetch business locations:', error.message);
      throw error;
    }
  };  

  export const getMarketPlace = async () => {
    try {
      const response = await fetch('https://dny4au0opl.execute-api.us-west-2.amazonaws.com/Stage/', {
        method: 'GET',
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }
  
      const data = await response.json();
      console.log('Marketplace', data);
      return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (error:any) {
      console.error('Failed to fetch business locations:', error.message);
      throw error;
    }
  };  