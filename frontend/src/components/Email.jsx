import { MdOutlineStarBorder, MdStar, MdLabelImportant } from "react-icons/md";

export const Email = () => {
  // Sample email data for demonstration
  const email = {
    id: 1,
    from: "Coder",
    date: "10 days ago",
    subject: "Lorem ipsum dolor sit amet",
    preview: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum porro, repellendus mollitia aliquam suscipit iure!",
    isStarred: false,
    isImportant: false,
  };

  return (
    <div key={email.id} className="flex items-center px-4 py-2 border-b hover:bg-gray-100 cursor-pointer">
      {/* Checkbox */}
      <input
        type="checkbox"
        className="mr-4"
        aria-label={`Select email from ${email.from}`}
      />

      {/* Star Button */}
      <button
        className="p-2 hover:bg-gray-200 rounded-full"
        aria-label={email.isStarred ? "Unstar email" : "Star email"}
      >
        {email.isStarred ? (
          <MdStar className="text-xl text-yellow-400" />
        ) : (
          <MdOutlineStarBorder className="text-xl text-gray-400" />
        )}
      </button>

      {/* Important Button */}
      <button
        className="p-2 hover:bg-gray-200 rounded-full"
        aria-label={email.isImportant ? "Mark as not important" : "Mark as important"}
      >
        {email.isImportant ? (
          <MdLabelImportant className="text-xl text-yellow-400" />
        ) : (
        //   <MdLabelImportantOutlined className="text-xl text-gray-400" />
        <MdLabelImportant className="text-xl text-yellow-400" />
        )}
      </button>

      {/* Email Content Section */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center">
          <span className="font-semibold text-sm truncate">{email.from}</span>
          <span className="ml-auto text-xs text-gray-500">{email.date}</span>
        </div>
        <div className="text-sm truncate">{email.subject}</div>
        <div className="text-sm text-gray-500 truncate">{email.preview}</div>
      </div>
    </div>
  );
};
