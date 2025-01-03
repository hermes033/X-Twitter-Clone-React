import PropTypes from 'prop-types';
import classNames from 'classnames';

function Button({ size, children }) {
  return (
    <button
      className={classNames(
        'bg-[#EFF3F4] rounded-full flex items-center text-black justify-center font-bold hover:bg-[#d9dada] transition-colors',
        {
          'px-4 h-9': size === 'normal',
          'w-[230px] h-[52px]  font-medium text-[18px]': size === 'large',
          'w-[188.5px] h-[36px] font-bold' : size === 'premium',
          'w-[78px] h-[32px] font-semibold' : size === 'followBtn',
          'w-[66.34px] h-[36px] bg-[#787a7a] font-semibold':size === 'homebtn'
        }
      )}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  size: PropTypes.oneOf(['normal', 'large']).isRequired,
  children: PropTypes.node.isRequired,
};


Button.defaultProps = {
  size: 'normal',
};

export default Button;
