import React, { forwardRef, HTMLAttributes } from 'react'
import classNames from 'classnames'

import { Colors } from '../Types'

export interface CTableHeaderCellProps extends HTMLAttributes<HTMLTableHeaderCellElement> {
  /**
   * A string of all className you want applied to the component. [docs]
   */
  className?: string
  /**
   * Sets the color context of the component to one of CoreUI’s themed colors. [docs]
   *
   * @type 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'dark' | 'light' | string
   */
  color: Colors
}

export const CTableHeaderCell = forwardRef<HTMLTableHeaderCellElement, CTableHeaderCellProps>(
  ({ children, className, color, ...rest }, ref) => {
    const _className = classNames(
      {
        [`table-${color}`]: color,
      },
      className,
    )

    return (
      <th className={_className ? _className : undefined} {...rest} ref={ref}>
        {children}
      </th>
    )
  },
)