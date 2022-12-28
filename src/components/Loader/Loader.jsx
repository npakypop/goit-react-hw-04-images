import { Oval } from 'react-loader-spinner';
import css from '../Modal/Modal.module.css';

export const Loader = () => {
  return (
    <div className={css.Overlay}>
      <Oval
        height={80}
        width={80}
        color="#4fa94d"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#BEBEBE"
        strokeWidth={2}
        strokeWidthSecondary={2}
      />
    </div>
  );
};
