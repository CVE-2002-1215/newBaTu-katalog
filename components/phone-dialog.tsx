import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import Button from './ui/button'
import { Phone, X, XCircle } from 'lucide-react';
import IconButton from './ui/icon-button';

export default function PhoneDialog() {
//   let [isOpen, setIsOpen] = useState()

    const [open, setOpen] = useState(false);
    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);

  return (
    <>
        <div className="flex items-center justify-center space-x-4">
            <Button onClick={onOpen} className="button flex items-center rounded-full bg-black px-4 py-2 space-x-2 h-9">
                <Phone
                    size={20}
                    color="white"
                />
                <div className="flex items-center ml-1 hide-on-small-screen">542 710 8489</div>
            </Button>
        </div>

      <Transition appear show={open} as={Fragment}>
        <Dialog open={open} as="div" className="relative z-10" onClose={onClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  {/* Close button
                  <div className="flex items-center justify-end px-4">
                   <IconButton icon={<X size={15} />} onClick={onClose} />
                  </div> */}
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    İletişim Bilgileri
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-m text-gray-500">
                      Ramazan Yıldırım: +90 542 710 8489
                    </p>
                  </div>

                  <div className="mt-4 flex justify-center">
                    <Button
                      type="button"
                      onClick={onClose}
                    >
                      <X 
                        size={20}
                        color="white"
                      />
                    </Button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}