"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FaCheckCircle, FaExclamationTriangle, FaExclamationCircle, FaInfoCircle, FaTimes } from "react-icons/fa";

interface Props {
  open: boolean;
  message: string;
  type: "success" | "warning" | "alert" | "info";
  onClose: () => void;
  duration?: number;
}

export function Snackbar({ open, message, type, onClose, duration = 6000 }: Props) {
  const [isVisible, setIsVisible] = useState(open);
  const snackRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(onClose, 500);
  }, [onClose]);

  useEffect(() => {
    const snack = snackRef.current;
    if (snack) {
      snack.classList.toggle("-left-full", !isVisible);
      snack.classList.toggle("left-4", isVisible);
    }
  }, [isVisible]);

  useEffect(() => {
    if (open) {
      setIsVisible(true);
      const timeout = setTimeout(handleClose, duration);
      return () => clearTimeout(timeout);
    }
  }, [open, handleClose, duration]);

  function Icon() {
    switch (type) {
      case "success":
        return <FaCheckCircle className="text-green-500" />;
      case "warning":
        return <FaExclamationTriangle className="text-yellow-500" />;
      case "alert":
        return <FaExclamationCircle className="text-red-500" />;
      case "info":
        return <FaInfoCircle className="text-blue-500" />;
      default:
        return null;
    }
  }

  function getSnackbarColor() {
    switch (type) {
      case "success":
        return "bg-green-100 text-green-800";
      case "warning":
        return "bg-yellow-100 text-yellow-800";
      case "alert":
        return "bg-red-100 text-red-800";
      case "info":
        return "bg-blue-100 text-blue-800";
      default:
        return "";
    }
  }

  return (
    <div
      ref={snackRef}
      className={`fixed bottom-4 rounded-md p-4 shadow-md transition-[left] duration-500 ease-in-out ${getSnackbarColor()}`}
    >
      <div className="flex items-center gap-3">
        <Icon />
        <p className="max-w-[250px] text-sm">{message}</p>
        <FaTimes className="cursor-pointer text-gray-500" onClick={handleClose} />
      </div>
    </div>
  );
}
