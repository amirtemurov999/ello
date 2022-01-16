import React, { useEffect, useState } from "react";
import { colors } from "../../constants/colors";
import { Iconly } from "../Iconly";
import { useStyles } from "./hooks/useStyles";
interface IInputProps {
  placeholder: string;
  leftIcon?: string;
  rightIcon?: string;
  type?: string;
  label?: string;
  style?: React.CSSProperties;
  errorText?: string;
  error?: boolean;
  multiline?: boolean;
}
export const Input: React.FC<
  IInputProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({
  placeholder,
  leftIcon,
  rightIcon,
  type,
  label,
  style,
  error = false,
  errorText = "Error while loading!",
  multiline = false,
  ...props
}) => {
  const [visiblePassword, setVisiblePassword] = useState(true);
  const styles = useStyles();

  return (
    <div style={{ ...style, position: "relative" }}>
      <div className={styles.label}>
        <span>{label}</span>
      </div>
      <div
        className={styles.wrapper}
        style={{
          boxShadow: error ? `0 0 0 1px ${colors.crimsonRed}` : "none",
          padding: multiline ? 24 : "",
        }}
      >
        {leftIcon && (
          <div className={styles.leftIcon}>
            <Iconly name={leftIcon} color={colors.silver} />
          </div>
        )}
        {!multiline ? (
          <input
            {...props}
            type={
              type == "password" ? (visiblePassword ? type : "text") : "text"
            }
            placeholder={placeholder}
            className={styles.input}
            style={{
              marginLeft: leftIcon ? 20 : 0,
              marginRight: rightIcon ? 20 : 0,
            }}
          />
        ) : (
          <textarea
            rows={8}
            placeholder={placeholder}
            className={styles.textarea}
          />
        )}
        {rightIcon && (
          <div className={styles.rightIcon}>
            <Iconly name={rightIcon} color={colors.silver} />
          </div>
        )}
        {type == "password" && (
          <div
            className={styles.rightIcon}
            onClick={() => setVisiblePassword((old) => !old)}
          >
            <Iconly name="ViewFill" color={colors.silver} />
          </div>
        )}
      </div>
      {error && (
        <div className={styles.errorWrapper}>
          <>
            <svg
              width="18"
              height="16.2"
              viewBox="0 0 20 18"
              fill={colors.crimsonRed}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.8 1.61286L19.501 12.7739C20.464 14.3769 19.991 16.4859 18.444 17.4839C17.9248 17.8201 17.3196 17.9992 16.701 17.9999H3.298C1.477 17.9999 0 16.4699 0 14.5809C0 13.9419 0.173 13.3169 0.498 12.7739L7.2 1.61286C8.162 0.00985825 10.196 -0.481142 11.743 0.516858C12.171 0.792858 12.533 1.16786 12.8 1.61286V1.61286ZM10.58 2.45186C10.4576 2.37312 10.3205 2.32 10.1769 2.29574C10.0334 2.27147 9.88647 2.27654 9.74496 2.31066C9.60346 2.34477 9.47033 2.40722 9.35364 2.49422C9.23694 2.58122 9.13909 2.69098 9.066 2.81686L2.365 13.9799C2.25615 14.1618 2.19877 14.3699 2.199 14.5819C2.199 15.2119 2.691 15.7219 3.299 15.7219H16.7C16.906 15.7219 17.107 15.6619 17.281 15.5499C17.5307 15.384 17.7067 15.1281 17.7725 14.8357C17.8383 14.5432 17.7886 14.2367 17.634 13.9799L10.933 2.81686C10.8451 2.66988 10.7247 2.54501 10.581 2.45186H10.58ZM10 13.9999C9.73478 13.9999 9.48043 13.8945 9.29289 13.707C9.10536 13.5194 9 13.2651 9 12.9999C9 12.7346 9.10536 12.4803 9.29289 12.2928C9.48043 12.1052 9.73478 11.9999 10 11.9999C10.2652 11.9999 10.5196 12.1052 10.7071 12.2928C10.8946 12.4803 11 12.7346 11 12.9999C11 13.2651 10.8946 13.5194 10.7071 13.707C10.5196 13.8945 10.2652 13.9999 10 13.9999ZM10 4.99986C10.2652 4.99986 10.5196 5.10522 10.7071 5.29275C10.8946 5.48029 11 5.73464 11 5.99986V9.99986C11 10.2651 10.8946 10.5194 10.7071 10.707C10.5196 10.8945 10.2652 10.9999 10 10.9999C9.73478 10.9999 9.48043 10.8945 9.29289 10.707C9.10536 10.5194 9 10.2651 9 9.99986V5.99986C9 5.73464 9.10536 5.48029 9.29289 5.29275C9.48043 5.10522 9.73478 4.99986 10 4.99986V4.99986Z" />
            </svg>
            <span>{errorText}</span>
          </>
        </div>
      )}
    </div>
  );
};
