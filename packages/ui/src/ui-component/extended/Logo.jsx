import logo from '@/assets/images/logo-header.webp'
import logoDark from '@/assets/images/logo-header.webp'

import { useSelector } from 'react-redux'

// ==============================|| LOGO ||============================== //

const Logo = () => {
    const customization = useSelector((state) => state.customization)

    return (
        <div style={{ alignItems: 'center', display: 'flex', flexDirection: 'row' }}>
            <img
                style={{ objectFit: 'contain', height: 'auto', width: 250 }}
                src={customization.isDarkMode ? logoDark : logo}
                alt='Flowise'
            />
        </div>
    )
}

export default Logo
