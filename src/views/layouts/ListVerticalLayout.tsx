import * as React from 'react'

import { NextPage } from 'next'

//Mui
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

// component
import IconifyIcon from 'src/components/Icon'

// config
import { VerticalItems } from 'src/configs/layout'

type MenuItem = {
  title: string
  icon: string
  children?: MenuItem[]
}
type TProps = {}

// de quy

const RecursiveListItem = ({ items, level }: { items: MenuItem[]; level: number }) => {
  // Tạo state lưu trạng thái mở của từng item theo key
  const [openItem, setOpenItem] = React.useState<{ [key: string]: boolean }>({})

  const handleClick = React.useCallback((title: string) => {
    setOpenItem(prev => ({
      ...prev,
      [title]: !prev[title]
    }))
  }, [])

  return (
    <>
      {items.map(item => (
        <React.Fragment key={item.title}>
          <ListItemButton
            sx={{ padding: `8px 10px 8px ${level * 10}px` }}
            onClick={() => {
              if (item.children) {
                handleClick(item.title)
              }
            }}
          >
            <ListItemIcon>
              <IconifyIcon icon={item.icon} />
            </ListItemIcon>
            <ListItemText primary={item.title} />

            {item?.children && item.children.length > 0 && (
              <>
                {openItem[item.title] ? (
                  <IconifyIcon icon='si:expand-more-duotone' />
                ) : (
                  <IconifyIcon icon='si:expand-less-line' />
                )}
              </>
            )}
          </ListItemButton>

          {item.children && item.children.length > 0 && (
            <>
              {item.children && (
                <Collapse in={openItem[item.title]} timeout='auto' unmountOnExit>
                  <RecursiveListItem items={item.children} level={level + 1} />
                </Collapse>
              )}
            </>
          )}
        </React.Fragment>
      ))}
    </>
  )
}

const ListVerticalLayout: NextPage<TProps> = () => {
  // Tạo state lưu trạng thái mở của từng item theo key
  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component='nav'
      aria-labelledby='nested-list-subheader'
    >
      <RecursiveListItem items={VerticalItems} level={1} />
    </List>
  )
}

export default ListVerticalLayout
