

const RecentUsersCard: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-sm transition-transform duration-300 hover:shadow-xl font-body text-body">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <p className="font-semibold text-heading text-[24px]">Recent Users</p>
        <a
          href="#"
          className="text-[18px] font-heading font-medium hover:text-primary hover:underline transition-colors duration-200"
        >
          View All
        </a>
      </div>

      {/* Avatars */}
      <div className="flex -space-x-4 items-center">
        {[1, 2, 3, 4, 5].map((num) => (
          <div
            key={num}
            className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow"
          >
            <img
              src={`https://i.pravatar.cc/100?img=${num}`}
              alt={`profile${num}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}

        {/* Extra users */}
        <div className="w-10 h-10 bg-soft-green text-black rounded-full flex items-center justify-center font-semibold border-2 border-white shadow">
          <span>9+</span>
        </div>
      </div>
    </div>
  );
};

export default RecentUsersCard;