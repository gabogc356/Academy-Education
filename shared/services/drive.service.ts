import axios from 'axios';

const API_URL = import.meta.env.VITE_DRIVE_API_URL || 'http://localhost:3001';

export const driveService = {
  async uploadFile(userId: string, file: File) {
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('userId', userId);

      const response = await axios.post(`${API_URL}/api/drive/upload`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      return response.data;
    } catch (error) {
      console.error('Error uploading file:', error);
      throw error;
    }
  },

  async listFiles(userId: string) {
    try {
      const response = await axios.get(`${API_URL}/api/drive/files/${userId}`);
      return response.data;
    } catch (error) {
      console.error('Error listing files:', error);
      throw error;
    }
  },

  async deleteFile(userId: string, fileId: string) {
    try {
      const response = await axios.delete(`${API_URL}/api/drive/files/${userId}/${fileId}`);
      return response.data;
    } catch (error) {
      console.error('Error deleting file:', error);
      throw error;
    }
  },

  async getFileUrl(userId: string, fileId: string) {
    return `${API_URL}/api/drive/files/${userId}/${fileId}`;
  },
};
