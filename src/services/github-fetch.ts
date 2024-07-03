import { data } from '@/constants/data';
import axios from 'axios';

export const fetchGithub = async (count: number) => {
  try {
    const url = `https://api.github.com/users/${data.githubUsername}/repos?per_page=${count}`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub data:', error);
    return [];
  }
};

export const fetchLanguages = async (repo: any) => {
  try {
    const url = `https://api.github.com/repos/${data.githubUsername}/${repo}/languages`;
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error('Error fetching GitHub languages:', error);
    return [];
  }
};
