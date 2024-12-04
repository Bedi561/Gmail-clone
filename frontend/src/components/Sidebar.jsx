
import { MdInbox, MdStar, MdAccessTime, MdSend, MdInsertDriveFile, MdLabel, MdDelete, MdAdd } from 'react-icons/md';

export const Sidebar = () => {
    const mainLinks = [
        {
            icon: <MdInbox className="text-xl" />,
            name: 'Inbox'
        },
        {
            icon: <MdStar className="text-xl" />,
            name: 'Starred'
        },
        {
            icon: <MdAccessTime className="text-xl" />,
            name: 'Snoozed'
        },
        {
            icon: <MdSend className="text-xl" />,
            name: 'Sent'
        }
    ];

    const otherLinks = [
        {
            icon: <MdInsertDriveFile className="text-xl" />,
            name: 'Drafts'
        },
        {
            icon: <MdLabel className="text-xl" />,
            name: 'Categories'
        },
        {
            icon: <MdDelete className="text-xl" />,
            name: 'Trash'
        }
    ];

    return (
        <div className="w-64 bg-gray-100 h-screen overflow-y-auto pb-8 sidebar">
            <div className="px-4 py-4">
                <button className="w-full bg-blue-500 text-white rounded-full py-3 px-6 flex items-center justify-center gap-2 hover:bg-blue-600 transition-colors">
                    <MdAdd className="text-xl" />
                    <span className="font-medium">Compose</span>
                </button>
            </div>
            <div className="px-2">
                <ul className="space-y-1 pb-4">
                    {mainLinks.map(({icon, name}) => (
                        <li key={name}>
                            <a href="#" className="flex items-center gap-4 text-gray-700 hover:bg-gray-200 rounded-full py-2 px-4 transition-colors">
                                {icon}
                                <span className="text-sm font-medium">{name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
                <ul className="space-y-1 pb-4">
                    {otherLinks.map(({icon, name}) => (
                        <li key={name}>
                            <a href="#" className="flex items-center gap-4 text-gray-700 hover:bg-gray-200 rounded-full py-2 px-4 transition-colors">
                                {icon}
                                <span className="text-sm font-medium">{name}</span>
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="pt-4">
                    <button className="flex items-center gap-4 text-gray-700 hover:bg-gray-200 rounded-full py-2 px-4 transition-colors w-full">
                        <MdAdd className="text-xl" />
                        <span className="text-sm font-medium">Create new label</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

