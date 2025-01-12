import PropTypes from 'prop-types';
import classNames from 'classnames';

function Button({ size, children }) {
  return (
    <button
      className={classNames(
        'bg-[#1d9bf0] rounded-full flex items-center text-black justify-center font-bold hover:bg-[#1d91f0] transition-colors',
        {
          'px-4 h-9 bg-[#eff3f4]': size === 'normal',
          'w-[230px] h-[52px] bg-[#eff3f4] hover:bg-[#e0dddd] font-medium text-[18px]': size === 'large',
          'w-[106.46px] h-[36px] text-white hover:bg-[#1f6492] font-bold': size === 'premium',
          'w-[78px] h-[32px] bg-[#eff3f4] hover:bg-[#b6b6b6] font-semibold': size === 'followBtn',
          'w-[66.34px] h-[36px] bg-[#787a7a] font-semibold': size === 'homebtn',
          "w-[199.65px] h-[52px] text-white font-bold text-[17px]": size === 'msgbtn',
           "w-[178.23px] h-[52px] text-white font-bold text-[17px]": size === 'msgbtnright'
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
