import {
  ChartBarIcon,
  PencilIcon,
  StarIcon,
  XIcon
} from '@heroicons/react/outline';
import { useEffect, useState } from 'react';

import AppLayout from '@/components/app/AppLayout';
import Edit from '@/components/dashboard/Edit';
import Head from 'next/head';
import Image from 'next/image';
import Notebook from '../public/images/notebook.png';
import React from 'react';
import { deleteEntry } from '@/lib/db';
import fetcher from '@/utils/fetcher';
import { useAuth } from '@/lib/auth';
import useSWR from 'swr';

import Link from 'next/link'

type Entry = {
  createdAt: string,
  glow: string,
  grow: string,
  id: string,
  userId: string,
}

// @ts-ignore
function dashboard() {
  const auth: any = useAuth();
  const [completed, setCompleted] = useState([]);

  const [loading, setLoading] = useState(true);

  const [editOpen, setEditOpen] = useState(false);
  const [entryDetails, setEntryDetails] = useState({
    glow: '',
    grow: '',
    id: '',
    date: ''
  });

  const { data: entries } = useSWR(
    auth.user ? [`/api/getEntries/${auth.user.uid}`, auth.user.token] : null,
    fetcher
  );

  useEffect(() => {
    if (entries) {
      setCompleted(entries.entries);
      setLoading(false);
    }
  }, [entries]);

  // @ts-ignore
  const openEdit = (glow, grow, id, date) => {
    setEntryDetails({ glow, grow, id, date });
    setEditOpen(true);
  };

  const closeEdit = () => {
    setEditOpen(false);
  };

  // @ts-ignore
  const handleDelete = (id) => {
    deleteEntry(id, () => console.log('hi'));

    // @ts-ignore
    setCompleted(completed.filter((item) => item.id !== id));
  };

  // @ts-ignore
  const editEntryLive = (glow, grow, id) => {
    let tempCompleted = completed.slice();
    tempCompleted.forEach((item: Entry, index) => {
      console.log(item)
      if (item.id === id) {
  // @ts-ignore
        tempCompleted[index].glow = glow;
  // @ts-ignore
        tempCompleted[index].grow = grow;
      }
    });
    setCompleted(tempCompleted);
  };

  return (
    <>
      <Head>
        <title>Dashboard | GlowAndGrow</title>
      </Head>
      <AppLayout>
        <Edit
          entryDetails={entryDetails}
          open={editOpen}
          editEntryLive={editEntryLive}
          closeEdit={() => closeEdit()}
        />
        <div className="max-w-4xl w-full flex justify-center mx-auto bg-funBlue pt-8 pb-8 px-4 sm:px-6 lg:pt-8 lg:pb-12 lg:px-8">
          <div className="relative mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl w-full">
            <div>
              <h1 className="text-6xl text-indigo-300">Past Entries</h1>
            </div>
            <div>
              {loading ? (
                <div
                  style={{
                    margin: '100px auto 0',
                    borderTopColor: 'transparent'
                  }}
                  className="w-20 h-20 border-2 border-white border-solid rounded-full animate-spin"
                ></div>
              ) : (
                <> {
                  completed.length === 0 ? (<div className="w-full pt-6"><p>You have no entries. Go <Link href="/new-entry"><span  className="underline font-bold cursor-pointer">create</span></Link> your first one!</p></div>) : (<div className="w-full pt-6 flex flex-col space-y-5">
                  {completed.map((entry: any) => (
                    <div key={entry.id}>
                      <div className="flex items-center text-sm text-gray-500 space-x-2">
                        <time dateTime={entry.createdAt}>
                          {new Date(entry.createdAt).toDateString()}
                        </time>
                        <div className="mt-1 space-x-1">
                          <button
                            onClick={() =>
                              openEdit(
                                entry.glow,
                                entry.grow,
                                entry.id,
                                new Date(entry.createdAt).toDateString()
                              )
                            }
                          >
                            <PencilIcon className="w-4 h-4" />
                          </button>
                          <button onClick={() => handleDelete(entry.id)}>
                            <XIcon className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 space-x-0 md:flex-row mt-2">
                        <div className="w-full border-indigo-300 border rounded-lg text-md text-indigo-300 flex flex-row space-x-3 p-2">
                          <StarIcon className="w-5 h-5" />
                          <p className="md:max-w-xs opacity-40">{entry.glow}</p>
                        </div>
                        <div className="w-full border-indigo-300 border rounded-lg text-md text-indigo-300 flex flex-row space-x-3 p-2">
                          <ChartBarIcon className="w-5 h-5" />
                          <p className="md:max-w-xs opacity-40">{entry.grow}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>)
                }
                </>
                
              )}
            </div>
          </div>
        </div>
      </AppLayout>
    </>
  );
}

export default dashboard;
