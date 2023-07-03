import { Drawer } from 'antd'

// eslint-disable-next-line react/prop-types
const DrawerComponent = ({ title = '', placement = 'right', isOpen = false, children, ...rests }) => {
    return (
        <div>
            <Drawer title={title} placemen={placement} open={isOpen} {...rests}>
                {children}
            </Drawer>
        </div>
    )
}

export default DrawerComponent