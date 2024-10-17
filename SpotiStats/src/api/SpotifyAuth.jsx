import { useSearchParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import fetchUserData from './fetchUserData'


const SpotifyAuth = () => {
  
    const [searchParams] = useSearchParams();
    const navigate = useNavigate()
    useEffect(() => {
      const code = searchParams.get('code');
      console.log(code);
      if (code) {
        getToken(code); 
        
      }
    }, [searchParams]);
  
    const getToken = async (code) => {
      const clientId = "06d408ab38794edb91b879d117ab204f";
      const clientSecret = "352f8d5b6fe34be7affa5677e1d8f1f6";
    
      const params = new URLSearchParams();
    
      params.append('grant_type', 'authorization_code');
      params.append('code', code);
      params.append('redirect_uri', 'http://localhost:3001/callback'); 
      params.append('client_id', clientId);
      params.append('client_secret', clientSecret);
    
      try {
        const response = await axios.post('https://accounts.spotify.com/api/token', params, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
    
        });
        if(response.status === 200){
          navigate('/')
        }

        
        sessionStorage.setItem('token', response.data.access_token)
        sessionStorage.setItem('login', true)
        fetchUserData(sessionStorage.getItem('token'))
        
      } catch (error) {
        console.log(error);
      }
    };
  
  
  };
  
  export default SpotifyAuth;