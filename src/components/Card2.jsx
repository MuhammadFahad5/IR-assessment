import React from 'react'
import setting_image from '../assets/dashboard/setting.svg'

const Card2 = () => {

  const data = [
    {
      id: 1,
      name: "John Doe",
      email: "alice@example.com",
      date: "2025/05/01",
      amount: "$120",
      status: "Submitted",
    },
    {
      id: 2,
      name: "John Doe",
      email: "bob@example.com",
      date: "2025/0502",
      amount: "$240",
      status: "Approved",
    },
    {
      id: 3,
      name: "John Doe",
      email: "charlie@example.com",
      date: "2025/05/03",
      amount: "$360",
      status: "In Progress",
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "Submitted":
        return "bg-[#E4ECF7] text-[#7480C9]";
      case "Approved":
        return "bg-[#DEFFEE] text-[#66CB9F]";
      case "In Progress":
        return "bg-[#FFEDE3] text-[#F7936F]";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };
  return (
    <section className='rounded-2xl dashboard-card-shadow bg-white p-4 mt-4'>
      <div className='rounded-2xl border '>
        <div className='p-3 flex flex-wrap items-center justify-between'>
          <h2 className="text-[#414042] text-[18px] font-bold mb-2">Request history</h2>
          <div className='flex items-center gap-5'>
            <div className="flex items-center rounded-xl px-4 py-[11px] w-full max-w-[272px] bg-[#F7FAFC]">
              <svg
                className="w-6 h-6 text-gray-500 mr-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                ></path>
              </svg>


              <input
                type="text"
                placeholder="Search"
                className="w-full outline-none text-gray-700 placeholder:text-[14px] placeholder-[#718096] bg-[#F7FAFC]"
              />
            </div>
            <div>
              <button className='text-[#396F7E] text-[14px] font-bold border border-[#396F7E] py-[9px] px-6 rounded-xl'>Filter</button>
            </div>
          </div>
        </div>

        <div className="overflow-x-auto mt-2 mb-32">
          <table className="min-w-[750px] w-full table-auto card2-table">
            <thead>
              <tr className="bg-[#F7FAFC] text-left">
                <th className="">Performed By</th>
                <th className="">Assigned To </th>
                <th className="">Date & Time</th>
                <th className="">Comments </th>
                <th className="text-center">Action Taken </th>
                <th className=""></th>
              </tr>
            </thead>
            <tbody>
              {data.map((row) => (
                <tr
                  key={row.id}
                  className="border-b "
                >
                  <td className="px-4 py-2"> <h4 className='text-[#414042] text-[12px] font-normal'>{row.name}</h4></td>
                  <td className="px-4 py-2"><h4 className='text-[#414042] text-[12px] font-normal'>{row.name}</h4></td>
                  <td className="px-4 py-2"><h4 className='text-[#414042] text-[12px] font-normal'>{row.date}</h4></td>
                  <td className="px-4 py-2"><h4 className='text-[#414042] text-[12px] font-normal'>{row.email}</h4></td>

                  <td className='text-center'>
                    <span className={`py-[4px] px-[11px] text-[10px] font-bold  ${getStatusColor(row.status)} rounded-lg`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 flex justify-center"><img src={setting_image} alt="setting" className='w-[24px]' /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  )
}

export default Card2