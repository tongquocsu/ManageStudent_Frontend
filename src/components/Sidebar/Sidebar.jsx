import { Menu } from "antd";
import { useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

// submenu keys of first level
const rootSubmenuKeys = ["sub1", "sub2", "sub3", "sub4", "sub5", "sub6"];
const Sidebar = (props) => {
  // eslint-disable-next-line react/prop-types
  const { itemsBottom = [], itemsTop = [], handleMenuClick } = props;
  const [openKeys, setOpenKeys] = useState(["sub1"]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <div className="mx-auto">
      <Menu
        mode="inline"
        onClick={({ key }) => handleMenuClick(key)}
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        style={{
          width: 256,
        }}
        items={itemsTop}
      />
      <Menu
        className="bottom-0 absolute"
        mode="inline"
        openKeys={openKeys}
        onOpenChange={onOpenChange}
        onClick={({ key }) => handleMenuClick(key)}
        style={{
          width: 256,
        }}
        items={itemsBottom}
      />
    </div>
  );
};
export default Sidebar;
