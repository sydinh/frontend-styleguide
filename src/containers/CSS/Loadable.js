import CustomLoadable from "../../components/Loading";

const Loadable = CustomLoadable({
  loader: () => import("./index")
});

export default Loadable;
