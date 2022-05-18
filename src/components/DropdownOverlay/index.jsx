import React from 'react';
import { Menu } from 'antd';

function DropdownItem(props) {
  const { items, type, title, onClick, record, ...restProps } = props || {};

  if (type === 'subMenu' && items?.length) {
    return (
      <Menu.SubMenu title={title} {...restProps}>
        {(items || []).map((item, i) => (
          <DropdownItem record={record} key={`submenu-item-${i}`} {...item} />
        ))}
      </Menu.SubMenu>
    )
  }

  if (type === 'itemGroup' && items?.length) {
    return (
      <Menu.ItemGroup title={title} {...restProps}>
        {(items || []).map((item, i) => (
          <DropdownItem record={record} key={`group-item-${i}`} {...item} />
        ))}
      </Menu.ItemGroup>
    )
  }

  if (type === 'divider' || type === 'dashed') {
    return <Menu.Divider dashed={type === 'dashed'} />
  }

  return (
    <Menu.Item onClick={onClick ? (menuInfo) => onClick(menuInfo, record) : undefined} {...restProps}>{title}</Menu.Item>
  )

}

export default function DropdownOverlay(props) {
  const { record, items, className } = props || {};

  return (
    <Menu className={className}>
      {(items || []).map((item, i) => (
        <DropdownItem record={record} key={`dropdown-item-${i}`} {...item} />
      ))}
    </Menu>
  )
}
