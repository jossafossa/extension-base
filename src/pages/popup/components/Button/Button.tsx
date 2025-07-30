import classNames from "classnames";
import { type JSX } from 'preact';

import classes from "./Button.module.scss";


export const Button = (
  {className, ...props}: JSX.HTMLAttributes<HTMLButtonElement>
) => {
  return (
    <button className={classNames(classes.button, className)}  {...props} />
  );
};