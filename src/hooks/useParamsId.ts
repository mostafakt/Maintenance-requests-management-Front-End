import { useParams } from 'react-router-dom';

export const useParamsId = (): number | null => {
  const { id } = useParams();

  if (id) {
    if (typeof id === 'string' || /^\d+$/.test(id)) {
      return parseInt(id);
    }
    return id;
  } else {
    return null;
  }
};
