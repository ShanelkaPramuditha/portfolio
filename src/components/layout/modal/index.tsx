'use client';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  AlertDialogCancel,
  AlertDialogContent,
} from '@/components/ui/alert-dialog';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useEffect, useState } from 'react';

interface ModalProps {
  triggerButtonLabel?: string;
  open?: boolean;
  title?: string;
  children: React.ReactNode | string;
  agreeButtonText?: string;
  disagreeButtonText?: string;
  onOpenChange?: (open: boolean) => void;
  titleClassName?: string;
  type?: 'alert' | 'confirm';
}

const alertModal = 'alert';
const confirmModal = 'confirm';

const Modal: React.FC<ModalProps> = ({
  triggerButtonLabel,
  open,
  title,
  children,
  agreeButtonText,
  disagreeButtonText,
  onOpenChange,
  type = alertModal,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Check if the modal is open
  useEffect(() => {
    if (open) {
      setIsOpen(true);
    }
  }, [open]);

  // Handle the modal open state
  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (onOpenChange) {
      onOpenChange(open);
    }
  };

  return (
    <>
      {/* Alert Dialog */}
      {type === alertModal && (
        <AlertDialog
          open={isOpen}
          onOpenChange={handleOpenChange}
        >
          {triggerButtonLabel && (
            <AlertDialogTrigger asChild>
              <Button variant="outline">{triggerButtonLabel}</Button>
            </AlertDialogTrigger>
          )}
          <AlertDialogContent className="w-[800px] max-w-full overflow-y-auto">
            <AlertDialogHeader>
              <AlertDialogTitle className={props?.titleClassName}>
                {title || ''}
              </AlertDialogTitle>

              {/* Modal Body */}
              {typeof children === 'string' ? (
                <AlertDialogDescription>{children}</AlertDialogDescription>
              ) : (
                children
              )}
            </AlertDialogHeader>

            {/* Footer Buttons */}
            {agreeButtonText ||
              (disagreeButtonText && (
                <AlertDialogFooter>
                  {disagreeButtonText && (
                    <AlertDialogCancel>{disagreeButtonText}</AlertDialogCancel>
                  )}
                  {agreeButtonText && (
                    <AlertDialogAction>{agreeButtonText}</AlertDialogAction>
                  )}
                </AlertDialogFooter>
              ))}
          </AlertDialogContent>
        </AlertDialog>
      )}

      {/* Confirm Dialog */}
      {type === confirmModal && (
        <Dialog
          open={isOpen}
          onOpenChange={handleOpenChange}
        >
          {triggerButtonLabel && (
            <DialogTrigger asChild>
              <Button variant="outline">{triggerButtonLabel}</Button>
            </DialogTrigger>
          )}

          <DialogContent className="w-[800px] max-w-full overflow-y-auto">
            <DialogHeader>
              <DialogTitle className={props?.titleClassName}>
                {title || ''}
              </DialogTitle>

              {/* Modal Body */}
              {typeof children === 'string' ? (
                <DialogDescription>{children}</DialogDescription>
              ) : (
                children
              )}
            </DialogHeader>

            {/* Footer Buttons */}
            {agreeButtonText ||
              (disagreeButtonText && (
                <DialogFooter>
                  {disagreeButtonText && (
                    <Button
                      variant="outline"
                      onClick={() => handleOpenChange(false)}
                    >
                      {disagreeButtonText}
                    </Button>
                  )}
                  {agreeButtonText && <Button>{agreeButtonText}</Button>}
                </DialogFooter>
              ))}
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default Modal;
