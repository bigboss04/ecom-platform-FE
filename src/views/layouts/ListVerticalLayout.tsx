import * as React from 'react'

import { NextPage } from 'next'

//Mui
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'

// component
import IconifyIcon from 'src/components/Icon'

// config
import { VerticalItems } from 'src/configs/layout'

// type MenuItem = {
//   title: string
//   icon: string
//   children?: MenuItem[]
// }
type TProps = {
  open: boolean
}

type TListItems = {
  level: number
  openItems: {
    [key: string]: boolean
  }
  items: any
  setOpenItems: React.Dispatch<
    React.SetStateAction<{
      [key: string]: boolean
    }>
  >
  disabled: boolean
}

// de quy

const RecursiveListItems: NextPage<TListItems> = ({ items, level, openItems, setOpenItems, disabled }) => {
  // Tạo state lưu trạng thái mở của từng item theo key
  const handleClick = (title: string) => {
    if (!disabled) {
      setOpenItems(prev => ({
        ...prev,
        [title]: !prev[title]
      }))
    }
  }

  return (
    <>
      {items?.map((item: any) => (
        <React.Fragment key={item.title}>
          <ListItemButton
            sx={{
              padding: `8px 10px 8px ${level * (level === 1 ? 28 : 20)}px`,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
            onClick={() => {
              if (item.children) {
                handleClick(item.title)
              }
            }}
          >
            <ListItemIcon>
              <IconifyIcon icon={item.icon} />
            </ListItemIcon>
            {!disabled && <ListItemText primary={item.title} />}
            {item?.children && item.children.length > 0 && (
              <>
                {openItems[item.title] ? (
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
                <Collapse in={openItems[item.title]} timeout='auto' unmountOnExit>
                  <RecursiveListItems
                    items={item.children}
                    level={level + 1}
                    openItems={openItems}
                    setOpenItems={setOpenItems}
                    disabled={disabled}
                  />
                </Collapse>
              )}
            </>
          )}
        </React.Fragment>
      ))}
    </>
  )
}

const ListVerticalLayout: NextPage<TProps> = ({ open }) => {
  // Tạo state lưu trạng thái mở của từng item theo key
  const [openItems, setOpenItems] = React.useState<{ [key: string]: boolean }>({})
  React.useEffect(() => {
    if (!open) {
      setOpenItems({})
    }
  }, [open])

  return (
    <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
      component='nav'
      aria-labelledby='nested-list-subheader'
    >
      <RecursiveListItems
        disabled={!open}
        items={VerticalItems}
        level={1}
        openItems={openItems}
        setOpenItems={setOpenItems}
      />
    </List>
  )
}

export default ListVerticalLayout
