import React, { ReactNode, SFC } from "react"
import { StackableBorderBox } from "Styleguide/Elements/Box"
import { Flex } from "Styleguide/Elements/Flex"

interface MobileTopBarProps {
  children: ReactNode
}

export const MobileTopBar: SFC<MobileTopBarProps> = ({ children }) => {
  return (
    <StackableBorderBox px={2} py={1}>
      <Flex width="100%" justifyContent="space-between" alignItems="center">
        {children}
      </Flex>
    </StackableBorderBox>
  )
}
