import classNames from 'classnames/bind';
import styles from '~/components/Layout/components/Header/Header.module.scss';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/* {Logo} */}
                {/* {Search} */}
            </div>
        </header>
    );
}

export default Header;
