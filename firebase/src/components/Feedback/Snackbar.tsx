"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { FaCheckCircle, FaInfoCircle, FaTimes, FaBan, FaExclamation } from "react-icons/fa";

interface Props {
  open: boolean;
  message: string;
  type: "success" | "error" | "alert" | "info";
  onClose: () => void;
  position?: "left-bottom" | "right-bottom" | "mid-bottom" | "left-top" | "right-top" | "mid-top"
  duration?: number;
}

export function Snackbar({ open, message, type, onClose, position = "left-bottom", duration = 6000 }: Props) {
  const [isVisible, setIsVisible] = useState(open);
  const snackRef = useRef<HTMLDivElement>(null);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(onClose, 500);
  }, [onClose]);

  useEffect(() => {
    const snack = snackRef.current;
    if (snack) {
      const positionClasses = {
        "left-bottom": [["-left-full"], ["left-4"], ["bottom-4"]],
        "right-bottom": [["-right-full"], ["right-4"], ["bottom-4"]],
        "mid-bottom": [["-bottom-full"], ["bottom-4"], ["left-1/2", "transform", "-translate-x-1/2"]],
        "left-top": [["-left-full"], ["left-4"], ["top-4"]],
        "right-top": [["-right-full"], ["right-4"], ["top-4"]],
        "mid-top": [["-top-full"], ["top-4"], ["left-1/2", "transform", "-translate-x-1/2"]],
      };

      const [whenNotVisible, whenVisible, always] = positionClasses[position]

      whenNotVisible.forEach(cls => snack.classList.toggle(cls, !isVisible))
      whenVisible.forEach(cls => snack.classList.toggle(cls, isVisible))
      always.forEach(cls => snack.classList.toggle(cls, true))
    }
  }, [isVisible, position]);

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
      case "error":
        return <FaBan className="text-red-500" />;
      case "alert":
        return <FaExclamation className="text-yellow-500" />;
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
      case "error":
        return "bg-red-100 text-red-800";
      case "alert":
        return "bg-yellow-100 text-yellow-800";
      case "info":
        return "bg-blue-100 text-blue-800";
      default:
        return "";
    }
  }

  return (
    <div
      ref={snackRef}
      className={`fixed rounded-md p-4 shadow-md transition-[inset] duration-500 ease-in-out ${getSnackbarColor()}`}
    >
      <div className="flex items-center gap-3">
        <Icon />
        <p className="max-w-[250px] text-sm">{message}</p>
        <FaTimes className="cursor-pointer text-gray-500" onClick={handleClose} />
      </div>
    </div>
  );
}
