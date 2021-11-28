import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useEffect, useRef, useState } from 'react';
import { editEntry } from '@/lib/db';

import { PencilIcon } from '@heroicons/react/outline';

// @ts-ignore
export default function Edit({ entryDetails, open, editEntryLive, closeEdit }) {
  const [loading, setLoading] = useState(false);
  const [glow, setGlow] = useState('');
  const [grow, setGrow] = useState('');

  useEffect(() => {
    setGlow(entryDetails.glow);
    setGrow(entryDetails.grow);
  }, [entryDetails]);

  const cancelButtonRef = useRef(null);

  const handleEdit = () => {
    setLoading(true);
    editEntry(glow, grow, entryDetails.id, () => {
      setLoading(false);
      editEntryLive(glow, grow, entryDetails.id);
      closeEdit();
    });
  };

  const handleGlow = (e: any) => {
    setGlow(e.target.value);
  };
  const handleGrow = (e: any) => {
    setGrow(e.target.value);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as="div"
        className="fixed z-10 inset-0 overflow-y-auto"
        initialFocus={cancelButtonRef}
        onClose={closeEdit}
      >
        <div className="flex items-end justify-center min-h-screen pt-6 px-4 pb-10 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block align-bottom bg-funBlue rounded-2xl text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <div className="bg-funBlue px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <PencilIcon
                      className="h-6 w-6 text-yellow-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center w-full sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-lg leading-6 font-medium text-white"
                    >
                      Edit Entry
                    </Dialog.Title>
                    <div className="mt-2 flex flex-col w-full">
                      <p>Entry from {entryDetails.date}</p>
                      <input
                        value={glow}
                        onChange={handleGlow}
                        className="mt-4 w-full text-gray-100 rounded-xl bg-fieldBlue px-4 py-3 placeholder-gray-300"
                      />
                      <input
                        value={grow}
                        onChange={handleGrow}
                        className="mt-4 w-full text-gray-100 rounded-xl bg-fieldBlue px-4 py-3 placeholder-gray-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-funBlue px-4 pb-6 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  onClick={handleEdit}
                  className="mt-6 mx-1 bg-indigo-500 hover:bg-indigo-600 text-base text-white font-bold hover:bg-hover-600 rounded-full px-6 pt-2 pb-1"
                >
                  {loading ? (
                    <div
                      style={{
                        margin: '0 44.8px',
                        borderTopColor: 'transparent'
                      }}
                      className="w-8 h-8 border-2 border-white border-solid rounded-full animate-spin"
                    ></div>
                  ) : (
                    'Complete Entry!'
                  )}
                </button>
                <button
                  onClick={closeEdit}
                  ref={cancelButtonRef}
                  className="mt-6 mx-1 bg-funBlue-lighter text-base text-white font-bold hover:bg-funBlue-light rounded-full px-6 pt-2 pb-1"
                >
                  Cancel
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
