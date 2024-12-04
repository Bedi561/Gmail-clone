/* eslint-disable no-unused-vars */
// import React from 'react';
import { MdStar, MdStarBorder, MdLabelImportant, MdInbox, MdRefresh, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { Emails } from './Emails';

const sampleEmails = [
    {
        id: 1,
        from: 'John Doe',
        subject: 'Meeting tomorrow',
        preview: 'Hi, just a reminder about our meeting tomorrow at 10 AM...',
        date: 'May 15',
        isStarred: false,
        isImportant: true,
    },
    {
        id: 2,
        from: 'Jane Smith',
        subject: 'Project update',
        preview: 'I\'ve finished the first draft of the project report. Please review...',
        date: 'May 14',
        isStarred: true,
        isImportant: false,
    },
    {
        id: 3,
        from: 'Newsletter',
        subject: 'Your weekly digest',
        preview: 'Check out the latest news and updates in your industry...',
        date: 'May 13',
        isStarred: false,
        isImportant: false,
    },
    // Add more sample emails as needed
];

export const Inbox = () => {
    return (
        <div className="flex-1 bg-white">
            <div className="flex items-center justify-between px-4 py-2 border-b">
                <div className="flex items-center">
                    <input type="checkbox" className="mr-3" aria-label="Select all emails" />
                    <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Inbox">
                        <MdInbox className="text-xl text-gray-600" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full ml-2" aria-label="Refresh">
                        <MdRefresh className="text-xl text-gray-600" />
                    </button>
                    <span className="ml-4 text-sm font-medium text-gray-700">Primary</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                    <span>1-50 of 1,234</span>
                    <button className="p-2 hover:bg-gray-100 rounded-full ml-2" aria-label="Previous page">
                        <MdKeyboardArrowLeft className="text-xl" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded-full" aria-label="Next page">
                        <MdKeyboardArrowRight className="text-xl" />
                    </button>
                </div>
            </div>
            <div className="overflow-auto h-[calc(100vh-112px)]">
                {/* {sampleEmails.map((email) => (
                    <div key={email.id} className="flex items-center px-4 py-2 border-b hover:bg-gray-100 cursor-pointer">
                        <input type="checkbox" className="mr-4" aria-label={`Select email from ${email.from}`} />
                        <button className="p-2 hover:bg-gray-200 rounded-full" aria-label={email.isStarred ? "Unstar email" : "Star email"}>
                            {email.isStarred ? (
                                <MdStar className="text-xl text-yellow-400" />
                            ) : (
                                <MdStarBorder className="text-xl text-gray-400" />
                            )}
                        </button>
                        <button className="p-2 hover:bg-gray-200 rounded-full" aria-label={email.isImportant ? "Mark as not important" : "Mark as important"}>
                            {email.isImportant ? (
                                <MdLabelImportant className="text-xl text-yellow-400" />
                            ) : (
                                <MdLabelImportant className="text-xl text-gray-400" />
                            )}
                        </button>
                        <div className="flex-1 min-w-0">
                            <div className="flex items-center">
                                <span className="font-semibold text-sm truncate">{email.from}</span>
                                <span className="ml-auto text-xs text-gray-500">{email.date}</span>
                            </div>
                            <div className="text-sm truncate">{email.subject}</div>
                            <div className="text-sm text-gray-500 truncate">{email.preview}</div>
                        </div>
                    </div>
                ))} */}
                <Emails/>
            </div>
        </div>
    );
};

