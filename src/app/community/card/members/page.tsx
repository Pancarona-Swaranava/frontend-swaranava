export default function MembersPage() {
  const members = ["Zahra Yani", "Dimas Putra", "Siti Mawar", "Angga Pratama"];

  return (
    <div className="space-y-4">
      {members.map((name, i) => (
        <div
          key={i}
          className="bg-gray-100 p-4 rounded-xl flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gray-300 rounded-full" />
            <p className="font-medium">{name}</p>
          </div>
          <button className="text-2xl text-gray-500">⋯</button>
        </div>
      ))}
    </div>
  );
}
