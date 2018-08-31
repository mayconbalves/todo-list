import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

const Col = (props) => {
  const {
    xs,
    sm,
    md,
    lg,
    xl,
    className,
    children
  } = props

  const componentClass = classNames({
    [`col-xs-${xs}`]: xs,
    [`col-sm-${sm}`]: sm,
    [`col-md-${md}`]: md,
    [`col-lg-${lg}`]: lg,
    [`col-xl-${xl}`]: xl,
    [className]: className
  })

  const newProps = { className: componentClass, children }

  return (
    <section {...newProps} />
  )
}

Col.propTypes = {
  xs: PropTypes.number,
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
  children: PropTypes.any,
  className: PropTypes.string
}

export default Col
