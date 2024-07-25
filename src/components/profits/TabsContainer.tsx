'use client'

import { Box, Tab, Tabs } from '@mui/material'
import clsx from 'clsx'
import { useState } from 'react'
import { Profits } from './Profits'
import { Menus } from './Menus'
import { IMenu } from '@/interfaces/menu.interface'

interface Props {
  menu: IMenu[]
}
export const TabsContainer = ({ menu }: Props) => {
  const [value, setValue] = useState('one')

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <>
      <Box sx={{ width: '100%' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          centered
        >
          <Tab value="one" label="Ganancias" />
          <Tab value="two" label="Menu" />
        </Tabs>
      </Box>
      <div className={clsx('',value === 'one' ? '' : 'hidden')}>
        <Profits />
      </div>
      <div className={clsx('',value === 'two' ? '' : 'hidden')}>
        <Menus menu={menu}/>
      </div>
    </>
  )
}
