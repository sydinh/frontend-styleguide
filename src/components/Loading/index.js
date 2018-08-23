import Loadable from 'react-loadable';
import Loading from './Loading';

const CustomLoadable = (loader) => {
  return Loadable({ ...loader, loading: Loading });
};

export default CustomLoadable;
