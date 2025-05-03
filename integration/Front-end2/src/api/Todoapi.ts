import { Todo } from '../types/Todo';
import { Axios } from '../utils/axiosInstance';
 
type getTodoResponse = {
    success: boolean;
    data: Todo[];
    msg: string;
};

type CreateTodoResponse = {
    success: boolean;
    data: Todo;
    msg: string;
  };
  
 
const getTodoAPI = async () => {
    try {
        const response = await Axios.get<getTodoResponse>('/get');
        return response.data;
    } catch (e) {
        console.log(e);
        return {
            success: false,
            data: null,
            msg: 'AXIOS ERROR',
        };
    }
};

const createTodoAPI = async (name: string) => {
    try {
      const response = await Axios.post<CreateTodoResponse>('/create', { name });
      return response.data;
    } catch (e) {
      console.log(e);
      return {
        success: false,
        data: null,
        msg: 'AXIOS ERROR',
      };
    }
  };

 
export { getTodoAPI , createTodoAPI};