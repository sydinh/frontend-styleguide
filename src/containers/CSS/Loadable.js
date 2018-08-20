import CustomLoadable from '../../components/CustomLoadable';

const Loadable = CustomLoadable({
  loader: () => import('./index')
});

export default Loadable;
